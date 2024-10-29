import { useState } from "react";
import { Modal } from "./components/Modal";
import { Button } from "./UI/Button";

function App() {

  const [active, setActive] = useState(false)

  return (
    <div>
      <Button color='yellow' text='Авторизация / Регистрация'/>
      <Modal active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
