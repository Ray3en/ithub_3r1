


function ProductItem(){
    let name = 'Apple'
    let price = 1000
    let imgUrl = 'https://www.intex-rus.ru/img/goods/small/1014898-1-1.jpg'

    return(
        <div>
            <img src={imgUrl}/>
            <h2>{name}</h2>
            <p>{price} $</p>
        </div>
    )
}


export default ProductItem