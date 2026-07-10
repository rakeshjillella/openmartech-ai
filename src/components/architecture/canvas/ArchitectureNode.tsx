import { ArchitectureNode as Node } from "@/data/architecture";

type Props = {

  node: Node;

  active: boolean;

  onClick: () => void;

};

export default function ArchitectureNode({

  node,

  active,

  onClick,

}: Props) {

  return (

    <button

      onClick={onClick}

      className={`

        group

        w-full

        rounded-3xl

        border

        p-6

        text-left

        transition-all

        duration-300

        ${
          active
            ? "border-blue-600 bg-blue-50 shadow-xl"
            : "border-slate-200 bg-white hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
        }

      `}

    >

      <div className="text-4xl">

        {node.icon}

      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">

        {node.title}

      </h3>

      <p className="mt-2 text-sm text-slate-500">

        {node.subtitle}

      </p>

      <div className="mt-5">

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">

          {node.category}

        </span>

      </div>

    </button>

  );

}