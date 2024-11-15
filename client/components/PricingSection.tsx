import { motion, useScroll, useTransform } from "framer-motion";
import PricingCard from "./PricingCard";
import { useRef } from "react";

export const PricingSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform values for side cards
  const sideCardOpacity = useTransform(scrollYProgress, 
    [0, 0.2, 0.4], 
    [1, 1, 0]
  );
  const sideCardScale = useTransform(scrollYProgress,
    [0, 0.2, 0.4],
    [1, 0.95, 0.9]
  );
  const sideCardY = useTransform(scrollYProgress,
    [0, 0.2, 0.4],
    [0, 20, 40]
  );

  // Transform values for recommended card
  const recommendedCardOpacity = useTransform(scrollYProgress,
    [0, 0.2, 0.4, 0.6],
    [1, 1, 1, 0]
  );
  const recommendedCardScale = useTransform(scrollYProgress,
    [0, 0.2, 0.4, 0.6],
    [1, 1.05, 1.1, 0.95]
  );
  const recommendedCardY = useTransform(scrollYProgress,
    [0, 0.2, 0.4, 0.6],
    [0, -20, -40, 0]
  );

  return (
    <section 
      ref={sectionRef}
      id="pricing" 
      className="bg-gradient-to-b from-zinc-900 to-zinc-950 py-32 relative overflow-hidden min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 to-transparent"
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees, no surprises.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-3 relative">
          {/* Starter Plan */}
          <motion.div 
            style={{ 
              opacity: sideCardOpacity,
              scale: sideCardScale,
              y: sideCardY
            }}
            className="md:mt-6"
          >
            <PricingCard
              name="Starter"
              price="$0"
              features={[
                "Up to 1,000 MAU",
                "Basic support",
                "Core features",
                "Community access"
              ]}
            />
          </motion.div>
          
          {/* Pro Plan (Recommended) */}
          <motion.div
            style={{ 
              opacity: recommendedCardOpacity,
              scale: recommendedCardScale,
              y: recommendedCardY,
            }}
            className="z-10 relative"
          >
            {/* Glass effect background that follows scroll */}
            <motion.div
              style={{ opacity: useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0.1, 0.2]) }}
              className="absolute inset-0 -m-6 rounded-2xl bg-purple-500/10 backdrop-blur-sm"
            />
            <PricingCard
              name="Pro"
              price="$49"
              features={[
                "Up to 10,000 MAU",
                "Priority support",
                "Advanced features",
                "Custom domains",
                "API access"
              ]}
              recommended
            />
          </motion.div>
          
          {/* Enterprise Plan */}
          <motion.div 
            style={{ 
              opacity: sideCardOpacity,
              scale: sideCardScale,
              y: sideCardY
            }}
            className="md:mt-6"
          >
            <PricingCard
              name="Enterprise"
              price="Custom"
              features={[
                "Unlimited MAU",
                "24/7 support",
                "All features",
                "Custom integration",
                "Dedicated manager"
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}