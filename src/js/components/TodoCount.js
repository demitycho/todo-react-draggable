import React from "react";

const countStyle = {
  textAlign: "center",
  width: "150px",
  height: "50px",
  fontSize: "20px",
  background: "white",

  boxShadow: "inset 0 0 4px grey"
};


const TodoCount = props =>
  <div style={countStyle}><b>{props.count}</b>
    <br/><span style={{color: "gray"}}>PROJECTS</span>
  </div>;

export default TodoCount;