type Props = {
  query: string;
  setQuery: (value: string) => void;

  activeLayer: string;

  setActiveLayer: (layer: string) => void;
};

const filters = [
  "All",
  "Data Sources",
  "Ingestion",
  "Processing",
  "Storage",
  "AI Platform",
  "Consumption",
];

export default function ArchitectureToolbar({

  query,

  setQuery,

  activeLayer,

  setActiveLayer,

}: Props) {

  return (

    <div className="mb-12 space-y-8">

      <input

        type="text"

        placeholder="Search technologies..."

        value={query}

        onChange={(e) => setQuery(e.target.value)}

        className="
          w-full
          rounded-2xl
          border
          border-slate-300
          px-5
          py-4
          text-lg
          shadow-sm
          focus:border-blue-600
          focus:outline-none
        "

      />

      <div className="flex flex-wrap gap-3">

        {filters.map((filter) => (

          <button

            key={filter}

            onClick={() => setActiveLayer(filter)}

            className={`
              rounded-full
              px-5
              py-2
              text-sm
              font-semibold
              transition

              ${
                activeLayer === filter

                  ? "bg-blue-600 text-white"

                  : "bg-slate-100 text-slate-700 hover:bg-blue-100"

              }
            `}

          >

            {filter}

          </button>

        ))}

      </div>

    </div>

  );

}