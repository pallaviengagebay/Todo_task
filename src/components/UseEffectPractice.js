import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
function UseEffectPractice() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);
  useEffect(() => {
    console.log("Use effect count called");
  }, [count]);
  useEffect(() => {
    console.log("Use effect data called");
  }, [data]);
  return (
    <div>
      <h1>Count::{count}</h1>
      <h1>Data=={data}</h1>
      <Button variant="danger" onClick={() => setCount(count + 1)}>
        {" "}
        Update count
      </Button>
      <Button onClick={() => setData(data + 1)}>Update Data</Button>
    </div>
  );
}
export default UseEffectPractice;
