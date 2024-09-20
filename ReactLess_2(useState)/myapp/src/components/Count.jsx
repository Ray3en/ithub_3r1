// Хук - импортируемая функция из библиотеки React.
// Хуки используются для работы с жизненным циклом компонента.

import { useState } from "react";

// useState - это хук, который позволяет обновить компонент (обновить разметку)
// Данный хук отвечает за всю динамику внутри веб-приложения


function Count() {

  let [count, setCount] = useState(0)

  // let [state, setState] = useState(defaultState)
  // state - это состоние, которое должно использоваться в разметке (которое будет динамичным)
  // setState(newValue) - 
  //            1) сетстейт функция, которая заставляет компонент обновиться после ее вызова
  //            2) после вызова МЕНЯЕТ значение внутри состояния (на то, что мы указали в качестве аргумента)
  // defaultState - это начальное состояник на момент монтирования компонента

  // state менять без фукнции setState НЕЛЬЗЯ

  // Задание 1
  // Создайте новую кнопку decrement с функцией, которая изменит состояние на -1 

  // Задание 2
  // Создайте Reset дополнительную кнопку которая будет обнулять значение счетчика

  // Задание 3
  // Под кнопками реализуйте параграф который в зависомсти от состояния будет хранить текст: 
  // Если состояние будет больше 5, тогда оставить текст "count больше 5"
  // Иначе оставить текст "count меньше или равен 5"

  // Задание 4
  // Создайте дополнительную кнопку, которая вызовет модальное окно prompt и сохранит результат введеных данных в состояние count

  function increment(){
    setCount(count + 1)
  }

  function decrement(){
    if (count >= 1){
      setCount(count - 1)
    }
  }

  function promptedValue(){
    let answer = +prompt()
    if (!isNaN(answer)){
      setCount(answer)
    }
  }

    return (
      <div>
        <h2>Count</h2>
        <p>{count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={promptedValue}>Prompt</button>
        <p>{count > 5 ? 'count больше 5' : 'count меньше или равен 5'}</p>
      </div>
    );
  }

  
export default Count;
  
