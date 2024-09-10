import sprayImage from '../assets/image.jpg'
import userIcon from '../assets/user-solid.svg'

function ProductItem(){
    let name = 'Apple'
    let price = 1400
    let imgUrl = 'https://www.intex-rus.ru/img/goods/small/1014898-1-1.jpg'
    let isLiked = false
    // (condition) ? value1 : value2

    return(
        <div>
            
            {/* Картинка */}
            <img src={sprayImage}/>
            {/* Иконка */}
            <img width={35} src={userIcon}/>

            <h2>{name}</h2>
            <p>{price} $</p>
            {/* Два тега по условию */}
            { (price > 500) ? <h1>Sale!</h1> : <p>Not sale!</p> }

            {/* Отсутсвие/наличие элемента по условию */}
            { (price > 500) ? <h1>Sale!</h1> : '' }

            {/* Альтернатива решению выше */}
            { price > 500 && <h1>Sale!</h1>}

            {/* Еще один пример */}
            <h2 className={isLiked && 'liked'}>
                {(isLiked) ? 'В избранном' : 'Добавить в избранное'}
            </h2>
        </div>
    )
}


export default ProductItem