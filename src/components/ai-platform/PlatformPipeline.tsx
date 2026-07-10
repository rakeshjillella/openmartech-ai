import Container from "@/components/ui/Container";
import PlatformNode from "./PlatformNode";
import { platformFlow } from "@/data/platformFlow";

export default function PlatformPipeline() {
  return (
    <section className="py-28">

      <Container>

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold">
            Enterprise Data & AI Pipeline
          </h2>

          <p className="mt-6 text-xl text-slate-600">
            End-to-end production workflow powering OpenMarTech AI.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {platformFlow.map((node) => (
            <PlatformNode
              key={node.title}
              {...node}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}