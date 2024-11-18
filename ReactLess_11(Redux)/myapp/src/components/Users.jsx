import { useDispatch, useSelector } from "react-redux"
import { changeYearAction, deleteByIdAction, removeLastUserAction } from "../store/usersReducer"
import { fetchUsers } from "../asyncActions/users"
import { useEffect } from "react"


export function Users(){

    const users = useSelector(store => store.users.data)

    const dispatch = useDispatch()

    // Выполнение сетевого запроса на момент загрузки страницы (монтирования компонента)
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])

    return(
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li 
                        key={user.id}
                        onClick={() =>dispatch(deleteByIdAction(user.id))}
                    >
                        {user.firstName} {user.age}
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => dispatch(removeLastUserAction())}>Remove last user</button>
                <button onClick={() => dispatch(changeYearAction())}>Change year</button>
                <button onClick={() => dispatch(fetchUsers())}>Get async Users</button>
            </div>
        </div>
    )
}