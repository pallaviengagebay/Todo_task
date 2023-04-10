import React, { useEffect, useState } from "react";
function Practice() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Hello");
  });
  return (
    <div>
      <h1>UseEffect Count {count}</h1>
      <button onClick={() => setCount(count + 1) }>Update Number</button>
    </div>
  );
}
export default Practice;
