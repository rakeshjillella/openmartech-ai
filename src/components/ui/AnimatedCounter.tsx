"use client";

import { useEffect, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
};

export default function AnimatedCounter({
  value,
  suffix = "",
}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const increment = Math.max(1, Math.ceil(value / 40));

    const timer = setInterval(() => {
      current += increment;

      if (current >= value) {
        current = value;
        clearInterval(timer);
      }

      setCount(current);

    }, 25);

    return () => clearInterval(timer);

  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}