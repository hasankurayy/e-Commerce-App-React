import React from 'react'

// icons
import { BsPhone, BsLaptop } from "react-icons/bs"
import { GiDelicatePerfume } from "react-icons/gi"
import { MdChildCare, MdFastfood } from "react-icons/md"
import { GoHome } from "react-icons/go"
import { TbArmchair } from "react-icons/tb"

import { Link } from 'react-scroll'

function Footer() {
    return (
        <div className='flex text-3xl gap-6 border-2 px-4 py-2 fixed bottom-4 left-1/2 -translate-x-1/2 bg-turuncu rounded-lg text-white'>
            <Link smooth  activeClass='active' to='smartphones' className='cursor-pointer hover:-translate-y-0.5 hover:text-black transition-all duration-300'>
                <BsPhone />
            </Link>

            <Link smooth  to='laptops' className='cursor-pointer hover:-translate-y-0.5 hover:text-black transition-all duration-300'>
                <BsLaptop />
            </Link>

            <Link smooth to='fragrances' className='cursor-pointer hover:-translate-y-0.5 hover:text-black transition-all duration-300'>
                <GiDelicatePerfume />
            </Link>

            <Link smooth to='skincares' className='cursor-pointer hover:-translate-y-0.5 hover:text-black transition-all duration-300'>
                <MdChildCare />
            </Link>

            <Link smooth to='groceries' className='cursor-pointer hover:-translate-y-0.5 hover:text-black transition-all duration-300'>
                <MdFastfood />
            </Link>

            <Link smooth to='home-decorations' className='cursor-pointer hover:-translate-y-0.5 hover:text-black transition-all duration-300'>
                <GoHome />
            </Link>

            <Link smooth to='furnitures' className='cursor-pointer hover:-translate-y-0.5 hover:text-black transition-all duration-300'>
                <TbArmchair />
            </Link>

        </div>
    )
}

export default Footer