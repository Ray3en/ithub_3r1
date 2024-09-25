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

  function deleteTodoByid(id){
    let filteredTodos = todos.filter(elem => elem.id !== id)
    setTodos(filteredTodos)
  }

  // ДЗ
  // Релизуте функцию changeTodos(id), которая в качестве аргумента будет получать id задачи
  // Функция должна изменить сво-во completed на инвертирование значение булевого типа у той задачи, чей id равен занчение аргумента
  // Функция должна вызываться по событию onClick внутри TodoItem

  return (
    <div>
        <AddForm/>
        <TodoList todos={todos} deleteTodoByid={deleteTodoByid}/>
    </div>
  );
}

export default App;
