import { useState, useEffect } from "react";

export const useDebouncing = (inputValue, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(inputValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inputValue);
    }, delay);

    return () => clearTimeout(timer);
  }, [inputValue, delay]);

  return debounceValue;
};
