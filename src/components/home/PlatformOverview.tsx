import Container from "@/components/ui/Container";
import { platformCapabilities } from "@/data/site";

export default function PlatformOverview() {
  return (
    <section
      id="platform"
      className="bg-gradient-to-b from-slate-50 to-white py-28"
    >
      <Container>
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Why OpenMarTech AI
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            A Modern Enterprise AI Platform
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            OpenMarTech AI is more than a marketing analytics platform.
            It combines Enterprise Data Engineering, AI Platform
            Engineering, Responsible AI, Explainable AI, and Generative AI
            into one production-inspired ecosystem for executive decision
            intelligence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {platformCapabilities.map((item) => (
            <div
              key={item.title}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500
                hover:shadow-2xl
              "
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl transition group-hover:bg-blue-600 group-hover:text-white">
                ✓
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}