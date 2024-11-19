import { useDispatch, useSelector } from "react-redux"
import { changeYearAction, deleteByIdAction, removeLastUserAction } from "../store/usersReducer"
import { fetchUserById, fetchUsers } from "../asyncActions/users"
import { useEffect } from "react"


export function Users(){

    const users = useSelector(store => store.users.data)
    const userInfo = useSelector(store => store.users.user)

    const dispatch = useDispatch()

    // Выполнение сетевого запроса на момент загрузки страницы (монтирования компонента)
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])

    // Реализуйте кнопку ниже, которая вызовет модального окно prompt и передаст указанное значение 
    // в ваш новый сетевой запрос. Запрос должен получить данные указанного пользователя и сформировать их в 
    // состоянии users

    // users => {}
    // users => {firstName: 'Steven', age: 123}

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
            <h1>User info</h1>
            <button onClick={() => dispatch(fetchUserById(prompt()))}>Get info</button>
            <div>
                <img src={userInfo.image}/>
                <p>{userInfo.firstName}</p>
                <p>{userInfo.age}</p>
            </div>
        </div>
    )
}