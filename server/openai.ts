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
    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content: 
            "You are an expert email security analyst. Analyze the provided email headers or content for security issues, SPF/DKIM validation, suspicious origins, and potential threats. Provide a security rating from 1-10 and specific recommendations.",
        },
        {
          role: "user",
          content: emailData,
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
    });

    return JSON.parse(response.choices[0].message.content || "{}");
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
          content: content,
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.2,
    });

    return JSON.parse(response.choices[0].message.content || "{}");
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
          content: JSON.stringify(organizationData),
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
    });

    return JSON.parse(response.choices[0].message.content || "{}");
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
          content: password,
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.2,
    });

    return JSON.parse(response.choices[0].message.content || "{}");
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
          content: domain,
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
    });

    return JSON.parse(response.choices[0].message.content || "{}");
  } catch (error) {
    console.error("Error scanning domain security:", error);
    throw new Error("Failed to scan domain security");
  }
}