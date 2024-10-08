import { useState } from "react";
import Main from "./components/Main";
import { Context } from "./context/Context";

// Контекст - это возможность избавить в приложении от props drilling
// PD - это процес передачи пропов из родительского компонента в дочерний 

// Сам котнекст (облако) находится в папке context
// Для передачи пропов в конеткст используется компонент Provider и далее все дочерние компоненты могут получить доступ к данным в облаке

// useContext - это хук, котораый позволяет ПОЛУИТЬ данные из контекста внутри любого компонента, находящевогся в пределах Provider


function App() {

  const [text, setText] = useState('Default text')

  const reverseText = () => {
    setText(text.split('').reverse().join(''))
  }

  return (
    <div>
      <Context.Provider value={{text, reverseText}}>
        <Main/>
      </Context.Provider>
    </div>
  );
}

export default App;
