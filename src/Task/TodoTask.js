import React, { useState } from "react";
import { BsFillXCircleFill } from "react-icons/bs";

function TodoTask() {
  const userdata = {
    text: "",
    isChecked: false,
  };
  const [inputText, setText] = useState(userdata);
  const [question, setQuestion] = useState([]);
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newQuestion = question;
    newQuestion.push(inputText);
    setQuestion([...newQuestion]);
    setText(userdata);
    setCount(question.length);
  };

  const handleDelete = (deletingdata) => {
    const newdata = question.filter((data) => data !== deletingdata);
    setQuestion(newdata);
  };
  function handleCheck(value, index) {
    const isQuestionChecked = question;
    isQuestionChecked[index].isChecked = value;
    setQuestion([...question]);
    setCheck(check);
    console.log(check);
    setCount(count - 1);
  }
  function deleteCheck() {
    if (check === true) {
      const con = question.filter((data) => data.isChecked === false);
      setQuestion([...con]);
      console.log(con);
    }
  }
  function handleAllCheck() {
    const newdata = question.filter((data) => (data.isChecked = true));
    console.log(newdata);
    setQuestion([...newdata]);
  }

  return (
    <div className="square">
      <h1 multiple>TodoList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText.text}
          onChange={(e) => setText({ ...inputText, text: e.target.value })}
        />
        <br />
        <input id="check-id" type="checkbox" onClick={handleAllCheck}></input>
        <label>Mark all as complete</label>
      </form>
      <ul>
        {question.map((data, index) => {
          return (
            <li key={index}>
              <input
                id="check-id"
                type="checkbox"
                // name={data}
                // value={data}
                checked={data.isChecked}
                onClick={(e) => handleCheck(e.target.checked, index)}
              ></input>
              <h3>{data.text}</h3>
              <span onClick={() => handleDelete(data)}>
                <BsFillXCircleFill />
              </span>
            </li>
          );
        })}{" "}
      </ul>
      <div>
        <b>{question.length}</b>
        <label>items left</label>
      </div>
      <button className="btn btn-primary success" onClick={deleteCheck}>
        Clear Selected check box
      </button>
    </div>
  );
}
export default TodoTask;
