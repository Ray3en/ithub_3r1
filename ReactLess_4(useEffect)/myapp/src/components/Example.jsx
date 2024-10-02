// useEffect - это хук, который следит за жизненным циклом компонента. 
// После перехода из одного этапа жизненного цикла в другой - данный хук выполняет ПОБОЧНЫЙ код

import { useEffect } from "react"


function Example(){
    
    useEffect(() => {
        console.log('Монтирование')
    })

    console.log('Инициализация')

    return(
        <div>
            Example
        </div>
    )
}

export default Example