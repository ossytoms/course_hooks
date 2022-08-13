import "./App.css";
import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useContext,
  createContext,
  useRef,
} from "react";

import List from "./List";
import AgeChecker from "./AgeChecker";
import UseRefTest from "./UseRefTest";
import UseEffectSetTimeout from "./UseEffectSetTimeout";
import { UseMemoThemeStyle } from "./UseMemoThemeStyle";
import SetResourceType from "./SetResourceType";
import ReactForms from "./ReactForms";
import ListAndProps from "./ListAndProps";
import UseCallbackTest from "./UseCallbackTest";
import TernaryOperator from "./TernaryOperator";

export default function App() {
  
  const [number, setNumber] = useState(1);

  const UserContext = createContext();

  var doubleNumber = useMemo(() => slowFunction(number), [number]);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <>
      <div>
        <SetResourceType />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <UseMemoThemeStyle />
        <div>{doubleNumber}</div>
        <List getItems={getItems} />
        <AgeChecker number={number} />
        <UseEffectSetTimeout />
        <UseRefTest />
        <ReactForms />
        <ListAndProps />
        <UseCallbackTest />
        <TernaryOperator />
      </div>
    </>
  );
}

function slowFunction(num) {
  for (var i = 0; i < 100000000; i++) {}
  return num * 2;
}
