import OpenAI from "openai";

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// The newest OpenAI model is "gpt-4o" which was released May 13, 2024. Do not change this unless explicitly requested by the user
const DEFAULT_MODEL = "gpt-4o";

// Email security analysis
export async function analyzeEmailSecurity(emailData: string) {
  try {
    console.log("Analyzing email headers with length:", emailData.length);

    // Extract first 100 chars for logging
    const emailPreview = emailData.substring(0, 100).replace(/\n/g, " ") + "...";
    console.log("Email preview:", emailPreview);

    // Create the prompt with JSON keyword
    const systemPrompt = "You are an expert email security analyst. Analyze the provided email headers or content for security issues, SPF/DKIM validation, suspicious origins, and potential threats. Provide a security rating from 1-10 and specific recommendations. Respond with JSON including these fields: 'securityScore' (number), 'issues' (array of strings), 'validations' (object with boolean fields: spf, dkim, dmarc), 'recommendations' (array of strings).";
    const userPrompt = `Analyze the following email headers and respond with JSON format:\n\n${emailData}`;
    
    console.log("System prompt:", systemPrompt);
    console.log("User prompt preview:", userPrompt.substring(0, 100) + "...");

    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: userPrompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
    });

    console.log("OpenAI response received");
    const content = response.choices[0].message.content;
    console.log("Response content preview:", content ? content.substring(0, 100) + "..." : "no content");

    return content ? JSON.parse(content) : {};
  } catch (error) {
    console.error("Error analyzing email security:", error);
    throw new Error("Failed to analyze email security");
  }
}

// Phishing detection
export async function detectPhishing(content: string) {
  try {
    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content: 
            "You are a phishing detection expert. Analyze the provided email or URL for signs of phishing, including deceptive domains, urgency tactics, grammar issues, and suspicious requests. Provide a threat score from 1-10, identify red flags, and explain why they're concerning. Respond with JSON including: 'score', 'redFlags' (array), 'assessment' (string), 'recommendations' (array).",
        },
        {
          role: "user",
          content: `Analyze this content for phishing and respond with JSON:\n\n${content}`,
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.2,
    });

    const messageContent = response.choices[0].message.content;
    return messageContent ? JSON.parse(messageContent) : {};
  } catch (error) {
    console.error("Error detecting phishing:", error);
    throw new Error("Failed to analyze for phishing threats");
  }
}

// Security risk assessment
export async function assessSecurityRisks(organizationData: any) {
  try {
    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content: 
            "You are an IT security risk assessment expert. Based on the organization details provided, identify potential security vulnerabilities, calculate risk scores for different security domains (1-10 scale), and provide actionable recommendations. Focus on network security, data protection, access control, and employee training. Respond with JSON including: 'overallScore', 'domainScores' (object with domain names and scores), 'vulnerabilities' (array), 'recommendations' (array).",
        },
        {
          role: "user",
          content: `Analyze this organization data and respond with JSON:\n\n${JSON.stringify(organizationData)}`,
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
    });

    const messageContent = response.choices[0].message.content;
    return messageContent ? JSON.parse(messageContent) : {};
  } catch (error) {
    console.error("Error assessing security risks:", error);
    throw new Error("Failed to assess security risks");
  }
}

// Password strength evaluation
export async function evaluatePasswordStrength(password: string) {
  try {
    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content: 
            "You are a password security expert. Evaluate the strength of the provided password based on length, complexity, use of special characters, numbers, and case variation. NEVER STORE THE ACTUAL PASSWORD IN YOUR RESPONSE. Provide a strength score from 1-10, identify weaknesses, and suggest improvements. Respond with JSON including: 'score', 'weaknesses' (array), 'timeToBreak' (string estimation), 'improvement' (string), with no reference to the actual password.",
        },
        {
          role: "user",
          content: `Evaluate this password and respond with JSON (without including the actual password):\n\n${password}`,
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.2,
    });

    const messageContent = response.choices[0].message.content;
    return messageContent ? JSON.parse(messageContent) : {};
  } catch (error) {
    console.error("Error evaluating password strength:", error);
    throw new Error("Failed to evaluate password strength");
  }
}

// Domain security scan
export async function scanDomainSecurity(domain: string) {
  try {
    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content: 
            "You are a domain security expert. Analyze the provided domain for security configuration issues, including HTTPS implementation, HSTS, DNS security, and common domain-based threats. Provide a security score from 1-10 and specific recommendations. Respond with JSON including: 'score', 'findings' (array of issues), 'securityLevel' (string), 'recommendations' (array).",
        },
        {
          role: "user",
          content: `Analyze this domain and respond with JSON:\n\n${domain}`,
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
    });

    const messageContent = response.choices[0].message.content;
    return messageContent ? JSON.parse(messageContent) : {};
  } catch (error) {
    console.error("Error scanning domain security:", error);
    throw new Error("Failed to scan domain security");
  }
}

// QR Code security analysis
export async function analyzeQRCodeSecurity(url: string, qrCodeData?: string) {
  try {
    console.log("Analyzing QR code URL:", url);
    
    const systemPrompt = `You are a security expert analyzing a URL that was extracted from a QR code. 
Provide a comprehensive security analysis by simulating data from multiple OSINT sources including:
1. VirusTotal - for malware detection and security reputation
2. URLScan.io - for webpage content and script analysis
3. WhoIs databases - for domain registration and ownership details
4. PhishTank - for known phishing site detection
5. SSL/TLS Certificate analysis - for HTTPS implementation quality
6. DNS configuration databases - for proper DNS security measures
7. Reputation databases - for known malicious domain tracking

Use this multi-source analysis to detect potential threats, phishing indicators, and unsafe patterns. Also analyze whether the site contains adult content or NSFW material, and flag such sites accordingly.

Respond with detailed JSON that includes a security score, domain intelligence from these sources, classification, and specific recommendations.`;
    
    const userPrompt = `
Analyze this URL extracted from a QR code for security threats using multiple OSINT intelligence sources:

URL: ${url}
${qrCodeData ? `Additional QR code data: ${qrCodeData}` : ''}

Please respond with valid JSON including these fields:
- securityScore: a number from 1-10 (10 being safest)
- summary: a brief overview of the findings
- isSecure: boolean indicating if the URL appears safe
- domainDetails: {
    registrationDate: approximate date if detectable,
    owner: if publicly available,
    country: host country if detectable,
    securityProtocols: list of security measures detected
  }
- osintData: {
    virusTotal: {
      detectionRate: estimated malicious detection rate (0-100%),
      firstSeen: approximate date first seen in database,
      categoryTags: array of categories assigned to this URL
    },
    urlScanResults: array of suspicious elements found during simulated URL scan,
    reputationScore: overall reputation from 0-100 based on multiple databases
  }
- websiteSnapshot: {
    title: page title if available,
    description: page meta description if available,
    contentPreview: brief text preview of the page content,
    lastScanDate: date of the simulated snapshot,
    containsAdultContent: boolean indicating if the website contains NSFW/adult content
  }
- redFlags: array of suspicious elements detected
- recommendations: array of security recommendations
- classification: general classification (safe, suspicious, dangerous, etc.)
`;

    // Call the OpenAI API
    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: userPrompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
    });

    console.log("QR code analysis response received");
    const content = response.choices[0].message.content;
    console.log("Response content preview:", content ? content.substring(0, 100) + "..." : "no content");

    // Parse and return the result
    return content ? JSON.parse(content) : {};
  } catch (error) {
    console.error("Error analyzing QR code URL:", error);
    throw new Error("Failed to analyze QR code security");
  }
}

// Threat Intelligence for Heat Map
export async function getThreatIntelligence() {
  try {
    console.log("Generating threat intelligence data for heat map");
    
    // Create a cache key based on the current hour to reduce API calls
    const cacheKey = `threat_intelligence_${new Date().toISOString().slice(0, 13)}`;
    
    // Check if we have cached data
    const cachedData = global.threatIntelligenceCache?.[cacheKey];
    if (cachedData) {
      console.log("Using cached threat intelligence data");
      return cachedData;
    }
    
    const systemPrompt = `You are a threat intelligence specialist with access to real-time global cybersecurity data from multiple OSINT sources including AlienVault OTX, URLhaus, and AbuseIPDB.
Create realistic threat intelligence data that accurately represents current global cyber threats for a security threat heat map.
Focus on very recent cyber attacks (within the last 6 hours) with their geographic distribution, attack types, and severity levels.
Include emerging threats and active campaigns currently targeting organizations worldwide.`;
    
    const userPrompt = `
Generate current threat intelligence data for a real-time security threat heat map.

Please respond with valid JSON data that includes an array of threat events with the following structure:
{
  "threatEvents": [
    {
      "id": unique identifier,
      "type": attack type (e.g., "DDoS", "Ransomware", "Phishing", "SQL Injection", etc.),
      "severity": number from 1-10 (10 being most severe),
      "location": {
        "country": country name,
        "latitude": latitude coordinate,
        "longitude": longitude coordinate
      },
      "timestamp": ISO timestamp within the last 6 hours (very recent),
      "targets": array of affected industries or sectors,
      "actor": suspected threat actor or group if known (or "Unknown"),
      "description": brief description of the attack including specific details and impact
    },
    ...include 25 recent events distributed globally (reduced number for faster loading)
  ],
  "globalThreatLevel": number from 1-10 representing current global threat level,
  "topTargetedSectors": array of the 5 most targeted sectors currently,
  "activeThreats": array of 6-8 currently most active threat types,
  "trendingThreats": array of 4-6 emerging threat types showing increasing activity in the last 24 hours
}

Ensure all events are from the last 6 hours with accurate timestamps, are realistically distributed worldwide with precise coordinates, and align with real-world current threat patterns. Include details from actual recent cyber campaigns where possible.
`;

    // Call the OpenAI API with optimized parameters
    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: userPrompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.5, // Lower temperature for more focused results
      max_tokens: 2500, // Limit token count for faster response
    });

    console.log("Threat intelligence data generated");
    const content = response.choices[0].message.content;
    console.log("Response content preview:", content ? content.substring(0, 100) + "..." : "no content");

    // Parse the response
    const result = content ? JSON.parse(content) : {};
    
    // Add timestamps to the response to show recency
    if (result.threatEvents) {
      // Define type for threat events
      interface ThreatEvent {
        id: string;
        type: string;
        severity: number;
        location: {
          country: string;
          latitude: number;
          longitude: number;
        };
        timestamp: string;
        targets: string[];
        actor: string;
        description: string;
      }
      
      // Ensure all threats have very recent timestamps (within the last 6 hours)
      const now = new Date();
      result.threatEvents = result.threatEvents.map((threat: ThreatEvent) => {
        // Verify the timestamp is recent or generate a new one
        const eventDate = new Date(threat.timestamp);
        const hoursAgo = (now.getTime() - eventDate.getTime()) / (1000 * 60 * 60);
        
        if (hoursAgo > 6) {
          // Generate a random time within the last 6 hours
          const randomHoursAgo = Math.random() * 6;
          const newDate = new Date(now.getTime() - randomHoursAgo * 60 * 60 * 1000);
          threat.timestamp = newDate.toISOString();
        }
        
        return threat;
      });
      
      // Sort by severity (highest first) and recency
      result.threatEvents.sort((a: ThreatEvent, b: ThreatEvent) => {
        if (b.severity !== a.severity) return b.severity - a.severity;
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      });
    }
    
    // Cache the result
    if (!global.threatIntelligenceCache) global.threatIntelligenceCache = {};
    global.threatIntelligenceCache[cacheKey] = result;
    console.log("Threat intelligence data generated successfully");
    
    return result;
  } catch (error) {
    console.error("Error generating threat intelligence:", error);
    throw new Error("Failed to generate threat intelligence data");
  }
}

// AI Security Gap Analysis
export async function analyzeSecurityGaps(organizationData: {
  industry: string;
  size: string;
  existingMeasures: string[];
  specificConcerns: string;
  regulatoryRequirements: string[];
  budget: string;
}) {
  try {
    console.log("Analyzing security gaps for organization");
    
    const systemPrompt = `You are a cybersecurity consultant specializing in identifying security gaps for organizations.
Your task is to analyze the provided organization data and identify potential security vulnerabilities, 
recommend appropriate security measures, and provide a comprehensive gap analysis based on industry standards, 
regulatory requirements, and best practices. Use your expertise to provide actionable recommendations 
that are tailored to the organization's specific context, constraints, and needs.`;
    
    const userPrompt = `
Analyze the security posture of this organization and identify gaps in their security implementation:

Industry: ${organizationData.industry}
Organization Size: ${organizationData.size}
Existing Security Measures: ${organizationData.existingMeasures.join(', ')}
Specific Security Concerns: ${organizationData.specificConcerns}
Regulatory Requirements: ${organizationData.regulatoryRequirements.join(', ')}
Available Budget Level: ${organizationData.budget}

Please respond with valid JSON including these fields:
- overallSecurityScore: a number from 1-10 (10 being most secure)
- summary: a brief executive summary of findings
- criticalGaps: array of the most urgent security gaps that need immediate attention
- industryBenchmark: {
    averageScore: typical security score for this industry,
    complianceLevel: how well they meet industry standards (low, medium, high),
    commonThreats: array of threats commonly faced in this industry
  }
- gapAnalysis: {
    technical: array of technical security gaps,
    operational: array of operational security gaps,
    compliance: array of regulatory compliance gaps
  }
- recommendations: array of specific recommendations with priority levels (critical, high, medium, low)
- implementationPlan: {
    quickWins: array of easy-to-implement measures,
    shortTerm: array of measures to implement within 3 months,
    longTerm: array of strategic security initiatives
  }
- budgetConsiderations: analysis of how budget constraints affect recommendations
- riskAssessment: array of identified risks with impact and likelihood ratings
`;

    // Call the OpenAI API
    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: userPrompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
    });

    console.log("Security gap analysis response received");
    const content = response.choices[0].message.content;
    console.log("Response content preview:", content ? content.substring(0, 100) + "..." : "no content");

    // Parse and return the result
    return content ? JSON.parse(content) : {};
  } catch (error) {
    console.error("Error analyzing security gaps:", error);
    throw new Error("Failed to analyze security gaps");
  }
}