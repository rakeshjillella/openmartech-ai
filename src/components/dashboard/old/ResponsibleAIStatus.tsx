import EnterpriseCard from "@/components/ui/EnterpriseCard";

const checks = [
  {
    title: "Bias Detection",
    value: "Passed",
  },
  {
    title: "Explainability",
    value: "100%",
  },
  {
    title: "Fairness",
    value: "Compliant",
  },
  {
    title: "Transparency",
    value: "Verified",
  },
  {
    title: "Governance",
    value: "Enabled",
  },
];

export default function ResponsibleAIStatus() {
  return (
    <EnterpriseCard>

      <h2 className="text-3xl font-black dark:text-white">
        Responsible AI Status
      </h2>

      <div className="mt-10 space-y-5">

        {checks.map((item) => (

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
              dark:border-slate-700
            "
          >

            <span className="font-semibold dark:text-white">
              {item.title}
            </span>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300">
              {item.value}
            </span>

          </div>

        ))}

      </div>

    </EnterpriseCard>
  );
}