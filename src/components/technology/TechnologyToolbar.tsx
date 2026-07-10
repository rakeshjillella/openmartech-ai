type Props = {
  query: string;
  setQuery: (value: string) => void;
};

export default function TechnologyToolbar({
  query,
  setQuery,
}: Props) {
  return (
    <div className="mb-10">
      <input
        type="text"
        placeholder="Search technologies..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
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
          focus:ring-4
          focus:ring-blue-100
        "
      />
    </div>
  );
}