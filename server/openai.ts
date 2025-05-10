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