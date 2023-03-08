import React, { useContext } from 'react'
import Context from '../Context'
import { AiFillDelete } from "react-icons/ai"

function Basket() {

    const { basket, addToBasket, removeFromBasket, clearBasket } = useContext(Context)
    var totalPrice = 0

    return (
        <div className='p-5 text-gray-400'>
            <div className='bg-white flex py-3 mb-5 border-b-2 border-turuncu font-medium font-lg text-gray-600'>
                <div className='w-[7%] text-center'>Photo</div>
                <div className='w-[25%] text-center'>Title</div>
                <div className='w-[25%] text-center'>Unit Price</div>
                <div className='w-[25%] text-center'>Quantity</div>
                <div className='w-[25%] text-center'>Total Price</div>
                <div className='w-[15%] border-r-2 text-center'>Actions</div>
            </div>
            {basket && basket.map((basketItem) => {

                totalPrice += parseInt(basketItem.price) * parseInt(basketItem.quantity)

                return (
                    <div className='bg-white flex items-center border-b py-3 justify-between font-medium'>
                        <img className='w-[5%]' src={basketItem.img} alt="" />
                        <div className='w-[25%] text-center '>{basketItem.title}</div>
                        <div className='w-[25%] text-center'>${basketItem.price}</div>
                        <div className='w-[25%] text-center'>{basketItem.quantity}</div>
                        <div className='w-[25%] text-center text-turuncu '>${parseInt(basketItem.price) * parseInt(basketItem.quantity)}</div>
                        <div className='w-[15%] pl-4'>
                            <div className='flex items-center border py-1 text-lg'>
                                <button onClick={() => removeFromBasket(basketItem)} className='w-1/3 border-r-2  font-bold text-xl'>-</button>
                                <p className=' w-1/3 px-2 border-r-2 text-xl text-center'>{basketItem.quantity}</p>
                                <button onClick={() => addToBasket(basketItem, 1)} className='w-1/3 font-bold text-xl'>+</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className='flex items-center justify-between px-5 my-7 py-4 bg-white'>
                <button onClick={clearBasket} disabled={!basket.length} className=' flex items-center gap-2 rounded-sm hover:text-white hover:bg-pink-800 transition-all duration-500 px-4 py-2 border-2 text-pink-700 font-semibold border-pink-700'>
                    <AiFillDelete className='text-xl' />
                    <p>Clear Basket</p>
                </button>
                <div className='text-lg flex items-center gap-3'>
                    <p>Total ({basket.length}) items:</p>
                    <span className='text-3xl text-turuncu font-semibold'>${totalPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default Basket