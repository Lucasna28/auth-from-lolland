import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

const FeatureItem = ({ feature }: { feature: string }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center"
  >
    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
    <span className="text-zinc-300">{feature}</span>
  </motion.li>
);

export default function PricingCard({
  name,
  price,
  features,
  recommended,
}: PricingCardProps): JSX.Element {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const recommendedVariants = {
    hidden: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { type: 'spring', stiffness: 400, damping: 17 }
    }
  };

  const nonRecommendedVariants = {
    hidden: { scale: 1 },
    hover: { 
      scale: 1.01,
      transition: { type: 'spring', stiffness: 400, damping: 17 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      variants={recommended ? recommendedVariants : nonRecommendedVariants}
      className={`relative flex flex-col rounded-xl ${
        recommended 
          ? 'bg-gradient-to-br from-purple-900 to-purple-800 shadow-lg shadow-purple-500/20 ring-2 ring-purple-500 scale-105' 
          : 'bg-zinc-800'
      } p-6 transition-all duration-300`}
    >
      {recommended && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-4 left-1/2 -translate-x-1/2 mb-4 rounded-full bg-purple-500 px-4 py-1.5 text-center text-sm font-semibold flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            Recommended
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-transparent rounded-xl"
          />
        </>
      )}
      
      <motion.h3 
        className="mb-2 text-xl font-semibold"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        {name}
      </motion.h3>
      
      <motion.p 
        className="mb-4 text-3xl font-bold"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        {price}
      </motion.p>

      <motion.ul 
        className="mb-6 flex-grow space-y-3"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
      >
        {features.map((feature, index) => (
          <motion.li
            key={feature}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { delay: index * 0.1 }
              }
            }}
            className="flex items-center"
          >
            <CheckCircle className={`mr-2 h-4 w-4 ${recommended ? 'text-purple-400' : 'text-purple-500'}`} />
            <span className="text-zinc-300">{feature}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          className={`w-full ${
            recommended
              ? 'bg-purple-500 hover:bg-purple-400'
              : 'bg-purple-600 hover:bg-purple-700'
          } text-zinc-50 font-semibold py-6`}
        >
          {name === "Enterprise" ? "Contact Sales" : "Get Started"}
        </Button>
      </motion.div>
    </motion.div>
  );
}