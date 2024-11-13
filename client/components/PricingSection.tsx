import PricingCard from "./PricingCard";

export const PricingSection: React.FC = () => (
  <section id="pricing" className="bg-zinc-900 py-24">
    <div className="container mx-auto px-4">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Simple, Transparent Pricing
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <PricingCard
          name="Starter"
          price="$0"
          features={["Up to 1,000 MAU", "Basic support", "Core features"]}
        />
        <PricingCard
          name="Pro"
          price="$49"
          features={[
            "Up to 10,000 MAU",
            "Priority support",
            "Advanced features",
            "Custom domains",
          ]}
          recommended
        />
        <PricingCard
          name="Enterprise"
          price="Custom"
          features={[
            "Unlimited MAU",
            "24/7 support",
            "All features",
            "Custom integration",
          ]}
        />
      </div>
    </div>
  </section>
);
