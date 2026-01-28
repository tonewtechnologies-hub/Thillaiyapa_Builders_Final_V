import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion, easeInOut } from "framer-motion";

import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/layout/Layout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Gallery from "@/pages/Gallery";
import Process from "@/pages/Process";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

/* ================= PAGE ANIMATION CONFIG ================= */

const pageVariants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -24,
  },
};

const pageTransition = {
  duration: 0.45,
  ease: easeInOut,
};

function Router() {
  const [location] = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.main
          key={location}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className="min-h-screen"
        >
          <Switch location={location}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/process" component={Process} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </motion.main>
      </AnimatePresence>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
