import { useMemo, useState } from "react";
import { Technology } from "@/types/technology";

export function useTechnologySearch(
  technologies: Technology[]
) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {

    return technologies.filter((technology)=>

      technology.name
      .toLowerCase()
      .includes(query.toLowerCase())

    );

  },[query, technologies]);

  return {
    query,
    setQuery,
    filtered,
  };
}