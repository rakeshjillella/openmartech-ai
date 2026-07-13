import {
  Database,
  BrainCircuit,
  LayoutDashboard,
  ShieldCheck,
  Activity,
  ArrowRight,
} from "@/lib/icons";

const apis = [
  {
    icon: Database,
    title: "Architecture API",
    endpoint: "/api/architecture",
    method: "GET",
    description:
      "Retrieve enterprise architecture metadata, technology catalog and platform topology.",
  },
  {
    icon: BrainCircuit,
    title: "AI Platform API",
    endpoint: "/api/ai",
    method: "POST",
    description:
      "Interact with AI assistants, RAG pipelines, ML models and intelligent workflows.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard API",
    endpoint: "/api/dashboard",
    method: "GET",
    description:
      "Access executive KPIs, operational metrics and business intelligence datasets.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI API",
    endpoint: "/api/responsible-ai",
    method: "GET",
    description:
      "Retrieve explainability reports, fairness metrics, governance status and model health.",
  },
  {
    icon: Activity,
    title: "Monitoring API",
    endpoint: "/api/monitoring",
    method: "GET",
    description:
      "Monitor platform services, infrastructure health, AI telemetry and operational metrics.",
  },
];

export default function DocumentationAPI() {
  return (
    <section className="space-y-14">

      <div className="max-w-4xl">

        <span
          className="
            inline-flex
            rounded-full
            bg-purple-100
            px-4
            py-2
            text-sm
            font-semibold
            text-purple-700

            dark:bg-purple-900/30
            dark:text-purple-300
          "
        >
          Developer APIs
        </span>

        <h2
          className="
            mt-6
            text-4xl
            font-black
            tracking-tight
            text-slate-900
            dark:text-white
            lg:text-5xl
          "
        >
          Enterprise API Reference
        </h2>

        <p
          className="
            mt-6
            max-w-3xl
            text-lg
            leading-9
            text-slate-600
            dark:text-slate-400
          "
        >
          OpenMarTech AI exposes enterprise-ready services for
          architecture, dashboards, AI workflows, Responsible AI
          and operational monitoring.
        </p>

      </div>

      <div className="space-y-6">

        {apis.map((api) => {

          const Icon = api.icon;

          return (

            <div
              key={api.title}
              className="
                group

                rounded-[30px]

                border
                border-slate-200

                bg-white

                p-8

                shadow-lg

                transition-all
                duration-300

                hover:border-purple-500
                hover:shadow-xl

                dark:border-slate-800
                dark:bg-slate-900
              "
            >

              <div
                className="
                  flex
                  flex-col
                  gap-8

                  lg:flex-row
                  lg:items-center
                "
              >

                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center

                    rounded-3xl

                    bg-purple-100

                    text-purple-600

                    dark:bg-purple-900/30
                    dark:text-purple-300
                  "
                >
                  <Icon size={34} />
                </div>

                <div className="flex-1">

                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-4
                    "
                  >

                    <h3
                      className="
                        text-2xl
                        font-bold
                        text-slate-900
                        dark:text-white
                      "
                    >
                      {api.title}
                    </h3>

                    <span
                      className="
                        rounded-full
                        bg-green-100
                        px-4
                        py-1

                        text-xs
                        font-bold

                        text-green-700

                        dark:bg-green-900/30
                        dark:text-green-300
                      "
                    >
                      {api.method}
                    </span>

                  </div>

                  <div
                    className="
                      mt-5

                      rounded-xl

                      bg-slate-100

                      px-5
                      py-3

                      font-mono
                      text-sm

                      text-blue-700

                      dark:bg-slate-800
                      dark:text-blue-300
                    "
                  >
                    {api.endpoint}
                  </div>

                  <p
                    className="
                      mt-6

                      leading-8

                      text-slate-600

                      dark:text-slate-400
                    "
                  >
                    {api.description}
                  </p>

                </div>

                <button
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-xl

                    bg-purple-600

                    px-5
                    py-3

                    font-semibold
                    text-white

                    transition

                    hover:bg-purple-700
                  "
                >
                  API Docs

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}