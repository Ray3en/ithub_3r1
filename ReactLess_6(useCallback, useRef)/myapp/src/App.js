import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';


function App() {

  const [numbers, setNumbers] = useState([1,2,3,4,5])

  // Задача useRef заключается в том, чтобы не терять значение переменной 
  // после онбовления компонента. 
  // useRef возвращает объект со сво-вом current.
  // Данный хук также очень удобен по работе с тегами (минуя поиск элементов)
  let ulRef = useRef()

  // useCallback - это хук, который позволяет не пересоздавать функцию в момент обновления 
  // компонента. 
  // Также, как и у useEffect, мы можем указать зависимости после изменения которых перреопределение ФУНКЦИИ
  // будет выполняться

  const handler = useCallback(() => {
    console.log('scroll!')
  }, [])


  const stopScrollHandle = () => {    
    ulRef.current.removeEventListener('scroll', handler)    
  }

  useEffect(() => {
    ulRef.current.addEventListener('scroll', handler)
  }, [])


  return (
    <div>
      <ul ref={ulRef}>
        {numbers.map(el =>
          <li key={el}>
            {el}
          </li>
        )}
      </ul>
      <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>
        Add new number
      </button>
      <button onClick={stopScrollHandle}>
        Stop scroll!
      </button>
    </div>
  );
}

export default App;
