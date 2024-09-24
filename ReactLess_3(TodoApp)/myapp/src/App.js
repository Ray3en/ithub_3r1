import { useState } from "react";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

function App() {

  const start_todos = [
    {id: 1, title: 'Помыть руки', completed: true},
    {id: 2, title: 'Сделать зарядку', completed: false},
    {id: 3, title: 'Наконец изучить React', completed: true}
  ]

  const [todos, setTodos] = useState(start_todos)

  return (
    <div>
        <AddForm/>
        <TodoList/>
    </div>
  );
}

export default App;
