"use client";
import { motion, useAnimation } from "framer-motion";
import { User, Lock, Server, Shield } from "lucide-react";
import { Fragment, useEffect, useState } from "react";

const AuthFlow = () => {
  const [step, setStep] = useState(0);
  const controls = useAnimation();

  const steps = [
    { icon: User, label: "User" },
    { icon: Lock, label: "Auth" },
    { icon: Server, label: "API" },
    { icon: Shield, label: "Secure" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({ scale: [1, 1.2, 1], transition: { duration: 0.5 } });
  }, [step, controls]);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 flex items-center justify-center space-x-8">
        {steps.map((s, index) => (
          <Fragment key={s.label}>
            {index > 0 && (
              <motion.div
                className="h-1 w-12 bg-purple-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: step >= index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
            )}
            <motion.div
              className={`flex h-16 w-16 items-center justify-center rounded-full ${
                step >= index ? "bg-purple-500" : "bg-zinc-700"
              }`}
              animate={step === index ? controls : {}}
            >
              <s.icon className="h-8 w-8 text-zinc-100" />
            </motion.div>
          </Fragment>
        ))}
      </div>
      <motion.p
        key={step}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center text-lg font-semibold text-purple-400"
      >
        {steps[step].label}
      </motion.p>
    </div>
  );
};

export default AuthFlow;
