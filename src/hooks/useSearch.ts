"use client";

import { useMemo, useState } from "react";

export default function useSearch<T>(
  items: T[],
  fields: (keyof T)[]
) {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;

    const q = query.toLowerCase();

    return items.filter((item) =>
      fields.some((field) => {
        const value = item[field];

        if (Array.isArray(value)) {
          return value.some((v) =>
            String(v).toLowerCase().includes(q)
          );
        }

        return String(value)
          .toLowerCase()
          .includes(q);
      })
    );
  }, [items, fields, query]);

  return {
    query,
    setQuery,
    filteredItems,
  };
}