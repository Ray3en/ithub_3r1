import { getUserInfoAction, getUserListAction } from "../store/usersReducer";

export function fetchUsers(){
    return function(dispatch){
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => dispatch(getUserListAction(data.users)));
    }
}


export function fetchUserById(id){
    return function(dispatch){
        fetch('https://dummyjson.com/users/'+id)
            .then(res => res.json())
            .then(data => dispatch(getUserInfoAction(data)));
    }
}