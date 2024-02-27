import React from 'react';
import headerImage from '../assets/images/header.png'
import { Link } from 'react-router-dom';


import Navbar from '../components/navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <div id="home" className="h-screen bg-cover relative" style={{ backgroundImage: `url(${headerImage})` }}>
                <div className='bg-gradient-to-tr from-[#CD5AE0aa] via-[#A478C788] to-[#446DD4bb] h-full flex justify-center items-center'>
                    <div className="mx-80 text-white">
                        <h1 className="text-center text-5xl font-bold font-poppins mb-8">Platform Influencer <br /> Marketing di Indonesia</h1>
                        <p className="text-lg text-center font-montserrat">Selamat datang di Youth Media Agency, pusat inspirasi dan informasi yang bertekad untuk memberdayakan generasi muda! Kami adalah agen media yang berkomitmen untuk menciptakan pengalaman pemasaran yang menyegarkan dan bermakna bagi pemuda di seluruh dunia.</p>

                        <div className='text-white font-semibold font-montserrat flex gap-12 absolute bottom-44 left-1/2 transform -translate-x-1/2'>
                            <Link to='/' className=' px-16 py-2 rounded-full bg-gradient-to-r from-[#AE4AC7] to-[#62BBD7]'>Brand</Link>
                            <Link to='/' className='border border-white px-12 py-2 rounded-full'>Influencer</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id='cta' className='bg-gradient-to-br from-[#B5BAE8] to-[#CF6FD1] absolute'>
                <div className='h h-48 w-80'></div>
            </div>
        </>
    );
};

export default Home;
