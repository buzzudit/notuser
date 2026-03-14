import { FeatureCard } from "@/components/site/FeatureCard";

export type FeatureItem = {
  title: string;
  description: string;
};

type FeatureGridProps = {
  features: FeatureItem[];
};

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
