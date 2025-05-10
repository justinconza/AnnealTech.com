import { Switch, Route } from "wouter";
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";

// Lazy load embedded tools
const EmailSecurityEmbedded = lazy(() => import("@/pages/embedded/EmailSecurity"));
const PhishingDetectionEmbedded = lazy(() => import("@/pages/embedded/PhishingDetection"));
const PasswordStrengthEmbedded = lazy(() => import("@/pages/embedded/PasswordStrength"));
const DomainSecurityEmbedded = lazy(() => import("@/pages/embedded/DomainSecurity"));
const QRCodeSecurityEmbedded = lazy(() => import("@/pages/embedded/QRCodeSecurity"));
const ThreatHeatMapEmbedded = lazy(() => import("@/pages/embedded/ThreatHeatMap"));
const SecurityGapAnalysisEmbedded = lazy(() => import("@/pages/embedded/SecurityGapAnalysis"));

// Create a minimal loading spinner for lazy-loaded components
const EmbeddedLoadingSpinner = () => (
  <div className="flex items-center justify-center h-full min-h-[300px]">
    <div className="w-6 h-6 border-3 border-accent rounded-full border-t-transparent animate-spin"></div>
  </div>
);

/**
 * Router specifically for embedded tool routes
 * These routes are designed to be iframed into other sites with minimal UI
 */
export function EmbeddedRouter() {
  return (
    <>
      <Toaster />
      <Switch>
        <Route path="/embedded/email-security">
          {() => (
            <Suspense fallback={<EmbeddedLoadingSpinner />}>
              <EmailSecurityEmbedded />
            </Suspense>
          )}
        </Route>
        
        <Route path="/embedded/phishing-detection">
          {() => (
            <Suspense fallback={<EmbeddedLoadingSpinner />}>
              <PhishingDetectionEmbedded />
            </Suspense>
          )}
        </Route>
        
        <Route path="/embedded/password-strength">
          {() => (
            <Suspense fallback={<EmbeddedLoadingSpinner />}>
              <PasswordStrengthEmbedded />
            </Suspense>
          )}
        </Route>
        
        <Route path="/embedded/domain-security">
          {() => (
            <Suspense fallback={<EmbeddedLoadingSpinner />}>
              <DomainSecurityEmbedded />
            </Suspense>
          )}
        </Route>
        
        <Route path="/embedded/qrcode-security">
          {() => (
            <Suspense fallback={<EmbeddedLoadingSpinner />}>
              <QRCodeSecurityEmbedded />
            </Suspense>
          )}
        </Route>
        
        <Route path="/embedded/threat-heatmap">
          {() => (
            <Suspense fallback={<EmbeddedLoadingSpinner />}>
              <ThreatHeatMapEmbedded />
            </Suspense>
          )}
        </Route>
        
        <Route path="/embedded/security-gap-analysis">
          {() => (
            <Suspense fallback={<EmbeddedLoadingSpinner />}>
              <SecurityGapAnalysisEmbedded />
            </Suspense>
          )}
        </Route>
        
        {/* Fallback for unknown embedded routes */}
        <Route>
          {() => (
            <div className="p-4 text-center">
              <h2 className="text-lg font-heading text-accent mb-2">Tool Not Found</h2>
              <p className="text-sm text-muted-foreground">The requested security tool could not be found.</p>
            </div>
          )}
        </Route>
      </Switch>
    </>
  );
}