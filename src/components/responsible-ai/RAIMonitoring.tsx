const monitoring = [
  {
    title: "Bias Score",
    value: "0.03",
    status: "Excellent",
  },
  {
    title: "Drift Score",
    value: "1.2%",
    status: "Stable",
  },
  {
    title: "Explainability",
    value: "SHAP",
    status: "Enabled",
  },
  {
    title: "Governance",
    value: "100%",
    status: "Compliant",
  },
];

export default function RAIMonitoring() {
  return (
    <section>

      <h2 className="mb-10 text-4xl font-black">

        Live Monitoring

      </h2>

      <div className="grid gap-6 lg:grid-cols-4">

        {monitoring.map((item) => (

          <div
            key={item.title}
            className="rounded-3xl border bg-white p-8 shadow-sm"
          >

            <p className="text-slate-500">

              {item.title}

            </p>

            <h2 className="mt-3 text-4xl font-black">

              {item.value}

            </h2>

            <p className="mt-4 text-green-600">

              {item.status}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}