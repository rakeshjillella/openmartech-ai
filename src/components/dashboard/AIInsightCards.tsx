import EnterpriseCard from "@/components/ui/EnterpriseCard";
import { aiInsights } from "@/data/dashboard";

export default function AIInsightCards() {
  return (
    <section className="mt-24">

      <div className="mb-10">

        <h2 className="text-3xl font-bold">
          AI Executive Insights
        </h2>

        <p className="mt-3 text-slate-600">
          AI-generated recommendations based on the OpenMarTech platform.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {aiInsights.map((item) => (

          <EnterpriseCard key={item.title}>

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                🤖
              </div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

            </div>

            <p className="mt-6 leading-8 text-slate-600">
              {item.description}
            </p>

          </EnterpriseCard>

        ))}

      </div>

    </section>
  );
}