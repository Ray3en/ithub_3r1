import { useDispatch, useSelector } from "react-redux"
import { addSpaceAction, sliceTextAction, textUpdateAction } from "../store/stringReducer"



function String(){

    const string = useSelector(store => store.string.value)

    const dispatch = useDispatch()

    // Создайте новую кнопку, которая будет после каждой буквы ставить пробел в текущем значении
    // 'World' => 'W o r l d'
    // В лс необходимо отправить файл stringReducer.js

    // Создайте новую кнопку, которая заменит всю строку на два символа 
    // Первый символ - это первая буква текущего состояния 
    // Второй символ - последняя буква текущего состояния
    // 'World' => 'Wd'
    // В лс необходимо отправить файл stringReducer.js

    return(
        <div>
            <h1>String</h1>
            <p>{string}</p>
            <div>
                <button onClick={() => dispatch(textUpdateAction(prompt()))}>Promt text</button>
                <button onClick={() => dispatch(addSpaceAction())}>Add space</button>
                <button onClick={() => dispatch(sliceTextAction())}>Slice text</button>
            </div>
        </div>
    )
}

export default String