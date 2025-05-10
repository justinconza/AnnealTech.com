import fetch from 'node-fetch';
import { z } from 'zod';

// Validate that required API keys are present
const validateApiKey = (apiKey: string | undefined, serviceName: string): string => {
  if (!apiKey) {
    throw new Error(`${serviceName} API key is missing. Please add it to your environment variables.`);
  }
  return apiKey;
};

// API key validation
export const vtApiKey = validateApiKey(process.env.VIRUSTOTAL_API_KEY, 'VirusTotal');
export const shodanApiKey = validateApiKey(process.env.SHODAN_API_KEY, 'Shodan');
export const securityTrailsApiKey = validateApiKey(process.env.SECURITYTRAILS_API_KEY, 'SecurityTrails');
export const alienVaultApiKey = validateApiKey(process.env.ALIENVAULT_API_KEY, 'AlienVault OTX');

// VirusTotal API response schema for URL scanning
const VTUrlReportSchema = z.object({
  data: z.object({
    attributes: z.object({
      last_analysis_stats: z.object({
        malicious: z.number(),
        suspicious: z.number(),
        harmless: z.number(),
        undetected: z.number()
      }).optional(),
      reputation: z.number().optional(),
      last_analysis_date: z.number().optional(),
      categories: z.record(z.string(), z.string()).optional(),
      total_votes: z.object({
        harmless: z.number(),
        malicious: z.number()
      }).optional()
    })
  })
});

type VTUrlReport = z.infer<typeof VTUrlReportSchema>;

/**
 * Check a URL's reputation using VirusTotal API
 */
export async function checkUrlWithVirusTotal(url: string): Promise<VTUrlReport | null> {
  try {
    // First, get the URL ID by submitting it for analysis
    const urlId = Buffer.from(url).toString('base64').replace(/=+$/, '');
    
    const response = await fetch(`https://www.virustotal.com/api/v3/urls/${urlId}`, {
      method: 'GET',
      headers: {
        'x-apikey': vtApiKey
      }
    });

    if (!response.ok) {
      // If URL hasn't been scanned before, we'll submit it for scanning
      if (response.status === 404) {
        console.log('URL not found in VirusTotal, submitting for analysis...');
        return null;
      }
      
      console.error(`VirusTotal API error: ${response.status} - ${await response.text()}`);
      return null;
    }

    const data = await response.json();
    return VTUrlReportSchema.parse(data);
  } catch (error) {
    console.error('Error checking URL with VirusTotal:', error);
    return null;
  }
}

// Shodan API response schema for host information
const ShodanHostSchema = z.object({
  ip_str: z.string(),
  ports: z.array(z.number()).optional(),
  hostnames: z.array(z.string()).optional(),
  country_name: z.string().optional(),
  org: z.string().optional(),
  isp: z.string().optional(),
  vulns: z.array(z.string()).optional(),
  data: z.array(z.object({
    port: z.number(),
    transport: z.string(),
    product: z.string().optional(),
    version: z.string().optional()
  })).optional()
});

type ShodanHost = z.infer<typeof ShodanHostSchema>;

/**
 * Get host information from Shodan API
 */
export async function checkHostWithShodan(hostname: string): Promise<ShodanHost | null> {
  try {
    // Try to resolve hostname to IP first
    const response = await fetch(`https://api.shodan.io/dns/resolve?hostnames=${encodeURIComponent(hostname)}&key=${shodanApiKey}`);
    
    if (!response.ok) {
      console.error(`Shodan DNS resolve API error: ${response.status} - ${await response.text()}`);
      return null;
    }
    
    const resolveData = await response.json();
    const ip = resolveData[hostname];
    
    if (!ip) {
      console.error(`Could not resolve hostname ${hostname} using Shodan`);
      return null;
    }
    
    // Get host information
    const hostResponse = await fetch(`https://api.shodan.io/shodan/host/${ip}?key=${shodanApiKey}`);
    
    if (!hostResponse.ok) {
      console.error(`Shodan host API error: ${hostResponse.status} - ${await hostResponse.text()}`);
      return null;
    }
    
    const hostData = await hostResponse.json();
    return ShodanHostSchema.parse(hostData);
  } catch (error) {
    console.error('Error checking host with Shodan:', error);
    return null;
  }
}

// SecurityTrails API response schema for domain information
const SecurityTrailsDomainSchema = z.object({
  current_dns: z.object({
    a: z.object({
      values: z.array(z.object({
        ip: z.string(),
        ip_organization: z.object({
          name: z.string().optional()
        }).optional()
      })).optional()
    }).optional(),
    mx: z.object({
      values: z.array(z.object({
        host: z.string(),
        priority: z.number()
      })).optional()
    }).optional(),
    ns: z.object({
      values: z.array(z.string()).optional()
    }).optional()
  }).optional(),
  alexa_rank: z.number().optional(),
  whois: z.object({
    registrar: z.string().optional(),
    created_date: z.string().optional(),
    updated_date: z.string().optional(),
    expires_date: z.string().optional()
  }).optional()
});

type SecurityTrailsDomain = z.infer<typeof SecurityTrailsDomainSchema>;

/**
 * Get domain information from SecurityTrails API
 */
export async function checkDomainWithSecurityTrails(domain: string): Promise<SecurityTrailsDomain | null> {
  try {
    const response = await fetch(`https://api.securitytrails.com/v1/domain/${encodeURIComponent(domain)}`, {
      method: 'GET',
      headers: {
        'APIKEY': securityTrailsApiKey
      }
    });
    
    if (!response.ok) {
      console.error(`SecurityTrails API error: ${response.status} - ${await response.text()}`);
      return null;
    }
    
    const data = await response.json();
    return SecurityTrailsDomainSchema.parse(data);
  } catch (error) {
    console.error('Error checking domain with SecurityTrails:', error);
    return null;
  }
}

// AlienVault OTX API response schema for pulse information
const OTXPulseSchema = z.object({
  results: z.array(z.object({
    name: z.string(),
    created: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    targeted_countries: z.array(z.string()).optional(),
    adversary: z.string().optional(),
    malware_families: z.array(z.string()).optional()
  }))
});

type OTXPulseResult = z.infer<typeof OTXPulseSchema>;

/**
 * Get threat intelligence data from AlienVault OTX
 */
export async function getThreatsFromOTX(indicator: string, indicatorType: 'domain' | 'hostname' | 'ip' | 'url'): Promise<OTXPulseResult | null> {
  try {
    let type;
    switch (indicatorType) {
      case 'domain':
        type = 'domain';
        break;
      case 'hostname':
        type = 'hostname';
        break;
      case 'ip':
        type = 'IPv4';
        break;
      case 'url':
        type = 'url';
        break;
      default:
        throw new Error(`Invalid indicator type: ${indicatorType}`);
    }
    
    const response = await fetch(`https://otx.alienvault.com/api/v1/indicators/${type}/${encodeURIComponent(indicator)}/general`, {
      method: 'GET',
      headers: {
        'X-OTX-API-KEY': alienVaultApiKey
      }
    });
    
    if (!response.ok) {
      console.error(`AlienVault OTX API error: ${response.status} - ${await response.text()}`);
      return null;
    }
    
    const data = await response.json();
    return OTXPulseSchema.parse(data);
  } catch (error) {
    console.error('Error getting threats from AlienVault OTX:', error);
    return null;
  }
}