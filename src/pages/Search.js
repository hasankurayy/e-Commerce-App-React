import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Context from "../Context"
import Card from '../components/Card'

function Search() {

    const { setSearch } = useContext(Context)
    const { search } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios(`https://dummyjson.com/products/search?q=${search}`)
            .then(res => setProducts(res.data.products))

    }, [search])

    return (
        <div className='px-5 py-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3'>
            {products && products.map((product) => {
                return (
                    <Card product={product} />
                )
            })}
        </div>
    )
}

export default Search