import React from "react";
import SectionDots from "./SectionDots";
import { IoSquare } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

const SectionRow = ({ age, leftAge }) => {

  let rowAge = [
    <div className="flex flex-row " >
      <IoSquare />
      <IoSquare />
    </div>,
    <div className="flex flex-row texg">
      <IoSquare color="red"/>
      <IoSquare color="red"/>
      <IoSquare color="red"/>
    </div>
  ];
  
  const test_arr = [1, 2, 3];
  let rowAge10 = [rowAge];
  let template =  <div className="flex flex-row">{rowAge}</div>

  for (let i = 0; i < leftAge; i++) {
    if( i < age ){
      

    }else if (i >= age){

    }

  }

  return <IconContext.Provider value={{color:"gray", size: "0.8em"}}>

    <div className="flex flex-col">{template}</div>

  </IconContext.Provider>
  
};

export default SectionRow;
