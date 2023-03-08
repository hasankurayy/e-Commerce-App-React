import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

function Category() {

    const { category } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios(`https://dummyjson.com/products/category/${category}`)
            .then(res => setProducts(res.data.products))
    }, [category])

    return (
        <div className='px-5 py-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3'>
            {products && products.map((product) => (
                <Card product={product} />
            ))}
        </div>
    )
}

export default Category