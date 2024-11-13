"use client";

import { useTransform, useScroll, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthFlow from "@/components/AuthFlow";
import FeaturesSection from "@/components/FeaturesSection";
import ReadyToGetStarted from "@/components/ReadyToGetStarted";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PricingSection } from "@/components/PricingSection";

export default function Home(): JSX.Element {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50">
      <Header />

      <main className="flex-grow">
        <section className="relative h-screen">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity, scale }}
          >
            <div className="text-center">
              <motion.h1
                className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Secure Authentication <br />
                <span className="text-purple-500">Made Simple</span>
              </motion.h1>
              <motion.p
                className="mx-auto mb-10 max-w-2xl text-xl text-zinc-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Enterprise-grade authentication and user management with just a
                few lines of code. Built for developers, trusted by thousands.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <AuthFlow />
              </motion.div>
              <motion.div
                className="mt-10 flex justify-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-purple-600 text-zinc-50 hover:bg-purple-500"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-900"
                >
                  View Documentation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <FeaturesSection />
        <PricingSection />
        <ReadyToGetStarted />
      </main>

      <Footer />
    </div>
  );
}
