// import { userListAction } from "../store/userReducer";
import { userList } from "../store/usersSlice";

export function fetchUsers(){
    return function(dispatch){
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => dispatch(userList(data.users)));
    }
}

