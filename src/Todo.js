import React, { useState } from 'react';
import './Todo.css';


function Todo () {
    const [items, setItems] = useState([]);
    const [completedItems, setCompletedItems] = useState([]);

    const [addTodoVal, setAddTodoVal] = useState("");

    const handleTodoChange = (event) => {
        console.log(event.target.value);
        setAddTodoVal(event.target.value);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        if (addTodoVal !== "") {
            setItems([...items, addTodoVal]);
            console.log(items);
            setAddTodoVal(""); // reset to empty string
        }
    }

    const handleCompleteTodo = (event, index) => {
        event.preventDefault();
        console.log("remove index:", index);
        const value = items.splice(index, 1);
        completedItems.push(value[0]);
        console.log("items:", items);
        console.log("completed:", completedItems);

        setCompletedItems([...completedItems]);
        setItems([...items]);
    }

    return (
      <div className="todo">
        <div className="todo-container">
            <div className="todo-header">
                <h2>todo list:</h2>
            </div>
            
            <div className="todo-list">
                {items && items.map((item, index) =>
                    <ul className="todo-item" key={index} onClick={(event) => handleCompleteTodo(event, index)}>{item}</ul>
                )}
            </div>

            <div className="add-todo-form">
                <form onSubmit={handleAddTodo}>
                    <input
                        type="text"
                        value={addTodoVal}
                        placeholder="add todo items..."
                        onChange={handleTodoChange}
                    />
                </form>
            </div>
        </div>

        <div className="middle-space"/>

        <div className="completed-container">
            <div className="completed-header">
                <h2>completed:</h2>
            </div>

            <div className="completed-list">
                {completedItems && completedItems.map((item, index) =>
                    <ul className="completed-item" key={index}>
                        {item}
                    </ul>
                )}
            </div>
        </div>
      </div>
    );
  }
  
  export default Todo;