

function TodoItem(props){

    const {title, completed, id, deleteTodoByid} = props

    return (
        <div 
            className="todo_card"
            style={{backgroundColor: completed ? 'green' : 'red'}}
            onDoubleClick={() => deleteTodoByid(id)}
            
        >
            <h2>{title}</h2>
        </div>
    )
}

export default TodoItem