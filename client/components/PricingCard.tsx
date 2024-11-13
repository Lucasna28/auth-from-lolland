"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export default function PricingCard({
  name,
  price,
  features,
  recommended,
}: PricingCardProps): JSX.Element {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={`flex flex-col rounded-xl ${
        recommended ? "bg-purple-900" : "bg-zinc-800"
      } p-6 shadow-lg`}
    >
      {recommended && (
        <div className="mb-4 rounded-full bg-purple-500 px-3 py-1 text-center text-sm font-semibold">
          Recommended
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold">{name}</h3>
      <p className="mb-4 text-3xl font-bold">{price}</p>
      <ul className="mb-6 flex-grow space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
            <span className="text-zinc-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${
          recommended
            ? "bg-purple-500 hover:bg-purple-600"
            : "bg-purple-600 hover:bg-purple-700"
        } text-zinc-50`}
      >
        {name === "Enterprise" ? "Contact Sales" : "Get Started"}
      </Button>
    </motion.div>
  );
}
