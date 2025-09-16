import { useEffect, useState } from "react";

export const useMatchMedia = (width: number): boolean => {
  const query = `(min-width: ${width}px)`;
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);
    const onChangeHandler = () => setMatches(mediaQuery.matches);
    onChangeHandler(); // set initial value

    mediaQuery.addEventListener("change", onChangeHandler);
    return () => mediaQuery.removeEventListener("change", onChangeHandler);
  }, [query]);

  return matches;
};
