import EnterpriseCard from "@/components/ui/EnterpriseCard";

const governance = [
  {
    title: "Model Registry",
    value: "Connected",
  },
  {
    title: "Experiment Tracking",
    value: "MLflow",
  },
  {
    title: "Audit Logs",
    value: "Available",
  },
  {
    title: "Data Lineage",
    value: "Tracked",
  },
  {
    title: "Monitoring",
    value: "Realtime",
  },
];

export default function GovernanceStatus() {
  return (
    <EnterpriseCard>

      <h2 className="text-3xl font-black dark:text-white">
        AI Governance
      </h2>

      <div className="mt-10 space-y-5">

        {governance.map((item) => (

          <div
            key={item.title}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              p-5
              transition
              hover:border-indigo-500
              hover:shadow-md
              dark:border-slate-700
            "
          >

            <span className="font-semibold dark:text-white">
              {item.title}
            </span>

            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              {item.value}
            </span>

          </div>

        ))}

      </div>

    </EnterpriseCard>
  );
}