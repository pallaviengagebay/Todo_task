import React from "react";
function PropsUser(props) {
  return (
    <div>
      <h1>User Component</h1>
      <button onClick={props.data}>CLICK</button>
    </div>
  );
}
export default PropsUser;
