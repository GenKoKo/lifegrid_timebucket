import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
import Todo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div className="flex flex-col ">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <div className="flex flex-row ">
        <Sidebar></Sidebar>
        <Section></Section>
        <Todo></Todo>
      </div>
    </div>
  );
}

export default App;
