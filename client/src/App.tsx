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
const Industries = lazy(() => import("./pages/Industries"));
const About = lazy(() => import("./pages/About"));
const Tools = lazy(() => import("./pages/Tools"));
const ToolEmbedding = lazy(() => import("./pages/ToolEmbedding"));
const Faq = lazy(() => import("./pages/Faq"));
const Contact = lazy(() => import("./pages/Contact"));

// Lazy load industry-specific pages
const CommercialRealEstate = lazy(() => import("./pages/industries/CommercialRealEstate"));

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
