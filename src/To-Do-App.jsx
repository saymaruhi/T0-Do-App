import { useState } from "react";

function ToDoApp(props) {
  const [inputText, setInputText] = useState();

  const handleEnterPress = (e)=>{
    if(e.keyCode===13){
        props.addList(inputText)
        setInputText("")
    }

  }

  return (
    <div>
      <h2>To-Do-Lists</h2>
      <div className="todo-container">
        <input
          className="input-box-todo"
          type="text"
          placeholder="Enter a task ..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}

           onKeyDown= {handleEnterPress}
        />
       

        <button
          className="add-btn"
          onClick={() => {
            props.addList(inputText);
            setInputText("");handleEnterPress={}
          }}
        >
          +
        </button>

        <div>{inputText}</div>
        
      </div>
    </div>
  );
}

export default ToDoApp;
