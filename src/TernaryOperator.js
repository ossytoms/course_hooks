import React, { useState} from "react";
const TernaryOperator = () => {
    const [ageCheckTested, setAgeCheckTested] = useState("")
  const age = 20;
  const ageCheck = (age) => {
    var ageCheckTest = age < 12 ? "child" : age < 20 ? "tennage" : "old people";
    setAgeCheckTested(ageCheckTest)
  };

  const arrowFunction = () => {
    
  }

  return (
    <>
      age:{age} ageCheck:{ageCheckTested}
      <button onClick={ageCheck}>Check Age</button>
    </>
  );
};

export default TernaryOperator;
