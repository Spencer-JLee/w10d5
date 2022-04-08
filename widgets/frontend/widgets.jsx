import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import Tabs from "./tabs";

const objs =[
  {title: "Hello", content: "Hi"},
  {title: "Goodbye", content: "Bye"},
  {title: "Yawn", content: "Zzz"}
];

function Root(){
  return (
    <div>
      <Clock/>

      <Tabs objs={objs}/>
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("main");
  // const hello = <h1>Hello</h1>;

  ReactDOM.render(<Root/>, root);
});