import React, { useContext, useState } from 'react'
// icons
import { GrGithub, GrLinkedin } from "react-icons/gr"
import { BsDownload } from "react-icons/bs"
import { BiMenu } from "react-icons/bi"
import { FaShoppingBag } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"

import { Link } from 'react-router-dom'
import Context from '../Context'
import Sidebar from './Sidebar'


function Header() {

    const { search, setSearch, showMenu, setShowMenu, basket } = useContext(Context)

    const [jump, setJump] = useState(false)
    setTimeout(() => {
        setJump(!jump)
    }, 500);

    return (
        <div className='bg-turuncu text-white px-4'>
            <div className='flex justify-between text-sm border-b border-gray-400'>
                <div className='flex'>
                    <div className='border-r border-gray-400 my-2 px-3 mr-3 cursor-pointer'>Seller Center</div>
                    <div className='flex items-center border-r border-gray-400 my-2 px-3 mr-3 gap-2'>
                        <p className='cursor-pointer'>Download</p>
                        <div className='cursor-pointer'><BsDownload /></div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='cursor-pointer'>Follow me on</p>
                        <a className={`text-2xl  transition-all duration-300 ${!jump && "-translate-y-1"}`} href='https://github.com/hasankurayy' target="_blank">
                            <GrGithub />
                        </a>
                        <a className={`text-2xl  transition-all duration-300 ${jump && "-translate-y-1"}`} href="https://www.linkedin.com/in/hasan-kuray-2318ab266/" target="_blank">
                            <GrLinkedin />
                        </a>
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='border-r border-gray-400 my-2 px-3 mr-3 cursor-pointer'>Support</div>
                    <div className='border-r border-gray-400 my-2 px-3 mr-3 cursor-pointer'>Register</div>
                    <div className='cursor-pointer'>Log in</div>
                </div>
            </div>

            <div className='flex justify-between pt-5 pb-3'>
                <div className='flex items-center gap-3 text-3xl'>
                    <div onClick={() => setShowMenu(!showMenu)} className='cursor-pointer'><BiMenu /></div>
                    <Link to="/">
                        <div><FaShoppingBag /></div>
                    </Link>
                    <Link to={"/"}>
                        <div><span className='font-bold'>Snap</span>Up.</div>
                    </Link>
                </div>

                <div className='w-2/3'>
                    <div className='flex items-center relative mb-2'>
                        <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='Search your preffered items here' className='w-full py-2 px-2 text-black rounded-md shadow-lg' />
                        <div className='absolute bg-turuncu right-1 rounded-md p-1'>
                            <Link to={`/search/${search}`}>
                                <AiOutlineSearch />
                            </Link>
                        </div>
                    </div>
                    <div className='flex text-sm gap-3'>
                        <Link to="/category/smartphones">Smartphones</Link>
                        <Link to="/category/laptops">Laptops</Link>
                        <Link to="/category/fragrances">Fragrances</Link>
                        <Link to="/category/skincare">Skincare</Link>
                        <Link to="/category/groceries">Groceries</Link>
                        <Link to="/category/home-decoration">Home Decoration</Link>
                        <Link to="/category/furniture">Furniture</Link>
                        <Link to="/category/tops">Tops</Link>
                    </div>
                </div>

                <div className='flex relative items-center pr-6'>
                    <Link to={"/basket"}>
                        <div className=' text-3xl'><FiShoppingCart /></div>
                        <div className='absolute top-1 right-4 text-lg bg-white text-turuncu rounded-lg px-1 font-semibold'>{basket.length}</div>
                    </Link>

                </div>
            </div>

            <Sidebar />

        </div>
    )
}

export default Header