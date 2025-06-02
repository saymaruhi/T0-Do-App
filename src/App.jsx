import React from "react";
import ToDoApp from "./To-Do-App";
import "./App.css";
import { useState } from "react";
import ToDoList from "./ToDoList";
function App() {
 

  const [listToDo, setListToDo] = useState([]);

  let addList = (inputText) => {

    if(inputText!=='')
    setListToDo([...listToDo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listToDo];
    newListTodo.splice(key, 1);
    setListToDo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container"></div>

      <ToDoApp addList={addList} />

      <div className="ToDo-list-section">
        <h3 className="app-heading">TODO </h3>
        <hr />

        {listToDo.map((listItem, i) => {
          return (
            <ToDoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
