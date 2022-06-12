import React, { useEffect, useState } from "react";
import SectionDots from "./SectionDots";
import { IoSquare } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

const SectionRow = ({ age, leftAge }) => {
  const [grid, setGrid] = useState([]);

  let rowAge = [
    <div className="flex flex-row ">
      <IoSquare />
      <IoSquare />
    </div>,
    <div className="flex flex-row">
      <IoSquare color="red" />
      <IoSquare color="red" />
      <IoSquare color="red" />
    </div>,
  ];


  const create_grid_color = (age, leftAge) => {
    let count = 1;
    let temp_col = [];
    let temp_row = [];
    for (let i = 1; i <= age + leftAge; i++) {
      if (i <= age) {
        temp_row.push("black");
      } else if (i > age) {
        temp_row.push("red");
      }

      if (i % 10 == 0) {
        temp_col.push(temp_row);
        temp_row = [];
      }

      count++;
    }

    temp_col.push(temp_row);

    return temp_col;
  };

  useEffect(() => {
    console.log(create_grid_color(age, leftAge));
    setGrid(create_grid_color(age, leftAge));
  }, [leftAge]);


  return (
    <IconContext.Provider value={{ color: "gray", size: "0.8em" }}>
      <div className="flex flex-col">{grid.map((row,ind_row)=>{
        row.map((dot, ind_dot)=>{
           return <IoSquare color={dot} key={`${ind_row}_${ind_dot}`}/>
        })
      })}</div>
    </IconContext.Provider>
  );
};

export default SectionRow;
