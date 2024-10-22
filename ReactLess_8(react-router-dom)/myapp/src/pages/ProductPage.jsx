import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import loadGif from '../assets/load.gif'

function ProductPage(){

    // useParams позволяет получить динамические параметр из ссылки
    // (из App.js) <Route path="/products/:id" element={<ProductPage/>}/>
    // например, если ссылка будет /products/10, тогда id будет хранить значение 10

    // ДЗ
    // https://reactrouter.com/en/main
    // Посмотреть в документации компонент NavLink
    // Ответить на вопрос: чем NavLink отличается от Link

    const {id} = useParams()

    const [product, setProduct] = useState({})
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)
        fetch('https://fakestoreapi.com/products/'+id)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setLoad(false)
            })
    }, [])

    return (
        <div className="content" style={{gap: '15px', flexDirection: 'column', alignItems: 'center'}}>
            {load ? 
                <img width={40} src={loadGif}/> :
                <>
                    <h1>{product.title}</h1>
                    <img width={250} src={product.image}/>
                    <p>Price: {product.price}$</p>
                </>
            
            }  
        </div>
    )
}

export default ProductPage