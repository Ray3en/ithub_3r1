// useEffect - это хук, который следит за жизненным циклом компонента. 
// После перехода из одного этапа жизненного цикла в другой - данный хук выполняет ПОБОЧНЫЙ код

import { useEffect, useState } from "react"


function Example(){

    // Режимы работы useEffect

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    
    // ---------------------
    // 1 режим работы
    // Монтирование компонента 
    // useEffect(() => {
    //     console.log('Монтирование')
    // }, [])

    // ---------------------
    // 2 режим работы 
    // Монтирование ИЛИ обновление компонента
    // useEffect(() => {
    //     console.log('Монтирование ИЛИ обновление')
    // })

    // ---------------------
    // 3 режим работы
    // Монтирование ИЛИ обновление указанного стейта  
    // useEffect(() => {
    //     console.log('Монтирование ИЛИ обновление count1')
    // }, [count1])

    // useEffect(() => {
    //     console.log('Монтирование ИЛИ обновление count2')
    // }, [count2])

    // useEffect(() => {
    //     console.log('Монтирование ИЛИ обновление count2 или count1')
    // }, [count2, count1])


    return(
        <div>
            Example
            <h4>{count1}</h4>
            <button onClick={() => setCount1(count1 + 1)}>Increment</button>
            <h4>{count2}</h4>
            <button onClick={() => setCount2(count2 + 1)}>Increment</button>
        </div>
    )
}

export default Example