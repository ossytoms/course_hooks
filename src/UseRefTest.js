import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useContext,
  createContext,
  useRef,
} from "react";

export default function UseRefTest() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("")
  const refNumber = useRef(0);
  const inputElement = useRef();

  const putFocus = () => {
    inputElement.current.focus();
  }

  useEffect(() => {
    previousInputValue.current = inputValue
    refNumber.current = refNumber.current + 1;
  }, [inputValue]);

  return (
    <>
      <p>
        <input
          type="text"
          placeholder="Put focus on me..."
          ref={inputElement}
        />
        <button onClick={putFocus}>Use me to put focus</button>
      </p>
      <input
        type="number"
        value={inputValue}
        onChange={(f) => setInputValue(f.target.value)}
      />
      <p>Render count: {refNumber.current}</p>
      <p>Previous Input value: {previousInputValue.current}</p>
      
    </>
  );
}
