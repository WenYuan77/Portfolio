import {links} from '../data.jsx'
import React from 'react';

const Navbar = () => {
  return (
    <nav className="relative z-10">
        <div className='align-element py-4 sm:py-6 md:py-8 flex flex-col 
        sm:flex-row sm:justify-between sm:items-center'>
            <h2 className='font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-2 sm:gap-3'>
                <span className='text-lime-600'>Data Analyst</span>
                <span className='text-slate-900'>&</span>
                <span className='text-slate-900'>Web Developer</span>
            </h2>
            <div className='flex gap-x-8 sm:gap-x-9 md:gap-x-10 lg:gap-x-12 mt-3 sm:mt-0 items-center'>{links.map((link) => {
                const {id, href, text} = link
                return <a href= {href} key = {id} 
                className='font-body capitalize text-sm sm:text-base md:text-lg tracking-wide
                 hover:text-emerald-600 duration-300 transition-colors'>
                    {text}
                </a>
            })}</div>
        </div>
    </nav>
    
  )
}

export default Navbar