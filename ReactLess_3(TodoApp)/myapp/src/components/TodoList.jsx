import TodoItem from "./TodoItem"


function TodoList(props){
    const {todos, deleteTodoByid, changeTodos} = props
    return (
        <div>
           {todos.map(elem => <TodoItem 
                                key={elem.id}
                                id={elem.id}
                                title={elem.title}
                                completed={elem.completed}
                                deleteTodoByid={deleteTodoByid}
                                changeTodos={changeTodos}
                            />)}
        </div>
    )
}

export default TodoList