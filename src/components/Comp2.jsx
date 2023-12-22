import React from "react";
import { useSelector } from "react-redux";

const Comp2 = () => {
  const data = useSelector((state) => state.data.value);
  return (
    <div>
      <h1>Comp2{data}</h1>
    </div>
  );
};

export default Comp2;
