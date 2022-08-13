import { useCallback, useState } from "react";

export default function UseCallbackTest() {
  const [text, setText] = useState("");
  const [isCap, setIsCap] = useState(false);

  function capWord(word) {
    if(isCap){
        setText(word.toLowerCase())
        setIsCap(false)
    }else{
        setText(word.toUpperCase())
        setIsCap(true)
    }

  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => capWord(e.target.value)}
      />
    </>
  );
}
