import Container from "@/components/ui/Container";
import { platformCapabilities } from "@/data/site";

export default function PlatformOverview() {
  return (
    <section
      id="platform"
      className="
        bg-gradient-to-b
        from-white
        to-slate-50
        py-20
        transition-colors
        duration-300
        dark:from-slate-950
        dark:to-slate-900
        lg:py-28
      "
    >
      <Container>

        <div className="mx-auto mb-20 max-w-4xl text-center">

          <span
            className="
              inline-flex
              rounded-full
              bg-blue-100
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-700
              dark:bg-blue-900/30
              dark:text-blue-300
            "
          >
            Why OpenMarTech AI
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-tight
              text-slate-900
              dark:text-white
              md:text-5xl
            "
          >
            A Modern Enterprise AI Platform
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-slate-600
              dark:text-slate-400
            "
          >
            OpenMarTech AI combines Enterprise Data Engineering,
            AI Platform Engineering, Responsible AI, Explainable AI,
            Machine Learning, Streaming Analytics, Lakehouse Architecture,
            Observability, and Generative AI into one production-inspired
            enterprise ecosystem.
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
                dark:border-slate-700
                dark:bg-slate-900
              "
            >

              <div
                className="
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-100
                  text-2xl
                  font-bold
                  text-blue-700
                  transition-all
                  duration-300
                  group-hover:bg-blue-600
                  group-hover:text-white
                  dark:bg-blue-900/30
                  dark:text-blue-300
                "
              >
                ✓
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-5
                  leading-8
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}