import { useDispatch, useSelector } from "react-redux"



function String(){

    const string = useSelector(store => store.string.value)

    const dispatch = useDispatch()
    
    // Реализуйте кнопку которая позволит переопределить значение состояние на то
    // которое будет указано в модальном окне prompt
    // используйте payload

    return(
        <div>
            <h1>String</h1>
            <p>{string}</p>
            <div>
                <button onClick={() => dispatch({type: 'TEXT_UPDATE', payload: prompt()})}>Promt text</button>
            </div>
        </div>
    )
}

export default String