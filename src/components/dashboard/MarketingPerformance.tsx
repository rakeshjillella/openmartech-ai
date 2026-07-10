import EnterpriseCard from "@/components/ui/EnterpriseCard";

const channels = [
  {
    channel: "Google Ads",
    roi: "486%",
  },
  {
    channel: "Meta Ads",
    roi: "352%",
  },
  {
    channel: "Email",
    roi: "621%",
  },
  {
    channel: "Organic",
    roi: "728%",
  },
];

export default function MarketingPerformance() {
  return (
    <section className="mt-24">

      <div className="mb-10">

        <h2 className="text-3xl font-bold">
          Marketing Performance
        </h2>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {channels.map((channel) => (

          <EnterpriseCard key={channel.channel}>

            <p className="text-slate-500">
              {channel.channel}
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-600">
              {channel.roi}
            </h2>

            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              ROI
            </p>

          </EnterpriseCard>

        ))}

      </div>

    </section>
  );
}