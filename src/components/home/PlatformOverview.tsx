import Container from "@/components/ui/Container";
import { platformCapabilities } from "@/data/site";

export default function PlatformOverview() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-slate-50 py-32 dark:bg-slate-950"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb12,transparent_40%),radial-gradient(circle_at_bottom_right,#06b6d412,transparent_40%)]" />

      <Container>

        <div className="relative z-10">

          {/* Header */}

          <div className="mx-auto mb-20 max-w-4xl text-center">

            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-blue-200
                bg-blue-50
                px-5
                py-2
                text-sm
                font-semibold
                text-blue-700
                dark:border-blue-800
                dark:bg-blue-900/30
                dark:text-blue-300
              "
            >
              Enterprise AI Platform
            </span>

            <h2
              className="
                mt-8
                text-5xl
                font-black
                tracking-tight
                text-slate-900
                dark:text-white
                md:text-6xl
              "
            >
              Everything Required To Build
              <br />
              Modern Enterprise AI
            </h2>

            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-xl
                leading-9
                text-slate-600
                dark:text-slate-400
              "
            >
              OpenMarTech AI combines Data Engineering,
              Enterprise Architecture,
              Responsible AI,
              Explainable AI,
              MLOps,
              Generative AI,
              Observability,
              and Business Intelligence into a production-inspired platform.
            </p>

          </div>

          {/* Cards */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {platformCapabilities.map((item) => (

              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500
                  hover:shadow-2xl
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >

                {/* Glow */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-32
                    w-32
                    rounded-full
                    bg-blue-500/10
                    blur-3xl
                    transition
                    group-hover:bg-blue-500/20
                  "
                />

                {/* Icon */}

                <div
                  className="
                    relative
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
                    text-blue-600
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

                {/* Title */}

                <h3
                  className="
                    relative
                    text-2xl
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    relative
                    mt-5
                    leading-8
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  {item.description}
                </p>

                {/* Bottom Accent */}

                <div
                  className="
                    mt-8
                    h-1
                    w-16
                    rounded-full
                    bg-blue-500
                    transition-all
                    duration-300
                    group-hover:w-28
                  "
                />

              </div>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}