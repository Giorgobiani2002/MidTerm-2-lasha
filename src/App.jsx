import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoos, setToodos] = useState([]);
  const [todos, setTodos] = useState(false);

  const handleInput = (e) => {
    setTodo(e.target.value);
    console.log(todo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(true);
    setToodos([...todo, todoos]);
    
  };
  const remove = () => {
    setTodos(false);
  };

  return (
    <>
      <div>
        <form
          className="flex justify-center items-center"
          type="submit"
          action=""
        >
          <input
            className="border-black border-2 "
            type="text"
            placeholder="Search..."
            onChange={handleInput}
          />
          <button onClick={handleSubmit}>ADD</button>
        </form>
        <div className="flex">
          {todos ? <li>{todo}</li> : null}
          {todos ? (
            <button className="ml-4" onClick={remove}>
              Remove
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
