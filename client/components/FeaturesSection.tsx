"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { Lock, Zap, Globe, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const FeatureCard: React.FC<{
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  index: number;
}> = ({ icon: Icon, title, description, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={variants}
      initial="hidden"
      animate={controls}
      whileHover={{ y: -8 }}
      className="group relative w-full lg:w-1/3 p-4"
    >
      <div className="h-full rounded-3xl bg-gradient-to-b from-purple-900/20 to-zinc-900/40 p-8 backdrop-blur-sm border border-purple-500/10 shadow-xl transition-all duration-300 hover:border-purple-500/30 hover:shadow-purple-500/5">
        {/* Icon */}
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-purple-500/10 p-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Icon className="h-8 w-8 text-purple-400" />
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 0.3 }}
        >
          <h3 className="mb-4 text-2xl font-bold text-white/90">{title}</h3>
          <p className="mb-8 text-base leading-relaxed text-zinc-400">
            {description}
          </p>
        </motion.div>

        {/* Learn More Button */}
        <motion.button
          whileHover={{ x: 5 }}
          className="group/button inline-flex items-center text-sm font-semibold text-purple-400 transition-colors hover:text-purple-300"
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
        </motion.button>

        {/* Background Gradient Effect */}
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Lock,
      title: "Enterprise Security",
      description:
        "Bank-grade encryption with real-time threat monitoring and instant alerts. SOC2 Type II certified infrastructure with continuous compliance monitoring.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Edge-optimized infrastructure with <100ms global latency. Advanced caching and compression for blazing-fast authentication flows.",
    },
    {
      icon: Globe,
      title: "Privacy First",
      description:
        "GDPR and CCPA compliant with automated data protection. Full data sovereignty with customizable retention policies and encryption.",
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-32"
      aria-labelledby="features-heading"
    >
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-purple-500/20 to-transparent opacity-20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-b from-purple-500/20 to-transparent opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16 lg:mb-24"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", damping: 12 }}
            className="mb-4 inline-flex rounded-full bg-purple-500/10 px-6 py-2"
          >
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-sm font-semibold text-transparent">
              Why Choose Us?
            </span>
          </motion.div>
          <h2 id="features-heading" className="text-4xl font-bold lg:text-5xl">
            Experience Modern Auth with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Lolland
            </span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
