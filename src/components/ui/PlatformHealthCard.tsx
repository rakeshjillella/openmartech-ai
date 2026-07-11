import EnterpriseCard from "./EnterpriseCard";
import StatusBadge from "./StatusBadge";

type Props = {
  service: string;
  uptime: string;
  status:
    | "Healthy"
    | "Warning"
    | "Critical"
    | "Production"
    | "Experimental";
};

export default function PlatformHealthCard({
  service,
  uptime,
  status,
}: Props) {
  return (
    <EnterpriseCard>

      <div className="flex items-center justify-between">

        <h3 className="text-xl font-bold">
          {service}
        </h3>

        <StatusBadge status={status} />

      </div>

      <p className="mt-6 text-4xl font-black text-blue-600">
        {uptime}
      </p>

      <p className="mt-3 text-slate-500">
        Service Availability
      </p>

    </EnterpriseCard>
  );
}