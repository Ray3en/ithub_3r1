import { getUserListAction } from "../store/usersReducer";

export function fetchUsers(){
    return function(dispatch){
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => dispatch(getUserListAction(data.users)));
    }
}