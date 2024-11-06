


export default function ProductCard(props){

    const {title, image, price} = props

    return (
        <div className="product_item">
            <img src={image} width={200} height={200}/>
            <h3>{title}</h3>
            <p>{price} $</p>
        </div>
    )
}