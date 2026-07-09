import Container from "@/components/ui/Container";
import FeatureCard from "./FeatureCard";
import { features } from "@/data/features";

export default function FeatureGrid() {
  return (
    <section className="bg-white py-24">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Platform Features
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Enterprise AI Capabilities
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            OpenMarTech AI combines enterprise data engineering,
            AI platform engineering and decision intelligence
            into one unified platform.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}