import EnterpriseCard from "@/components/ui/EnterpriseCard";
import { revenueTrend } from "@/data/dashboard";

export default function RevenueTrend() {
  return (
    <section className="mt-24">

      <EnterpriseCard>

        <h2 className="text-3xl font-bold">
          Revenue Trend
        </h2>

        <p className="mt-3 text-slate-600">
          Executive monthly revenue performance.
        </p>

        <div className="mt-10 space-y-6">

          {revenueTrend.map((item) => (

            <div key={item.month}>

              <div className="mb-2 flex justify-between">

                <span className="font-semibold">
                  {item.month}
                </span>

                <span className="text-blue-600 font-bold">
                  ${item.revenue}M
                </span>

              </div>

              <div className="h-3 rounded-full bg-slate-200">

                <div
                  className="h-3 rounded-full bg-blue-600"
                  style={{
                    width: `${item.revenue * 40}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </EnterpriseCard>

    </section>
  );
}