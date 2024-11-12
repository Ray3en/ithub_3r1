import { useSelector } from "react-redux"



export function Count(){

    // useSelector - это хук, который позволяет получить значение стейта из хранилища redux
    // В качестве аргумента указывается колбек с уточнением сво-ва которое необходимо получить

    const count = useSelector((store) => store.count)

    return(
        <div>
            <h1>Count</h1>
            <p>{count}</p>
        </div>
    )
}

