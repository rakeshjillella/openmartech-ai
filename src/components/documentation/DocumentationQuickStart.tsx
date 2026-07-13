import {
  FaGithub,
  Database,
  Workflow,
  LayoutDashboard,
  ArrowRight,
} from "@/lib/icons";

const steps = [
  {
    icon: FaGithub,
    title: "Clone Repository",
    description:
      "Download the OpenMarTech AI project and explore the complete enterprise source code.",
    action: "Clone Project",
  },
  {
    icon: Database,
    title: "Configure Environment",
    description:
      "Install Docker, Python, Airflow, Spark, Kafka and supporting enterprise services.",
    action: "Setup Stack",
  },
  {
    icon: Workflow,
    title: "Launch Platform",
    description:
      "Start orchestration, streaming, lakehouse, AI pipelines and Responsible AI monitoring.",
    action: "Run Platform",
  },
  {
    icon: LayoutDashboard,
    title: "Explore Dashboards",
    description:
      "Access executive dashboards, AI insights, monitoring and business intelligence reports.",
    action: "Open Dashboard",
  },
];

export default function DocumentationQuickStart() {
  return (
    <section className="space-y-14">

      <div className="max-w-4xl">

        <span
          className="
            inline-flex
            rounded-full
            bg-blue-100
            px-4
            py-2
            text-sm
            font-semibold
            text-blue-700

            dark:bg-blue-900/30
            dark:text-blue-300
          "
        >
          Quick Start
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
          Get Started in Minutes
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
          Follow these four simple steps to deploy the complete
          OpenMarTech AI enterprise platform and begin exploring
          architecture, AI workflows and executive dashboards.
        </p>

      </div>

      <div
        className="
          grid
          gap-8

          md:grid-cols-2
          xl:grid-cols-4
        "
      >

        {steps.map((step, index) => {

          const Icon = step.icon;

          return (

            <div
              key={step.title}
              className="
                group

                relative

                rounded-[28px]

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

              <div
                className="
                  absolute
                  right-6
                  top-6

                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-full

                  bg-blue-600

                  text-sm
                  font-bold
                  text-white
                "
              >
                {index + 1}
              </div>

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center

                  rounded-2xl

                  bg-blue-100

                  text-blue-600

                  transition-all
                  duration-300

                  group-hover:scale-110

                  dark:bg-blue-900/30
                  dark:text-blue-300
                "
              >
                <Icon size={30} />
              </div>

              <h3
                className="
                  mt-8

                  text-2xl
                  font-bold

                  text-slate-900

                  dark:text-white
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-5

                  leading-8

                  text-slate-600

                  dark:text-slate-400
                "
              >
                {step.description}
              </p>

              <button
                className="
                  mt-8

                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  bg-blue-600

                  px-5
                  py-3

                  font-semibold
                  text-white

                  transition-all
                  duration-300

                  hover:bg-blue-700
                "
              >
                {step.action}

                <ArrowRight size={18} />
              </button>

            </div>

          );

        })}

      </div>

    </section>
  );
}