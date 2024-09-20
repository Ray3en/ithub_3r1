// Создайте состояние с дефолтным значением 'Default text'
// Поместите это значение в новый параграф под заголовком

import { useState } from "react"

// Задание 1 
// Создайте кнопку, которая преобразует текст в верхний регистр
// 'Default value' => 'DEFAULT TEXT'

// Задание 2
// Создайте кнопку, которая позволит возвести текст в нижний регистр
// Создайте кнопку, которая позволит сохранить значение с модального окна prompt в состояние
// ДЗ
// Создайте кнопку которая отзеркалит значение состояния 
// 'Tigran' => 'nargiT'

function Text(){

    const [text, setText] = useState('Default value') 

    function toUpperText(){
        setText(text.toUpperCase())
    }

    function toLowerText(){
        setText(text.toLowerCase())
    }

    return(
        <div>
            <h2>Text</h2>
            <p>{text}</p>
            <div>
                <button onClick={toUpperText}>Upper Text</button>
                <button onClick={toLowerText}>Lower Text</button>
                <button onClick={() => setText(prompt())}>Text by prompt</button>
            </div>
        </div>
    )
}

export default Text