import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps): JSX.Element {
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
      className="rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 shadow-lg"
    >
      <Icon className="mb-4 h-10 w-10 text-purple-500" />
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </motion.div>
  );
}
