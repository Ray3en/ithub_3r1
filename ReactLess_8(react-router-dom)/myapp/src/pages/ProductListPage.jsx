import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import workData from '../data/work_data.json'



function ProductListPage(){

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products/?offset=0&limit=40')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="content" style={{gap: '15px', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Product List</h1>
            <ol>
                {products.map(elem => 
                    <Link to={'/products/'+elem.id} key={elem.id}>
                        <li>
                            {elem.title}
                        </li>
                    </Link>
                )}
            </ol>
            <h2>Works</h2>
            <ol>
                {workData.map(elem => (
                    <Link key={elem.id} to={'/work/'+elem.id}>
                        <li>
                            {elem.title}
                        </li>
                    </Link>
                ))}
                
            </ol>
        </div>
    )
}

export default ProductListPage