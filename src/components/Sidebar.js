import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Context from '../Context'

function Sidebar() {

    const [menuNames, setMenuNames] = useState([])
    const { showMenu, setShowMenu } = useContext(Context)

    useEffect(() => {
        axios("https://dummyjson.com/products/categories")
            .then(res => setMenuNames(res.data))
    }, [])

    return (
        <div className={showMenu ? "showSidebar" : "hideSidebar"}>
            <div className='flex justify-between'>
                <div className='text-xl font-bold pb-5'>ALL CATEGORIES</div>
                <div onClick={() => setShowMenu(false)} className='font-bold text-xl transition-all duration-500 cursor-pointer hover:text-turuncu'>X</div>
            </div>
            {menuNames && menuNames.map((menuName, key) => (
                <Link key={key} to={`/category/${menuName}`}>
                    <div onClick={() => setShowMenu(false)} className='text-sm capitalize py-3 border-b transition-all duration-500 hover:translate-x-3 hover:text-turuncu '>{menuName}</div>
                </Link>
            ))}
        </div>
    )
}

export default Sidebar