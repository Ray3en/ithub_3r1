import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../asyncActions/users"
import { changeYear, deleteById, removeLastUser } from "../store/usersSlice"



function Users(){
    const users = useSelector(store => store.users.data)

    const dispatch = useDispatch()
    return(
        <div>
            <div>
                <button onClick={() => dispatch(removeLastUser())}>Remove last user</button>
                <button onClick={() => dispatch(changeYear())}>Change year action</button>
                <button onClick={() => dispatch(fetchUsers())}>get Async data</button>
            </div>
            <ul>
                {users.map(user => (
                    <li 
                        key={user.id}
                        onClick={() =>dispatch(deleteById(user.id))}
                    >
                        {user.firstName} {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users