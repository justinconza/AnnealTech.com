import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { 
  analyzeEmailSecurity, 
  detectPhishing, 
  assessSecurityRisks, 
  evaluatePasswordStrength,
  scanDomainSecurity
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
      const validatedData = emailSecuritySchema.parse(req.body);
      const analysis = await analyzeEmailSecurity(validatedData.emailData);
      res.status(200).json(analysis);
    } catch (error) {
      if (error instanceof z.ZodError) {
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

  const httpServer = createServer(app);
  return httpServer;
}
