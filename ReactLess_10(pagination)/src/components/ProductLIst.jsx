import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";



export default function ProductList(){

    const [products, setProducts] = useState([])
    const [countPages, setCountPages] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=50')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, [])

    const lastElemInd = countPages * currentPage
    const firstElemInd = lastElemInd - countPages
    const countElem = Math.ceil(products.length / countPages)
    const slicedProducts = products.slice(firstElemInd, lastElemInd)

    return (
        <div className="content">
            <div className="product_wrapper">
                {slicedProducts.map(product => <ProductCard 
                                                    key={product.id} 
                                                    title={product.title} 
                                                    price={product.price}
                                                    image={product.thumbnail}
                                        />)}
            </div>
            {/* Измените компонент Pagination таким образом, чтобы пагинация на странице работала */}
            <Pagination 
                count={countElem} 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}