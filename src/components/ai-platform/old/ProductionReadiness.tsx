const checklist = [
  "CI / CD Ready",
  "Dockerized Services",
  "Apache Airflow Orchestration",
  "MLflow Model Registry",
  "Responsible AI Monitoring",
  "Enterprise Security",
  "Observability",
  "Executive Dashboards",
];

export default function ProductionReadiness() {
  return (
    <section
      className="
        rounded-[36px]
        bg-gradient-to-r
        from-slate-900
        to-slate-800
        p-14
        text-white
      "
    >
      <span className="font-semibold uppercase tracking-widest text-green-400">
        Production Ready
      </span>

      <h2 className="mt-6 text-5xl font-black">
        Enterprise Deployment Checklist
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        {checklist.map((item) => (

          <div
            key={item}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-6
            "
          >
            ✅ {item}
          </div>

        ))}

      </div>

    </section>
  );
}