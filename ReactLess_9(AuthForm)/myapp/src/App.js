import { useState } from "react";
import { Modal } from "./components/Modal";
import { Button } from "./UI/Button";
import { Link } from 'react-router-dom'
function App() {

  const [active, setActive] = useState(false)

  return (
    <div>
      <Link to={'/login'}>
        <Button onClick={() => setActive(true)} color='yellow' text='Авторизация / Регистрация'/>
      </Link>
      <Modal active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
