import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"
import Context from "../Context"

function SingleProduct() {

    const { basket, setBasket, addToBasket, removeFromBasket } = useContext(Context)
    const { id } = useParams()

    const [product, setProduct] = useState()
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        axios(`https://dummyjson.com/products/${id}`)
            .then(res => setProduct(res.data))
    }, [])

    const subQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const isThereInBasket = basket.find(arrayItem => arrayItem?.id === product?.id) ? true : false

    return (
        <div className='mx-5 my-5 bg-white'>
            {product && (
                <div className='flex gap-20 py-10 px-5'>
                    <div>
                        <img src={product.images[0]} alt="" />
                    </div>
                    <div>
                        <div className='text-xl font-semibold border-b py-3'>{product.title}</div>
                        <div className='opacity-70 py-1'>{product.description}</div>
                        <div className='flex'>
                            <p className='mr-3 pr-3 my-2 border-r-2 border-turuncu'><span className='text-turuncu mr-2'>Rating:</span>{product.rating}</p>
                            <p className='mr-3 pr-3 my-2 border-r-2 border-turuncu'><span className='text-turuncu mr-2'>Brand:</span>{product.brand}</p>
                            <p className='mr-3 pr-3 my-2'><span className='text-turuncu mr-2'>Category:</span>{product.category}</p>
                        </div>
                        <div className='my-10 text-4xl text-turuncu font-semibold ml-5'>${product.price}.99</div>
                        <div className='flex items-center gap-4'>
                            <p className='text-lg'>Quantity:</p>
                            <div className='flex items-center border px-2 py-1 text-lg'>
                                <button className='border-r-2 pr-2 font-bold text-xl' onClick={subQuantity}>-</button>
                                <p className='px-2 border-r-2 text-xl'>{quantity}</p>
                                <button className='pl-2 font-bold text-xl' onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                        </div>
                        <div className='mt-5 flex gap-3'>
                            <button onClick={() => addToBasket(product,quantity)} className= 'rounded-sm hover:bg-turuncu hover:text-white transition-all duration-500 flex items-center px-4 py-2 border-2 border-turuncu text-turuncu gap-2 font-semibold'>
                                <div><FiShoppingCart /></div>
                                <p>Add To Cart</p>
                            </button>
                            <button onClick={() => removeFromBasket(product)} disabled={!isThereInBasket} className='rounded-sm hover:text-white hover:bg-turuncu transition-all duration-500 px-4 py-2 border-2 text-turuncu font-semibold border-turuncu'>
                                Remove From Basket
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SingleProduct