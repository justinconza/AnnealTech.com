import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Lazy load pages
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Tools = lazy(() => import("./pages/Tools"));
const Faq = lazy(() => import("./pages/Faq"));
const Contact = lazy(() => import("./pages/Contact"));

// Create a loading spinner for lazy-loaded components
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-4 border-accent rounded-full border-t-transparent animate-spin"></div>
  </div>
);

function Router() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services">
            {() => (
              <Suspense fallback={<LoadingSpinner />}>
                <Services />
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
      </main>
      <Footer />
    </>
  );
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
