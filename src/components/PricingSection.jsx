import PricingCard from "./PricingCard";

const PricingSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
      <PricingCard
        planName="Starter"
        price="$10"
        buttonText="Get Started"
        features={["1 Project", "Basic Support", "Community Access"]}
      />

      <PricingCard
        planName="Pro"
        price="$20"
        buttonText="Get Started"
        highlight={true}
        features={["Unlimited Projects", "Analytics", "Team Collaboration"]}
      >
        <p className="text-sm text-gray-500 mb-4">Perfect for growing teams</p>
      </PricingCard>

      <PricingCard
        planName="Enterprise"
        price="$99"
        buttonText="Contact Sales"
        features={[
          "Unlimited Projects",
          "Priority Support",
          "Advanced Security",
        ]}
      >
        <p className="text-sm text-gray-500 mb-4">Priority Support Included</p>
      </PricingCard>
    </section>
  );
};

export default PricingSection;
