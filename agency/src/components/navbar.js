import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClassName = `fixed w-full z-[999] mt-4 transition-all duration-300 ${scrolled ? 'bg-gradient-to-br from-[#FF5FF9] to-[#839BF1]' : 'bg-transparent'}`;


    return (
        <div id='navbar' className={navbarClassName}>
            <div className='flex mx-32 justify-between py-8'>
                <div></div>
                <ul className='text-white font-montserrat flex gap-12 font-semibold'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/influencer'>Influencer</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/tools'>Tools</Link></li>
                    <li><Link to='/testimoni'>Testimoni</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;