import { useState } from "react";
import { Helmet } from "react-helmet";
import { 
  Shield, 
  Mail, 
  Server, 
  Scan, 
  AlertTriangle, 
  Search, 
  Clock, 
  Key, 
  BarChart4,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Tool Card Component
interface ToolCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText?: string;
  premium?: boolean;
  comingSoon?: boolean;
  onOpenTool: () => void;
}

const ToolCard = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText = "Launch Tool",
  premium = false,
  comingSoon = false,
  onOpenTool 
}: ToolCardProps) => {
  return (
    <Card className="bg-steel/10 border border-accent/10 hover:border-accent/30 transition-all duration-300 h-full glow-card group">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 text-accent p-3 bg-slate rounded-lg inline-block">
          <Icon className="h-6 w-6" />
        </div>
        
        {premium && (
          <div className="mb-3 inline-flex items-center bg-accent/10 px-2 py-1 rounded text-xs font-medium text-accent">
            PREMIUM TOOL
          </div>
        )}
        
        {comingSoon && (
          <div className="mb-3 inline-flex items-center bg-secondary/10 px-2 py-1 rounded text-xs font-medium text-secondary">
            COMING SOON
          </div>
        )}
        
        <h3 className="text-xl font-heading font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-6 flex-grow">
          {description}
        </p>
        
        <Button 
          onClick={onOpenTool}
          className={`mt-auto w-full flex items-center justify-center gap-2 ${
            comingSoon 
              ? 'bg-steel/20 hover:bg-steel/30 text-muted-foreground cursor-not-allowed' 
              : premium 
                ? 'bg-steel/20 border border-accent text-accent hover:bg-accent/10' 
                : 'bg-accent hover:bg-accent/80 text-white'
          }`}
          disabled={comingSoon}
        >
          <span>{comingSoon ? "Coming Soon" : buttonText}</span>
          {!comingSoon && <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
        </Button>
      </CardContent>
    </Card>
  );
};

// Tool components

// DMARC Lookup Tool
const DmarcLookupTool = () => {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const handleLookup = () => {
    if (!domain) {
      setError("Please enter a domain name");
      return;
    }
    
    setLoading(true);
    setError("");
    
    // Simulate API call
    setTimeout(() => {
      if (domain.includes("example") || domain.includes("test")) {
        setResults({
          spf: {
            record: "v=spf1 include:_spf.google.com include:sendgrid.net ~all",
            valid: true
          },
          dkim: {
            valid: true,
            selectors: ["google", "sendgrid"]
          },
          dmarc: {
            record: "v=DMARC1; p=reject; rua=mailto:dmarc@example.com; pct=100",
            policy: "reject",
            valid: true
          }
        });
      } else {
        setResults({
          spf: {
            record: "v=spf1 include:mailserver.com ~all",
            valid: true
          },
          dkim: {
            valid: false,
            selectors: []
          },
          dmarc: {
            record: "",
            policy: "none",
            valid: false
          }
        });
      }
      
      setLoading(false);
    }, 1500);
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-steel/10 p-6 rounded-lg border border-accent/10">
        <h3 className="text-xl font-heading font-semibold mb-4">DMARC Lookup Tool</h3>
        <p className="text-muted-foreground mb-6">
          Check your domain's email authentication records (SPF, DKIM, DMARC) to ensure proper email security configuration.
        </p>
        
        <div className="flex gap-3">
          <Input 
            type="text" 
            placeholder="Enter domain (e.g., example.com)" 
            className="bg-slate border-accent/20"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <Button 
            className="bg-accent hover:bg-accent/80 text-white"
            onClick={handleLookup}
            disabled={loading}
          >
            {loading ? "Checking..." : "Check Domain"}
          </Button>
        </div>
        
        {error && (
          <div className="mt-4 text-destructive text-sm">
            {error}
          </div>
        )}
        
        {results && (
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg border ${results.spf.valid ? 'border-green-500/30 bg-green-500/10' : 'border-destructive/30 bg-destructive/10'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1 rounded-full ${results.spf.valid ? 'bg-green-500/20 text-green-500' : 'bg-destructive/20 text-destructive'}`}>
                    {results.spf.valid ? <CheckCircle2 className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                  </div>
                  <h4 className="font-heading font-medium">SPF</h4>
                </div>
                <div className={`text-xs font-mono p-2 rounded bg-slate overflow-x-auto ${results.spf.valid ? 'text-green-500/70' : 'text-destructive/70'}`}>
                  {results.spf.record || "No record found"}
                </div>
              </div>
              
              <div className={`p-4 rounded-lg border ${results.dkim.valid ? 'border-green-500/30 bg-green-500/10' : 'border-destructive/30 bg-destructive/10'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1 rounded-full ${results.dkim.valid ? 'bg-green-500/20 text-green-500' : 'bg-destructive/20 text-destructive'}`}>
                    {results.dkim.valid ? <CheckCircle2 className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                  </div>
                  <h4 className="font-heading font-medium">DKIM</h4>
                </div>
                <div className="text-xs p-2 rounded bg-slate">
                  {results.dkim.valid 
                    ? <span className="text-green-500/70">Valid DKIM found for selectors: {results.dkim.selectors.join(', ')}</span>
                    : <span className="text-destructive/70">No valid DKIM records found</span>
                  }
                </div>
              </div>
              
              <div className={`p-4 rounded-lg border ${results.dmarc.valid ? 'border-green-500/30 bg-green-500/10' : 'border-destructive/30 bg-destructive/10'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1 rounded-full ${results.dmarc.valid ? 'bg-green-500/20 text-green-500' : 'bg-destructive/20 text-destructive'}`}>
                    {results.dmarc.valid ? <CheckCircle2 className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                  </div>
                  <h4 className="font-heading font-medium">DMARC</h4>
                </div>
                <div className={`text-xs font-mono p-2 rounded bg-slate overflow-x-auto ${results.dmarc.valid ? 'text-green-500/70' : 'text-destructive/70'}`}>
                  {results.dmarc.record || "No record found"}
                </div>
              </div>
            </div>
            
            <div className="bg-steel/20 p-4 rounded-lg">
              <h4 className="font-heading font-medium mb-2">Recommendations</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {!results.spf.valid && (
                  <li>Add an SPF record to specify authorized mail servers</li>
                )}
                {!results.dkim.valid && (
                  <li>Configure DKIM to cryptographically sign your emails</li>
                )}
                {!results.dmarc.valid && (
                  <li>Implement a DMARC policy to protect against email spoofing</li>
                )}
                {results.dmarc.policy === "none" && (
                  <li>Your DMARC policy is set to 'none'. Consider using 'quarantine' or 'reject' for better protection</li>
                )}
                {results.spf.valid && results.dkim.valid && results.dmarc.valid && results.dmarc.policy === "reject" && (
                  <li>Your email authentication is properly configured!</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-accent/5 p-6 rounded-lg border border-accent/10">
        <h3 className="font-heading font-medium mb-2">Why Email Authentication Matters</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Proper email authentication helps prevent email spoofing, phishing attacks, and improves email deliverability.
          By configuring SPF, DKIM, and DMARC correctly, you protect your domain reputation and ensure your emails reach their destination.
        </p>
        <div className="flex gap-3">
          <Button variant="outline" className="border-accent/20 text-accent hover:bg-accent/10">
            Learn More
          </Button>
          <Button className="bg-accent hover:bg-accent/80 text-white">
            Get Expert Help
          </Button>
        </div>
      </div>
    </div>
  );
};

// Password Strength Tool
const PasswordStrengthTool = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState<string[]>([]);
  
  const checkPasswordStrength = (pass: string) => {
    // Simple password strength logic (in a real app, use a library like zxcvbn)
    let score = 0;
    const feedback = [];
    
    if (pass.length > 12) score += 25;
    else if (pass.length > 8) score += 15;
    else if (pass.length > 0) score += 5;
    
    if (pass.length > 0 && pass.length < 8) {
      feedback.push("Password is too short. Use at least 12 characters.");
    }
    
    if (/[A-Z]/.test(pass)) score += 20;
    else if (pass.length > 0) feedback.push("Add uppercase letters (A-Z)");
    
    if (/[a-z]/.test(pass)) score += 15;
    else if (pass.length > 0) feedback.push("Add lowercase letters (a-z)");
    
    if (/[0-9]/.test(pass)) score += 20;
    else if (pass.length > 0) feedback.push("Add numbers (0-9)");
    
    if (/[^A-Za-z0-9]/.test(pass)) score += 20;
    else if (pass.length > 0) feedback.push("Add special characters (!@#$%^&*)");
    
    if (/(.)\1\1/.test(pass)) {
      score -= 10;
      feedback.push("Avoid repeated characters (aaa, 111)");
    }
    
    if (/12345|qwerty|password/i.test(pass)) {
      score -= 20;
      feedback.push("Avoid common patterns (12345, qwerty, password)");
    }
    
    // Cap the score at 100
    score = Math.max(0, Math.min(100, score));
    
    setStrength(score);
    setFeedback(feedback);
  };
  
  const getStrengthLabel = () => {
    if (strength === 0) return "Not rated";
    if (strength < 30) return "Very weak";
    if (strength < 50) return "Weak";
    if (strength < 70) return "Moderate";
    if (strength < 90) return "Strong";
    return "Very strong";
  };
  
  const getStrengthColor = () => {
    if (strength === 0) return "bg-muted-foreground";
    if (strength < 30) return "bg-destructive";
    if (strength < 50) return "bg-orange-500";
    if (strength < 70) return "bg-yellow-500";
    if (strength < 90) return "bg-green-500/80";
    return "bg-green-500";
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-steel/10 p-6 rounded-lg border border-accent/10">
        <h3 className="text-xl font-heading font-semibold mb-4">Password Strength Tester</h3>
        <p className="text-muted-foreground mb-6">
          Test the strength of your passwords to ensure they're secure enough for your sensitive accounts.
          Don't use this tool to test your actual passwords—use it to create new, strong passwords.
        </p>
        
        <div className="space-y-4">
          <Input 
            type="text" 
            placeholder="Enter a password to test" 
            className="bg-slate border-accent/20"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              checkPasswordStrength(e.target.value);
            }}
          />
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Strength: {getStrengthLabel()}</span>
              <span>{strength}%</span>
            </div>
            <div className="w-full h-2 bg-slate rounded-full overflow-hidden">
              <div 
                className={`h-full ${getStrengthColor()} transition-all duration-300`}
                style={{ width: `${strength}%` }}
              ></div>
            </div>
          </div>
          
          {feedback.length > 0 && (
            <div className="bg-steel/20 p-4 rounded-lg">
              <h4 className="font-heading font-medium mb-2">Recommendations:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {feedback.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {strength >= 80 && (
            <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <h4 className="font-heading font-medium text-green-500">Strong Password!</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                This password has good strength. Remember to use unique passwords for each of your accounts.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-accent/5 p-6 rounded-lg border border-accent/10">
        <h3 className="font-heading font-medium mb-2">Password Best Practices</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4">
          <li>Use at least 12-16 characters</li>
          <li>Include uppercase letters, lowercase letters, numbers, and special characters</li>
          <li>Avoid using personal information or common words</li>
          <li>Use a unique password for each account</li>
          <li>Consider using a password manager to generate and store complex passwords</li>
        </ul>
        <Button className="bg-accent hover:bg-accent/80 text-white">
          Get a Free Security Assessment
        </Button>
      </div>
    </div>
  );
};

// Security Risk Score Tool
const SecurityRiskTool = () => {
  const [score, setScore] = useState<number | null>(null);
  const [answers, setAnswers] = useState({
    mfa: false,
    patchManagement: false,
    endpointProtection: false,
    backups: false,
    phishingTraining: false,
    passwordPolicy: false,
    dataEncryption: false,
    networkSecurity: false,
  });
  
  const handleChange = (key: keyof typeof answers, value: boolean) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };
  
  const calculateScore = () => {
    const trueCount = Object.values(answers).filter(Boolean).length;
    const totalQuestions = Object.keys(answers).length;
    const percentage = (trueCount / totalQuestions) * 100;
    
    setScore(percentage);
  };
  
  const getRiskLevel = () => {
    if (score === null) return "";
    if (score < 40) return "High Risk";
    if (score < 70) return "Moderate Risk";
    return "Low Risk";
  };
  
  const getRiskColor = () => {
    if (score === null) return "";
    if (score < 40) return "text-red-500";
    if (score < 70) return "text-yellow-500";
    return "text-green-500";
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-steel/10 p-6 rounded-lg border border-accent/10">
        <h3 className="text-xl font-heading font-semibold mb-4">Security Risk Assessment</h3>
        <p className="text-muted-foreground mb-6">
          Answer a few questions about your current security practices to receive a basic risk assessment
          and recommendations for improvement.
        </p>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="p-4 border border-accent/10 rounded-lg">
              <h4 className="font-heading font-medium mb-4">Select the security measures you currently have in place:</h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="mfa"
                    checked={answers.mfa}
                    onChange={(e) => handleChange("mfa", e.target.checked)}
                    className="form-checkbox h-4 w-4 text-accent rounded border-accent/30 focus:ring-accent"
                  />
                  <label htmlFor="mfa" className="text-sm">Multi-factor authentication for all critical accounts</label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="patchManagement"
                    checked={answers.patchManagement}
                    onChange={(e) => handleChange("patchManagement", e.target.checked)}
                    className="form-checkbox h-4 w-4 text-accent rounded border-accent/30 focus:ring-accent"
                  />
                  <label htmlFor="patchManagement" className="text-sm">Regular software updates and patch management</label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="endpointProtection"
                    checked={answers.endpointProtection}
                    onChange={(e) => handleChange("endpointProtection", e.target.checked)}
                    className="form-checkbox h-4 w-4 text-accent rounded border-accent/30 focus:ring-accent"
                  />
                  <label htmlFor="endpointProtection" className="text-sm">Advanced endpoint protection (beyond basic antivirus)</label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="backups"
                    checked={answers.backups}
                    onChange={(e) => handleChange("backups", e.target.checked)}
                    className="form-checkbox h-4 w-4 text-accent rounded border-accent/30 focus:ring-accent"
                  />
                  <label htmlFor="backups" className="text-sm">Regular, tested backups with offline storage</label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="phishingTraining"
                    checked={answers.phishingTraining}
                    onChange={(e) => handleChange("phishingTraining", e.target.checked)}
                    className="form-checkbox h-4 w-4 text-accent rounded border-accent/30 focus:ring-accent"
                  />
                  <label htmlFor="phishingTraining" className="text-sm">Regular security awareness and phishing training</label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="passwordPolicy"
                    checked={answers.passwordPolicy}
                    onChange={(e) => handleChange("passwordPolicy", e.target.checked)}
                    className="form-checkbox h-4 w-4 text-accent rounded border-accent/30 focus:ring-accent"
                  />
                  <label htmlFor="passwordPolicy" className="text-sm">Strong password policy and management system</label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="dataEncryption"
                    checked={answers.dataEncryption}
                    onChange={(e) => handleChange("dataEncryption", e.target.checked)}
                    className="form-checkbox h-4 w-4 text-accent rounded border-accent/30 focus:ring-accent"
                  />
                  <label htmlFor="dataEncryption" className="text-sm">Data encryption for sensitive information</label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="networkSecurity"
                    checked={answers.networkSecurity}
                    onChange={(e) => handleChange("networkSecurity", e.target.checked)}
                    className="form-checkbox h-4 w-4 text-accent rounded border-accent/30 focus:ring-accent"
                  />
                  <label htmlFor="networkSecurity" className="text-sm">Network firewall and segmentation</label>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-accent hover:bg-accent/80 text-white w-full"
              onClick={calculateScore}
            >
              Calculate Risk Score
            </Button>
          </div>
          
          {score !== null && (
            <div className="bg-steel/20 p-4 rounded-lg">
              <h4 className="font-heading font-medium mb-4">Your Security Risk Assessment:</h4>
              
              <div className="flex items-center justify-between mb-2">
                <span>Security Score:</span>
                <span className="font-bold">{score.toFixed(0)}%</span>
              </div>
              
              <div className="w-full h-2 bg-slate rounded-full overflow-hidden mb-4">
                <div 
                  className={`h-full transition-all duration-300 ${
                    score < 40 ? 'bg-red-500' : score < 70 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${score}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span>Risk Level:</span>
                <span className={`font-bold ${getRiskColor()}`}>{getRiskLevel()}</span>
              </div>
              
              <div className="space-y-2">
                <h5 className="font-medium">Recommendations:</h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {!answers.mfa && (
                    <li>Implement multi-factor authentication for all critical accounts</li>
                  )}
                  {!answers.patchManagement && (
                    <li>Establish a regular patch management process</li>
                  )}
                  {!answers.endpointProtection && (
                    <li>Upgrade to advanced endpoint protection solutions</li>
                  )}
                  {!answers.backups && (
                    <li>Implement a 3-2-1 backup strategy with regular testing</li>
                  )}
                  {!answers.phishingTraining && (
                    <li>Conduct regular security awareness and phishing training</li>
                  )}
                  {!answers.passwordPolicy && (
                    <li>Implement a strong password policy and consider a password manager</li>
                  )}
                  {!answers.dataEncryption && (
                    <li>Encrypt sensitive data at rest and in transit</li>
                  )}
                  {!answers.networkSecurity && (
                    <li>Enhance network security with proper firewall and segmentation</li>
                  )}
                  {Object.values(answers).every(Boolean) && (
                    <li>Great job! Continue maintaining your strong security posture with regular reviews</li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-accent/5 p-6 rounded-lg border border-accent/10">
        <h3 className="font-heading font-medium mb-2">Need a Comprehensive Assessment?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          This tool provides a basic assessment. For a thorough security evaluation of your organization,
          contact our security experts for a free consultation.
        </p>
        <Button className="bg-accent hover:bg-accent/80 text-white">
          Book a Free Security Consultation
        </Button>
      </div>
    </div>
  );
};

// Email authorization modal
const EmailModal = ({ 
  isOpen, 
  onClose, 
  onSubmit 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onSubmit: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate border border-accent/20 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-heading">Access Premium Tool</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Enter your email to access our premium security tools. You'll also receive our security newsletter with tips and best practices.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <Input 
              id="email" 
              type="email" 
              placeholder="yourname@company.com" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-steel/20 border-accent/20"
            />
          </div>
          
          <div className="flex items-start space-x-2">
            <input 
              type="checkbox" 
              id="terms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="form-checkbox h-4 w-4 mt-1 text-accent rounded border-accent/30 focus:ring-accent"
            />
            <label htmlFor="terms" className="text-xs text-muted-foreground">
              I agree to receive security newsletters and updates. You can unsubscribe at any time. We will never share your information with third parties.
            </label>
          </div>
          
          <div className="flex justify-end space-x-2 pt-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="border-accent/20"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-accent hover:bg-accent/80 text-white"
              disabled={!email || !agreeToTerms}
            >
              Access Tool
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Main Tools Page component
const Tools = () => {
  const [activeTab, setActiveTab] = useState("dmarc");
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [showEmailModal, setShowEmailModal] = useState(false);

  // Tool Data
  const toolsData = [
    {
      id: "dmarc",
      icon: Mail,
      title: "DMARC Lookup Tool",
      description: "Check your domain's email authentication (SPF, DKIM, DMARC) to enhance security and deliverability.",
      premium: false
    },
    {
      id: "password",
      icon: Key,
      title: "Password Strength Tester",
      description: "Test your password strength with our advanced analyzer that checks for common patterns and vulnerabilities.",
      premium: false
    },
    {
      id: "risk",
      icon: BarChart4,
      title: "Security Risk Assessment",
      description: "Answer a few questions about your IT security practices to get a basic risk score and recommendations.",
      premium: false
    },
    {
      id: "ports",
      icon: Scan,
      title: "MX & Port Scanner",
      description: "Scan your domain for mail server configuration and open ports to identify potential vulnerabilities.",
      premium: true
    },
    {
      id: "header",
      icon: AlertTriangle,
      title: "Email Header Analyzer",
      description: "Decode email headers to trace message origins and identify potential phishing or spoofing attempts.",
      premium: true
    },
    {
      id: "breach",
      icon: Search,
      title: "Breach Check Tool",
      description: "Check if your email or domain has been compromised in known data breaches.",
      premium: true
    },
    {
      id: "uptime",
      icon: Clock,
      title: "Uptime Monitor",
      description: "Monitor your website's availability and performance with real-time alerts for downtime.",
      comingSoon: true
    },
    {
      id: "phishing",
      icon: Shield,
      title: "Phishing Simulation Preview",
      description: "View sample phishing emails customized for your industry to educate your team on threats.",
      comingSoon: true
    },
    {
      id: "culture",
      icon: Server,
      title: "Security Culture Quiz",
      description: "Assess your organization's security awareness culture with our interactive questionnaire.",
      comingSoon: true
    }
  ];

  const handleOpenTool = (toolId: string) => {
    const tool = toolsData.find(t => t.id === toolId);
    
    if (tool?.premium) {
      setSelectedTool(toolId);
      setShowEmailModal(true);
    } else {
      setActiveTab(toolId);
    }
  };

  const handleEmailSubmit = () => {
    setShowEmailModal(false);
    if (selectedTool) {
      setActiveTab(selectedTool);
    }
  };

  return (
    <>
      <Helmet>
        <title>Free IT & Security Tools | AnnealTech</title>
        <meta name="description" content="Use our free IT and security tools to check your email security, analyze IT risks, and start building a better cyber posture today." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-steel relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" stroke="currentColor" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-1 mb-6">
              <span className="text-accent font-heading text-sm font-medium tracking-wider">FREE RESOURCES</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Free IT & Security Tools
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in empowering people with better technology and education — that's why we're offering these tools 100% free. Use them to check your email security, analyze IT risks, and start building a better cyber posture today.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 md:py-24 bg-slate relative">
        <div className="container mx-auto px-4">
          {/* Tool Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {toolsData.map((tool) => (
              <ToolCard 
                key={tool.id}
                icon={tool.icon}
                title={tool.title}
                description={tool.description}
                premium={tool.premium}
                comingSoon={tool.comingSoon}
                onOpenTool={() => handleOpenTool(tool.id)}
              />
            ))}
          </div>
          
          {/* Tool Interface */}
          <div className="max-w-4xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-steel/20 p-1 mb-8 hidden">
                <TabsTrigger value="dmarc">DMARC Lookup</TabsTrigger>
                <TabsTrigger value="password">Password Strength</TabsTrigger>
                <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
                <TabsTrigger value="ports">Port Scanner</TabsTrigger>
                <TabsTrigger value="header">Header Analyzer</TabsTrigger>
                <TabsTrigger value="breach">Breach Check</TabsTrigger>
              </TabsList>
              
              <TabsContent value="dmarc">
                <DmarcLookupTool />
              </TabsContent>
              
              <TabsContent value="password">
                <PasswordStrengthTool />
              </TabsContent>
              
              <TabsContent value="risk">
                <SecurityRiskTool />
              </TabsContent>
              
              <TabsContent value="ports">
                <div className="bg-steel/10 p-6 rounded-lg border border-accent/10">
                  <h3 className="text-xl font-heading font-semibold mb-4">MX & Port Scanner</h3>
                  <p className="text-muted-foreground mb-6">
                    Scan your domain for mail server configuration and open ports to identify potential vulnerabilities.
                  </p>
                  {/* Tool content here */}
                </div>
              </TabsContent>
              
              <TabsContent value="header">
                <div className="bg-steel/10 p-6 rounded-lg border border-accent/10">
                  <h3 className="text-xl font-heading font-semibold mb-4">Email Header Analyzer</h3>
                  <p className="text-muted-foreground mb-6">
                    Decode email headers to trace message origins and identify potential phishing or spoofing attempts.
                  </p>
                  {/* Tool content here */}
                </div>
              </TabsContent>
              
              <TabsContent value="breach">
                <div className="bg-steel/10 p-6 rounded-lg border border-accent/10">
                  <h3 className="text-xl font-heading font-semibold mb-4">Breach Check Tool</h3>
                  <p className="text-muted-foreground mb-6">
                    Check if your email or domain has been compromised in known data breaches.
                  </p>
                  {/* Tool content here */}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-16 md:py-20 bg-steel/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Why We Offer Free Tools
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              At AnnealTech, we believe in democratizing access to cybersecurity resources. Our free tools are part of our commitment to strengthening the security posture of businesses everywhere, regardless of size or budget. We're on a mission to forge a more secure digital landscape for all.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-accent hover:bg-accent/80 text-white">
                Book a Security Consultation
              </Button>
              <Button variant="outline" className="border-accent/20 text-accent hover:bg-accent/10">
                Learn About Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Assurance */}
      <section className="py-12 md:py-16 bg-slate">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              Your Data Privacy
            </h3>
            
            <p className="text-muted-foreground">
              We respect your privacy. These tools are designed to analyze data without storing or sharing your information with third parties. We do not sell or trade your data, and any information you provide is used solely to deliver our services and provide relevant security insights.
            </p>
          </div>
        </div>
      </section>

      {/* Email Modal for Premium Tools */}
      <EmailModal 
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        onSubmit={handleEmailSubmit}
      />
    </>
  );
};

export default Tools;