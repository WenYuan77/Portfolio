// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaGithubSquare, FaLinkedin, FaChartLine, FaCode } from 'react-icons/fa';

const Hero = () => {
  return (
        <div className='align-element flex items-center justify-center gap-8 pb-24 sm:pb-32 md:pb-40 lg:pb-48 pt-3 min-h-[calc(100vh-80px)] relative z-10'>
        {/* md:grid-cols-2：意思是在一个网格布局中创建两列，每列占据容器宽度的一半。 */}
        {/* 同：grid-template-columns: repeat(2, 1fr) */}
        {/* 网格中的元素若需要居中需要另外对其父元素进行justify-items: center等设置。注意：网格并不生成新元素，只是确定布局。 */}
        {/* 设置了grid，则需要再设置flex了。 */}
        <article className="flex flex-col items-center justify-center pt-6 sm:pt-10 md:pt-16 w-full">
            <h1 className='font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-display-xl font-bold tracking-wider text-slate-900 hero-main-title'>  
              I'm Wen
            </h1>
            <p className='mt-5 sm:mt-7 md:mt-8 font-body text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-center flex flex-wrap items-baseline justify-center gap-2 sm:gap-2'>
              <span className='hero-data-analyst inline-flex items-center gap-2'>
                <FaChartLine className='h-5 w-5 sm:h-6 sm:w-6' />
                <span>Data Analyst</span>
              </span>
              <span className='hero-ampersand font-display text-lg sm:text-xl md:text-2xl text-slate-500 mx-1 sm:mx-2'> & </span>
              <span className='hero-web-dev inline-flex items-center gap-2'>
                <FaCode className='h-5 w-5 sm:h-6 sm:w-6' />
                <span>Web Developer</span>
              </span>
            </p>
            <p className='mt-4 sm:mt-5 md:mt-6 font-body text-base sm:text-lg md:text-xl font-light text-slate-800 tracking-wide max-w-xl text-center px-4 hero-tagline'>
              Transforming data into insights & web solutions
            </p>
            <div className='flex gap-x-5 sm:gap-x-7 md:gap-x-8 mt-6 sm:mt-8'>
              <a href="https://www.linkedin.com/in/wenyuan77" className="transition-transform hover:scale-110 duration-300">
                <FaLinkedin className='h-7 w-7 sm:h-8 sm:w-8 text-slate-500 hover:text-slate-900 duration-300'/>
              </a>
              <a href="https://github.com/WenYuan77?tab=repositories" className="transition-transform hover:scale-110 duration-300">
                <FaGithubSquare className='h-7 w-7 sm:h-8 sm:w-8 text-slate-500 hover:text-slate-900 duration-300'/>
              </a>
            </div>
          </article>
        </div>
  )
}

export default Hero