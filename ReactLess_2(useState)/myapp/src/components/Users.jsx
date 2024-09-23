import { useState } from "react"



function Users(){

    const data = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Steven'},
        {id: 3, name: 'Neena'},
        {id: 4, name: 'Willyam'},
    ]

    const [users, setUsers] = useState(data)

    // Задание
    // Создать кнопку, которая удалит последнего пользователя

    function deleteLastUser(){
        // Решение 1
        // let copyUsers = [...users]
        // copyUsers.pop()
        // setUsers(copyUsers)

        // Решение 2
        let filteredUsers = users.slice(0,-1)
        setUsers(filteredUsers)

        // Решение 3
        // let filteredUsers = users.filter((elem, index) => index !== users.length -1)
        // setUsers(filteredUsers)
    }

    // Задание 2 
    // Добавьте новоу кнопку, которая реализует удаление ПЕРВОГО юзера 
    // В функции также предоставьте 3 разных решений

    function deleteFirstUser(){
        let filteredUsers = users.slice(1)
        setUsers(filteredUsers)
    }

    // Задание 3
    // Добавьте еще одну кнопку, которая возведет все имена юзеров в верний регистр
    function toUpperCaseUsers(){
        let changedUsers = users.map(user => (
            {
                ...user, 
                name: user.name.toUpperCase()
            }
        ))
        setUsers(changedUsers)
    }

    // Задание 4
    // Добавьте дополнительную кнопку которая добавит нового пользователя в массив
    // Для значения name необходимо использовать модальное окно prompt

    function addNewUser(){
        let newId = Math.max(...users.map(el => el.id))
        let newUser = {
            id: isFinite(newId) ? newId + 1 : 1,
            name: prompt()
        }
        setUsers([...users, newUser])
    }

    // Задание 5
    // Добавьте новую кнопку, которая отсортирует юзеров по алфовитному порядку (по имени)
    function sortByName(){
        let copyUsers = [...users]
        copyUsers.sort((a,b) => a.name > b.name ? 1 : -1)
        setUsers(copyUsers)
    }
    
    return (
        <div>
            <h2>Users</h2>
            <div>  
                <button onClick={deleteLastUser}>Delete last user</button>
                <button onClick={deleteFirstUser}>Delete first user</button>
                <button onClick={toUpperCaseUsers}>Upper case users</button>
            </div>
            <div>
                <button onClick={addNewUser}>Add new user</button>
                <button onClick={sortByName}>Sort by name</button>
            </div>
            <ul>
                {users.map(el => <li key={el.id}>{el.name}</li>)}
            </ul>
        </div>
    )
}


export default Users


// [
//     {id: 1, name: 'Alex'},
//     {id: 2, name: 'Steven'},
//     {id: 3, name: 'Neena'},
//     {id: 4, name: 'Willyam'},
// ]

//  => 


// [
//     {id: 2, name: 'Steven'},
//     {id: 3, name: 'Neena'},
//     {id: 4, name: 'Willyam'},
//     {id: 4, name: 'Tigran'},
// ]
