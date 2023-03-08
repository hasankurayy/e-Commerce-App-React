import React, { useEffect, useState } from 'react'

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from 'axios';
import Card from '../components/Card';
import Footer from '../components/Footer';

function Home() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        fade: true
    }

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    }

    const [allProducts, setAllProducts] = useState([])
    const [smartphones, setSmartphones] = useState([])
    const [laptops, setLaptops] = useState([])
    const [fragrances, setFragrances] = useState([])
    const [skincares, setSkincares] = useState([])
    const [groceries, setGroceries] = useState([])
    const [homeDecorations, setHomeDecorations] = useState([])
    const [furnitures, setFurnitures] = useState([])
    const [tops, setTops] = useState([])

    useEffect(() => {
        axios("https://dummyjson.com/products")
            .then(res => setAllProducts(res.data))

        axios("https://dummyjson.com/products/category/smartphones")
            .then(res => setSmartphones(res.data.products))

        axios("https://dummyjson.com/products/category/laptops")
            .then(res => setLaptops(res.data.products))

        axios("https://dummyjson.com/products/category/fragrances")
            .then(res => setFragrances(res.data.products))

        axios("https://dummyjson.com/products/category/skincare")
            .then(res => setSkincares(res.data.products))

        axios("https://dummyjson.com/products/category/groceries")
            .then(res => setGroceries(res.data.products))

        axios("https://dummyjson.com/products/category/home-decoration")
            .then(res => setHomeDecorations(res.data.products))

        axios("https://dummyjson.com/products/category/furniture")
            .then(res => setFurnitures(res.data.products))

        axios("https://dummyjson.com/products/category/tops")
            .then(res => setTops(res.data.products))

    }, [])


    return (
        <div className=''>
            <div className='flex justify-center bg-white px-5 pb-20 pt-10'>
                <Slider {...settings} className="!w-[600px] shadow-2xl shadow-turuncu" >
                    <img className='w-full !h-[400px] object-cover' src="https://img.freepik.com/free-photo/girl-holds-fashion-shopping-bag-beauty_1150-13673.jpg" alt="resim 1" />
                    <img className='w-full !h-[400px] object-cover' src="https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?s=170667a&w=0&k=20&c=CNxEgO_okU6Rl5R0SmPez4uPwRJ-v_5Q0fdjWPzpmWA=" alt=" resim 2" />
                    <img className='w-full !h-[400px] object-cover' src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej-1280x720.png" alt="" />
                </Slider>
            </div>

            <div className='mx-10 my-10'>
                <div className='px-8 py-4 text-gray-400 font-bold text-xl bg-white border-l-8 border-turuncu rounded-md mb-10'>
                    <p>SEE OUR PRODUCTS</p>
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3'>
                    {allProducts.products && allProducts.products.map((product) => (
                        <Card product={product} />
                    ))}
                </div>



                <div id='smartphones' className='mt-8 px-8 py-4 text-gray-400 font-bold text-xl bg-white border-l-8 border-turuncu rounded-md mb-10'>
                    <p>SMARTPHONES</p>
                </div>

                <Slider {...settings2} className="shadow-lg pb-3 shadow-turuncu">
                    {smartphones && smartphones.map((smartphone) => (
                        <div className="px-3">
                            <Card product={smartphone} />
                        </div>
                    ))}
                </Slider>

                <div id='laptops' className='mt-20 px-8 py-4 text-gray-400 font-bold text-xl bg-white border-l-8 border-turuncu rounded-md mb-10'>
                    <p>LAPTOPS</p>
                </div>

                <Slider {...settings2} className="shadow-lg pb-3 shadow-turuncu">
                    {laptops && laptops.map((laptop) => (
                        <div className="px-3">
                            <Card product={laptop} />
                        </div>
                    ))}
                </Slider>

                <div id='fragrances' className='mt-20 px-8 py-4 text-gray-400 font-bold text-xl bg-white border-l-8 border-turuncu rounded-md mb-10'>
                    <p>FRAGRANCES</p>
                </div>

                <Slider {...settings2} className="shadow-lg pb-3 shadow-turuncu">
                    {fragrances && fragrances.map((fragrance) => (
                        <div className="px-3">
                            <Card product={fragrance} />
                        </div>
                    ))}
                </Slider>

                <div id='skincares' className='mt-20 px-8 py-4 text-gray-400 font-bold text-xl bg-white border-l-8 border-turuncu rounded-md mb-10'>
                    <p>SKINCARES</p>
                </div>

                <Slider {...settings2} className="shadow-lg pb-3 shadow-turuncu">
                    {skincares && skincares.map((skincare) => (
                        <div className="px-3">
                            <Card product={skincare} />
                        </div>
                    ))}
                </Slider>

                <div id='groceries' className='mt-20 px-8 py-4 text-gray-400 font-bold text-xl bg-white border-l-8 border-turuncu rounded-md mb-10'>
                    <p>GROCERIES</p>
                </div>

                <Slider {...settings2} className="shadow-lg pb-3 shadow-turuncu">
                    {groceries && groceries.map((grocerie) => (
                        <div className="px-3">
                            <Card product={grocerie} />
                        </div>
                    ))}
                </Slider>

                <div id='home-decorations' className='mt-20 px-8 py-4 text-gray-400 font-bold text-xl bg-white border-l-8 border-turuncu rounded-md mb-10'>
                    <p>HOME DECORATIONS</p>
                </div>

                <Slider {...settings2} className="shadow-lg pb-3 shadow-turuncu">
                    {homeDecorations && homeDecorations.map((homeDecoration) => (
                        <div className="px-3">
                            <Card product={homeDecoration} />
                        </div>
                    ))}
                </Slider>

                <div id='furnitures' className='mt-20 px-8 py-4 text-gray-400 font-bold text-xl bg-white border-l-8 border-turuncu rounded-md mb-10'>
                    <p>FURNITURES</p>
                </div>

                <Slider {...settings2} className="shadow-lg pb-3 shadow-turuncu">
                    {furnitures && furnitures.map((furniture) => (
                        <div className="px-3">
                            <Card product={furniture} />
                        </div>
                    ))}
                </Slider>

                <div className='mt-20 px-8 py-4 text-gray-400 font-bold text-xl bg-white border-l-8 border-turuncu rounded-md mb-10'>
                    <p>TOPS</p>
                </div>

                <Slider {...settings2} className="shadow-lg pb-3 shadow-turuncu">
                    {tops && tops.map((top) => (
                        <div className="px-3">
                            <Card product={top} />
                        </div>
                    ))}
                </Slider>

            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Home