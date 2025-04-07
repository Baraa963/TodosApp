import { Typography } from "@mui/material";
import "./App.css";
import TodoList from "./Components/TodoList/TodoList";
import {useState } from "react";
import { TodosContext } from "./Contexts/TodosContext";
function App() {
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <TodoList />
    </TodosContext.Provider>
  );
}

export default App;
