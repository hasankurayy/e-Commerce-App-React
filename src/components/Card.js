import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({ product }) {

    const navigate = useNavigate()

    return (
        <div onMouseUp={() => navigate(`/product/${product.id}`)} className='border rounded-lg relative cursor-pointer'>
            <div className='absolute bg-turuncu mt-4 -ml-2 rounded-md text-sm text-white px-2 py-1'>
                {product.category}
            </div>
            <div className='h-[250px]'>
                <img className='w-full h-full object-fit' src={product.thumbnail} alt="" />
            </div>
            <div className='flex justify-center py-3 mx-4 border-b border-turuncu text-lg font-semibold'>
                {product.title}
            </div>
            <div className='px-3 flex py-4 justify-between items-center'>
                <div className='text-md font-semibold'>{product.brand}</div>
                <div className='text-turuncu font-bold text-lg'>{product.price} $</div>
            </div>
        </div>
    )
}

export default Card