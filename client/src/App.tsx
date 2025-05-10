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
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services">
              {() => {
                const ServicesPage = lazy(() => import("./pages/Services"));
                return <ServicesPage />;
              }}
            </Route>
            <Route path="/about">
              {() => {
                const AboutPage = lazy(() => import("./pages/About"));
                return <AboutPage />;
              }}
            </Route>
            <Route path="/tools">
              {() => {
                const ToolsPage = lazy(() => import("./pages/Tools"));
                return <ToolsPage />;
              }}
            </Route>
            <Route path="/faq">
              {() => {
                const FaqPage = lazy(() => import("./pages/Faq"));
                return <FaqPage />;
              }}
            </Route>
            <Route path="/contact">
              {() => {
                const ContactPage = lazy(() => import("./pages/Contact"));
                return <ContactPage />;
              }}
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
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
