import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import jsQR from 'jsqr';
import { createCanvas, loadImage } from 'canvas';
import { 
  analyzeEmailSecurity, 
  detectPhishing, 
  assessSecurityRisks, 
  evaluatePasswordStrength,
  scanDomainSecurity,
  analyzeQRCodeSecurity,
  analyzeSecurityGaps,
  getThreatIntelligence,
  checkEmailBreaches
} from "./openai";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  service: z.string().min(1),
  message: z.string().min(10)
});

// Email security validation schema
const emailSecuritySchema = z.object({
  emailData: z.string().min(10)
});

// Phishing detection validation schema
const phishingSchema = z.object({
  content: z.string().min(10)
});

// Password strength validation schema
const passwordSchema = z.object({
  password: z.string().min(1)
});

// Domain security validation schema
const domainSchema = z.object({
  domain: z.string().min(3)
});

// QR code security validation schema
const qrCodeSchema = z.object({
  url: z.string().url({ message: "Must provide a valid URL" }),
  qrCodeData: z.string().optional()
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = contactSchema.parse(req.body);
      
      // In a real app, we would store this data or send an email
      // For now, we'll just return a success response
      
      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Server error processing your request" 
        });
      }
    }
  });

  // Email Security Analysis
  app.post("/api/tools/email-security", async (req: Request, res: Response) => {
    try {
      console.log("Email security request body:", JSON.stringify(req.body).substring(0, 200) + "...");
      const validatedData = emailSecuritySchema.parse(req.body);
      console.log("Validated email data length:", validatedData.emailData.length);
      const analysis = await analyzeEmailSecurity(validatedData.emailData);
      console.log("Email analysis result:", JSON.stringify(analysis).substring(0, 200) + "...");
      res.status(200).json(analysis);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Email validation error:", error.errors);
        res.status(400).json({ 
          success: false, 
          message: "Invalid email data", 
          errors: error.errors 
        });
      } else {
        console.error("Error analyzing email security:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to analyze email security"
        });
      }
    }
  });

  // Phishing Detection
  app.post("/api/tools/phishing-detection", async (req: Request, res: Response) => {
    try {
      const validatedData = phishingSchema.parse(req.body);
      const analysis = await detectPhishing(validatedData.content);
      res.status(200).json(analysis);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid content", 
          errors: error.errors 
        });
      } else {
        console.error("Error detecting phishing:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to analyze for phishing threats"
        });
      }
    }
  });

  // Security Risk Assessment
  app.post("/api/tools/security-assessment", async (req: Request, res: Response) => {
    try {
      // For this one, we'll validate directly in the AI function since the schema is complex
      const assessment = await assessSecurityRisks(req.body);
      res.status(200).json(assessment);
    } catch (error) {
      console.error("Error assessing security risks:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to assess security risks"
      });
    }
  });

  // Password Strength Evaluation
  app.post("/api/tools/password-strength", async (req: Request, res: Response) => {
    try {
      const validatedData = passwordSchema.parse(req.body);
      const evaluation = await evaluatePasswordStrength(validatedData.password);
      res.status(200).json(evaluation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid password", 
          errors: error.errors 
        });
      } else {
        console.error("Error evaluating password strength:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to evaluate password strength"
        });
      }
    }
  });

  // Domain Security Scan
  app.post("/api/tools/domain-security", async (req: Request, res: Response) => {
    try {
      const validatedData = domainSchema.parse(req.body);
      const scan = await scanDomainSecurity(validatedData.domain);
      res.status(200).json(scan);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid domain", 
          errors: error.errors 
        });
      } else {
        console.error("Error scanning domain security:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to scan domain security"
        });
      }
    }
  });

  // QR Code Security Analysis
  app.post("/api/tools/qrcode-security", async (req: Request, res: Response) => {
    try {
      console.log("QR code security request body:", JSON.stringify(req.body).substring(0, 200));
      const validatedData = qrCodeSchema.parse(req.body);
      
      // Call the OpenAI function to analyze the QR code URL
      const analysis = await analyzeQRCodeSecurity(validatedData.url, validatedData.qrCodeData);
      console.log("QR code analysis result:", JSON.stringify(analysis).substring(0, 200) + "...");
      
      res.status(200).json(analysis);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("QR code validation error:", error.errors);
        res.status(400).json({
          success: false,
          message: "Invalid QR code data",
          errors: error.errors
        });
      } else {
        console.error("Error analyzing QR code security:", error);
        res.status(500).json({
          success: false,
          message: "Failed to analyze QR code security"
        });
      }
    }
  });

  // Security Threat Heat Map API
  app.get("/api/tools/threat-intelligence", async (_req: Request, res: Response) => {
    try {
      console.log("Generating threat intelligence data for heat map");
      
      const threatData = await getThreatIntelligence();
      
      console.log("Threat intelligence data generated successfully");
      
      res.status(200).json(threatData);
    } catch (error) {
      console.error("Error generating threat intelligence data:", error);
      res.status(500).json({
        success: false,
        message: "Failed to generate threat intelligence data"
      });
    }
  });

  // AI Security Gap Analysis API
  const securityGapSchema = z.object({
    industry: z.string().min(1),
    size: z.string().min(1),
    existingMeasures: z.array(z.string()),
    specificConcerns: z.string(),
    regulatoryRequirements: z.array(z.string()),
    budget: z.string().min(1)
  });

  app.post("/api/tools/security-gap-analysis", async (req: Request, res: Response) => {
    try {
      console.log("Analyzing security gaps with data:", JSON.stringify(req.body).substring(0, 200) + "...");
      
      const validatedData = securityGapSchema.parse(req.body);
      const analysis = await analyzeSecurityGaps(validatedData);
      
      console.log("Security gap analysis completed");
      
      res.status(200).json(analysis);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Security gap analysis validation error:", error.errors);
        res.status(400).json({
          success: false,
          message: "Invalid security gap analysis data",
          errors: error.errors
        });
      } else {
        console.error("Error analyzing security gaps:", error);
        res.status(500).json({
          success: false,
          message: "Failed to analyze security gaps"
        });
      }
    }
  });

  // Email Breach Check API
  const emailBreachSchema = z.object({
    emailOrDomain: z.string().min(1),
    isDomain: z.boolean().default(false)
  });

  app.post("/api/tools/email-breach-check", async (req: Request, res: Response) => {
    try {
      console.log("Checking email/domain for breaches:", JSON.stringify({
        emailOrDomain: req.body.emailOrDomain.substring(0, 10) + "...",
        isDomain: req.body.isDomain
      }));
      
      const validatedData = emailBreachSchema.parse(req.body);
      const result = await checkEmailBreaches(
        validatedData.emailOrDomain,
        validatedData.isDomain
      );
      
      console.log("Email breach check completed");
      
      res.status(200).json(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Email breach check validation error:", error.errors);
        res.status(400).json({
          success: false,
          message: "Invalid email breach check data",
          errors: error.errors
        });
      } else {
        console.error("Error checking email breaches:", error);
        res.status(500).json({
          success: false,
          message: "Failed to check email breaches"
        });
      }
    }
  });
  
  // QR code scanning endpoint
  app.post("/api/tools/scan-qrcode", async (req: Request, res: Response) => {
    try {
      const { imageData } = req.body;
      
      if (!imageData) {
        return res.status(400).json({ error: "Image data is required" });
      }
      
      // Use the imported jsQR and canvas modules
      
      // Process the image data
      const base64Data = imageData.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');
      
      try {
        // Load the image using await
        const image = await loadImage(buffer);
        
        // Create canvas and get image data
        const canvas = createCanvas(image.width, image.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
        
        // Get image data for QR code scanning
        const imageData = ctx.getImageData(0, 0, image.width, image.height);
        
        // Scan for QR code
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert'
        });
        
        if (code) {
          // QR code found
          return res.json({ 
            success: true, 
            result: code.data
          });
        } else {
          // No QR code found
          return res.json({ 
            success: false,
            error: "No QR code found in the image"
          });
        }
      } catch (imgError) {
        console.error("Image processing error:", imgError);
        return res.status(400).json({ 
          success: false,
          error: "Invalid image data or unable to process image"
        });
      }
      
    } catch (error) {
      console.error("QR code scanning failed:", error);
      res.status(500).json({ 
        success: false,
        error: "Failed to scan QR code"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
