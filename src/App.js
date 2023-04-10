import "./App.css";
// import Practice from "./components/Practice";
// import { useState } from "react";
// import Login from "./components/Login";
// import PropsUser from "./components/PropsUser";
// import UseEffectPractice from "./components/UseEffectPractice";
// import HandleArrayList from "./components/HandleArrayList";
// import NestedArrayList from "./components/NestedArrayList";
import TodoTask from "./Task/TodoTask";

function App() {
  // function getData() {
  //   alert("Calling from App.js");
  // }
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <PropsUser data={getData} /> */}
      {/* <Practice /> */}
      {/* <UseEffectPractice /> */}
      {/* <HandleArrayList /> */}
      {/* <NestedArrayList /> */}
      <TodoTask />
    </div>
  );
}

export default App;
