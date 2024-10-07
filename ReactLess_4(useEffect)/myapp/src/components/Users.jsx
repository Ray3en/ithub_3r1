import { useEffect, useState } from "react";



function Users() {

  let local_data = JSON.parse(localStorage.getItem('users'))
  let [users, setUsers] = useState(local_data || [])   

  // Реализуйту непрерывное сохранение состояния в LS 
  // Доработайте useEffect таким образом, чтобы он не выолнял сетевой запрос в случае, если в LS есть записи

  useEffect(() => {
    if (local_data && local_data.length === 0){
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setUsers([...users, ...data])
        })
    }
  }, [])

  // По двойному нажатию реализуйте удаление пользователя
  function deleteUser(id){
    setUsers(users.filter(user => user.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  return (
    <div >
      <ul>
        {users.map(elem => 
            <li 
              key={elem.id}
              onDoubleClick={() => deleteUser(elem.id)}
            >
                {elem.username}
            </li>)}
      </ul>
    </div>
  );
}

export default Users;
