import { useDispatch, useSelector } from "react-redux"



export function Count(){

    // useSelector - это хук, который позволяет получить значение стейта из хранилища redux
    // В качестве аргумента указывается колбек с уточнением сво-ва которое необходимо получить

    const count = useSelector((store) => store.count.count)

    // useDisptach - это хук, который позволяет получить функцию для имзенения хранилища в redux
    // disptach далее будет получать в параметре объект Action и отпправлять команду на 
    // изменение состояние в редьюсер
    const disptach = useDispatch()

    return(
        <div>
            <h1>Count</h1>
            <p>{count}</p>
            <div>
                <button onClick={() => disptach({type: "INCR_BY_PAYLOAD", payload: 1})}>Increment</button>
                <button onClick={() => disptach({type: "INCR_BY_PAYLOAD", payload: -1})}>Decrement</button>
                <button onClick={() => disptach({type: "INCR_BY_PAYLOAD", payload: 100})}>Increment + 100</button>
                <button onClick={() => disptach({type: "INCR_BY_PAYLOAD", payload: -100})}>Decrement - 100</button>
            </div>
            <div>
                <button onClick={() => disptach({type: "RESET"})}>Reset</button>
                <button onClick={() => disptach({type: "INCR_BY_PAYLOAD", payload: +prompt()})}>Increment by prompt</button>
            </div>
        </div>
    )
}
// Action - это обычный JS объект, который хранит 2 сво-ва 
// 1) type - имя операции
// 2) payload - полезная нагрузка (аргументы)
