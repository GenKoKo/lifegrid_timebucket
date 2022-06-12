import React, { useEffect, useState } from "react";
import SectionRow from "./SectionRow";

const Section = () => {
  const [age, setAge] = useState(34)
  const [leftAge, setLeftAge] = useState(100)
  
  // useEffect(() =>{
  //   setLeftAge({leftAge} - {age})
  // },[] )
  
  return (
    <div className=" flex flex-row">
      <div className=" bg-blue-400">
        <SectionRow age={age} leftAge={leftAge-age} />
      </div>
    </div>
  );
};

export default Section;
