import { Switch, Route, useLocation } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SimplePageTransition } from "@/components/ui/simple-animations";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Lazy load pages
const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries-new"));
const About = lazy(() => import("./pages/About-redesigned"));
const Tools = lazy(() => import("./pages/Tools-updated"));
const ToolEmbedding = lazy(() => import("./pages/ToolEmbedding"));
const Faq = lazy(() => import("./pages/Faq-new"));
const Contact = lazy(() => import("./pages/Contact-new"));

// Lazy load service pages
const PCaaS = lazy(() => import("./pages/services/PCaaS"));
const EnterpriseProdTools = lazy(() => import("./pages/services/EnterpriseProdTools"));
const DataMigrations = lazy(() => import("./pages/services/DataMigrations"));
const SolutionPackages = lazy(() => import("./pages/services/SolutionPackages"));
const SecurityAwarenessTraining = lazy(() => import("./pages/services/SecurityAwarenessTraining"));

// Lazy load industry-specific pages
const CommercialRealEstate = lazy(() => import("./pages/industries/CommercialRealEstate"));
const Legal = lazy(() => import("./pages/industries/Legal"));
const ArchitectureEngineering = lazy(() => import("./pages/industries/ArchitectureEngineering"));
const AccountingFinance = lazy(() => import("./pages/industries/AccountingFinance"));
const ConstructionPropertyServices = lazy(() => import("./pages/industries/ConstructionPropertyServices"));
const MarketingDesign = lazy(() => import("./pages/industries/MarketingDesign"));
const NonProfit = lazy(() => import("./pages/industries/NonProfit"));
const Retail = lazy(() => import("./pages/industries/Retail"));
const AutoSalesService = lazy(() => import("./pages/industries/AutoSalesService"));

// Lazy load embedded tools
const EmailSecurityEmbedded = lazy(() => import("./pages/embedded/EmailSecurity"));
const PhishingDetectionEmbedded = lazy(() => import("./pages/embedded/PhishingDetection"));
const PasswordStrengthEmbedded = lazy(() => import("./pages/embedded/PasswordStrength"));
const DomainSecurityEmbedded = lazy(() => import("./pages/embedded/DomainSecurity"));

// Create a loading spinner for lazy-loaded components
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-4 border-accent rounded-full border-t-transparent animate-spin"></div>
  </div>
);

// Main site router with full layout
function MainRouter() {
  return (
    <>
      <Header />
      <main>
        <SimplePageTransition>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <Services />
                </Suspense>
              )}
            </Route>
            <Route path="/industries">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <Industries />
                </Suspense>
              )}
            </Route>
            <Route path="/industries/commercial-real-estate">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <CommercialRealEstate />
                </Suspense>
              )}
            </Route>
            <Route path="/industries/legal">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <Legal />
                </Suspense>
              )}
            </Route>
            <Route path="/industries/architecture-engineering">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <ArchitectureEngineering />
                </Suspense>
              )}
            </Route>
            <Route path="/industries/accounting-finance">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <AccountingFinance />
                </Suspense>
              )}
            </Route>
            <Route path="/industries/construction-property-services">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <ConstructionPropertyServices />
                </Suspense>
              )}
            </Route>
            <Route path="/industries/marketing-design">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <MarketingDesign />
                </Suspense>
              )}
            </Route>
            <Route path="/industries/non-profit">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <NonProfit />
                </Suspense>
              )}
            </Route>
            <Route path="/industries/retail">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <Retail />
                </Suspense>
              )}
            </Route>
            <Route path="/industries/auto-sales-service">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <AutoSalesService />
                </Suspense>
              )}
            </Route>
            <Route path="/about">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <About />
                </Suspense>
              )}
            </Route>
            <Route path="/tools">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <Tools />
                </Suspense>
              )}
            </Route>
            <Route path="/tools/embed">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <ToolEmbedding />
                </Suspense>
              )}
            </Route>
            <Route path="/faq">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <Faq />
                </Suspense>
              )}
            </Route>
            <Route path="/contact">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <Contact />
                </Suspense>
              )}
            </Route>
            <Route path="/services/pcaas">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <PCaaS />
                </Suspense>
              )}
            </Route>
            <Route path="/services/enterprise-productivity-tools">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <EnterpriseProdTools />
                </Suspense>
              )}
            </Route>
            <Route path="/services/data-migrations">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <DataMigrations />
                </Suspense>
              )}
            </Route>
            <Route path="/services/solution-packages">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <SolutionPackages />
                </Suspense>
              )}
            </Route>
            <Route path="/services/security-awareness-training">
              {() => (
                <Suspense fallback={<LoadingSpinner />}>
                  <SecurityAwarenessTraining />
                </Suspense>
              )}
            </Route>
            <Route component={NotFound} />
          </Switch>
        </SimplePageTransition>
      </main>
      <Footer />
    </>
  );
}

// Lazy load the embedded router
const EmbeddedRouter = lazy(() => import("@/components/embedded/EmbeddedRouter").then(mod => ({ default: mod.EmbeddedRouter })));

// Conditional router that chooses between main and embedded experiences
function Router() {
  const [location] = useLocation();
  const isEmbedded = location.startsWith('/embedded');
  
  if (isEmbedded) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <EmbeddedRouter />
      </Suspense>
    );
  }
  
  return <MainRouter />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
