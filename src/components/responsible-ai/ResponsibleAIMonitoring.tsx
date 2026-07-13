import {
  Activity,
  Gauge,
  Bell,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
} from "@/lib/icons";

const monitoringFeatures = [
  {
    title: "Model Drift Detection",
    icon: <TrendingUp size={30} />,
    description:
      "Continuously monitor feature drift, concept drift and prediction quality throughout the model lifecycle.",
  },
  {
    title: "Performance Monitoring",
    icon: <Gauge size={30} />,
    description:
      "Track latency, throughput, response time and model health using enterprise observability practices.",
  },
  {
    title: "Real-time Alerts",
    icon: <Bell size={30} />,
    description:
      "Automatically notify stakeholders whenever model performance or fairness thresholds are exceeded.",
  },
];

const capabilities = [
  "Prediction Drift Monitoring",
  "Feature Drift Detection",
  "Latency Monitoring",
  "Model Health Dashboard",
  "Automated Alerting",
  "Responsible AI Compliance",
];

export default function ResponsibleAIMonitoring() {
  return (

    <section className="space-y-16">

      {/* ===================================================== */}

      <div className="mx-auto max-w-4xl text-center">

        <span
          className="
            rounded-full
            bg-orange-100
            px-5
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-orange-700

            dark:bg-orange-900/30
            dark:text-orange-300
          "
        >
          AI Observability
        </span>

        <h2
          className="
            mt-6
            text-5xl
            font-black
            text-slate-900
            dark:text-white
          "
        >
          Continuous AI Monitoring
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-slate-600
            dark:text-slate-400
          "
        >
          Responsible AI extends beyond deployment. OpenMarTech AI
          continuously monitors model behaviour, detects drift and
          maintains enterprise-grade operational reliability.
        </p>

      </div>

      {/* ===================================================== */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Left */}

        <div
          className="
            rounded-[32px]
            border
            border-slate-200
            bg-white
            p-10
            shadow-xl

            dark:border-slate-800
            dark:bg-slate-900
          "
        >

          <div className="text-orange-600 dark:text-orange-400">

            <Activity size={42} />

          </div>

          <h3
            className="
              mt-6
              text-3xl
              font-black
              text-slate-900
              dark:text-white
            "
          >
            Enterprise Monitoring Platform
          </h3>

          <p
            className="
              mt-6
              leading-8
              text-slate-600
              dark:text-slate-400
            "
          >
            Every deployed model is continuously monitored for
            operational performance, fairness, drift and production
            stability to ensure trustworthy AI at scale.
          </p>

          <div className="mt-10 space-y-5">

            {capabilities.map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <CheckCircle2
                  size={22}
                  className="text-emerald-500"
                />

                <span
                  className="
                    text-lg
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Right */}

        <div className="grid gap-6">

          {monitoringFeatures.map((feature) => (

            <div
              key={feature.title}
              className="
                rounded-[28px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-orange-500
                hover:shadow-2xl

                dark:border-slate-800
                dark:bg-slate-900
              "
            >

              <div className="text-orange-600 dark:text-orange-400">

                {feature.icon}

              </div>

              <h3
                className="
                  mt-5
                  text-2xl
                  font-black
                  text-slate-900
                  dark:text-white
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                  mt-4
                  leading-8
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}