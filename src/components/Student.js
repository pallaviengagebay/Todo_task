import React from "react";
function Student(props) {
  console.log(props.name);
  return (
    <div className="App">
      <h1>Hello {props.name}</h1>
      <h2>Email:{props.email}</h2>
      <h2>Add:{props.others.add}</h2>
      <h2>Phoneno:{props.others.phno}</h2>
    </div>
  );
}
export default Student;
