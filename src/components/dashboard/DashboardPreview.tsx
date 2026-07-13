import {
  TrendingUp,
  Activity,
  BrainCircuit,
  ShieldCheck,
  BarChart3,
} from "@/lib/icons";

export default function DashboardPreview() {
  return (
    <section className="space-y-14">

      {/* Heading */}

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
          Live Executive Dashboard
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
          Executive Analytics Workspace
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
          A modern executive dashboard combining operational
          analytics, enterprise KPIs, AI insights and Responsible AI
          monitoring into one intelligent workspace.
        </p>

      </div>

      {/* Dashboard */}

      <div
        className="
          overflow-hidden

          rounded-[36px]

          border
          border-slate-200

          bg-white

          shadow-2xl

          dark:border-slate-800
          dark:bg-slate-900
        "
      >

        {/* Top */}

        <div
          className="
            flex
            items-center
            justify-between

            border-b

            border-slate-200

            bg-slate-50

            px-8
            py-6

            dark:border-slate-800
            dark:bg-slate-950
          "
        >

          <div>

            <h3 className="text-2xl font-black dark:text-white">
              Executive Overview
            </h3>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              OpenMarTech AI Enterprise Dashboard
            </p>

          </div>

          <div
            className="
              rounded-full

              bg-green-100

              px-5
              py-2

              text-sm
              font-semibold

              text-green-700

              dark:bg-green-900/30
              dark:text-green-300
            "
          >
            ● Live Data
          </div>

        </div>

        <div className="p-8">

          {/* KPI Cards */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              ["Revenue", "$12.8M", "text-green-600"],
              ["Customers", "85,420", "text-blue-600"],
              ["Models", "18", "text-purple-600"],
              ["Accuracy", "97.8%", "text-cyan-600"],
            ].map(([title, value, color]) => (

              <div
                key={title}
                className="
                  rounded-3xl

                  border
                  border-slate-200

                  bg-white

                  p-6

                  shadow-sm

                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {title}
                </p>

                <h3
                  className={`mt-4 text-4xl font-black ${color}`}
                >
                  {value}
                </h3>

              </div>

            ))}

          </div>

          {/* Charts */}

          <div className="mt-8 grid gap-8 xl:grid-cols-3">

            {/* Revenue */}

            <div
              className="
                rounded-3xl

                border
                border-slate-200

                p-8

                dark:border-slate-800
              "
            >

              <div className="flex items-center gap-3">

                <TrendingUp
                  className="text-blue-600"
                  size={24}
                />

                <h3 className="font-bold dark:text-white">
                  Revenue Trend
                </h3>

              </div>

              <div className="mt-8 h-56">

                <svg
                  viewBox="0 0 500 220"
                  className="h-full w-full"
                >

                  <polyline
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="5"
                    points="
                      20,180
                      80,170
                      140,140
                      200,145
                      260,100
                      320,90
                      380,70
                      440,40
                    "
                  />

                </svg>

              </div>

            </div>

            {/* AI */}

            <div
              className="
                rounded-3xl

                border
                border-slate-200

                p-8

                dark:border-slate-800
              "
            >

              <div className="flex items-center gap-3">

                <BrainCircuit
                  className="text-purple-600"
                  size={24}
                />

                <h3 className="font-bold dark:text-white">
                  AI Insights
                </h3>

              </div>

              <ul className="mt-8 space-y-6">

                <li className="rounded-2xl bg-purple-50 p-4 dark:bg-purple-900/20">
                  Sales forecast increased by 12%
                </li>

                <li className="rounded-2xl bg-purple-50 p-4 dark:bg-purple-900/20">
                  Customer churn predicted in Region A
                </li>

                <li className="rounded-2xl bg-purple-50 p-4 dark:bg-purple-900/20">
                  Marketing ROI improving continuously
                </li>

              </ul>

            </div>

            {/* Responsible AI */}

            <div
              className="
                rounded-3xl

                border
                border-slate-200

                p-8

                dark:border-slate-800
              "
            >

              <div className="flex items-center gap-3">

                <ShieldCheck
                  className="text-green-600"
                  size={24}
                />

                <h3 className="font-bold dark:text-white">
                  Responsible AI
                </h3>

              </div>

              <div className="mt-8 space-y-5">

                {[
                  "Bias Score",
                  "Explainability",
                  "Model Drift",
                  "Compliance",
                ].map((item) => (

                  <div key={item}>

                    <div className="mb-2 flex justify-between">

                      <span>{item}</span>

                      <span>98%</span>

                    </div>

                    <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700">

                      <div className="h-3 w-[98%] rounded-full bg-green-500" />

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            <div
              className="
                rounded-3xl

                border
                border-slate-200

                p-8

                dark:border-slate-800
              "
            >

              <div className="flex items-center gap-3">

                <BarChart3
                  className="text-orange-500"
                  size={24}
                />

                <h3 className="font-bold dark:text-white">
                  Business Distribution
                </h3>

              </div>

              <div className="mt-8 flex items-end gap-4 h-52">

                {[35, 70, 120, 90, 150, 110].map((h, i) => (

                  <div
                    key={i}
                    className="flex-1 rounded-t-xl bg-blue-500"
                    style={{ height: h }}
                  />

                ))}

              </div>

            </div>

            <div
              className="
                rounded-3xl

                border
                border-slate-200

                p-8

                dark:border-slate-800
              "
            >

              <div className="flex items-center gap-3">

                <Activity
                  className="text-green-600"
                  size={24}
                />

                <h3 className="font-bold dark:text-white">
                  Live Platform Health
                </h3>

              </div>

              <div className="mt-8 space-y-5">

                {[
                  "Kafka Streaming",
                  "Spark Jobs",
                  "MLflow",
                  "Airflow",
                  "Power BI",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 dark:bg-slate-800"
                  >

                    <span>{item}</span>

                    <span className="font-semibold text-green-600">
                      Healthy
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}