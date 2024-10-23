import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import loadGif from '../assets/load.gif'

function ProductPage(){

    // useParams позволяет получить динамические параметр из ссылки
    // (из App.js) <Route path="/products/:id" element={<ProductPage/>}/>
    // например, если ссылка будет /products/10, тогда id будет хранить значение 10

    const {id} = useParams()

    // useNavigate - это хук, возвращающий функцию для програмной навигации
    const navigate = useNavigate()

    
    const [product, setProduct] = useState({})
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoad(true)
        fetch('https://api.escuelajs.co/api/v1/products/'+id)
            .then(res => {
                if (res.status === 200){
                    return res.json()
                } else {
                    setError(true)
                    setTimeout(() => {
                        navigate('/')
                    }, 2000)
                }
            })
            .then(data => {
                setProduct(data)
            })
            .finally(() => setLoad(false))
    }, [])

    
    return (
        <div className="content" style={{gap: '15px', flexDirection: 'column', alignItems: 'center'}}>
            {load ? 
                <img width={40} src={loadGif}/> :

                error ? <h2>Данного продукта не существует</h2> 
                :
                <>
                    <button onClick={() => navigate(-1)}>Назад</button>
                    <h1>{product.title}</h1>
                    <img width={250} src={product.images?.[0]}/>
                    <p>Price: {product.price}$</p>
                </>
            
            }  
        </div>
    )
}

export default ProductPage