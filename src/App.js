import "./styles.css";

import { useState, useEffect } from "react";
import { useDebouncing } from "./hooks";

export default function App() {
  const [value, setValue] = useState("");
  const debounceValue = useDebouncing(value);

  const onchangeHandler = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log(debounceValue);
  }, [debounceValue]);
  return (
    <div className="App">
      <input value={value} onChange={onchangeHandler} />
    </div>
  );
}
