import Container from "@/components/ui/Container";

export default function TechnologyHero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <h1 className="text-6xl font-bold">
            Enterprise Technology Stack
          </h1>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            OpenMarTech AI combines modern Data Engineering,
            AI Platform Engineering,
            Responsible AI,
            Machine Learning,
            Generative AI,
            and Decision Intelligence
            using enterprise-grade open source technologies.
          </p>

        </div>

      </Container>

    </section>
  );
}