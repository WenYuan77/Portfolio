// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
        <div className='align-element items-center gap-8 pb-48 pt-3'>
        {/* md:grid-cols-2：意思是在一个网格布局中创建两列，每列占据容器宽度的一半。 */}
        {/* 同：grid-template-columns: repeat(2, 1fr) */}
        {/* 网格中的元素若需要居中需要另外对其父元素进行justify-items: center等设置。注意：网格并不生成新元素，只是确定布局。 */}
        {/* 设置了grid，则需要再设置flex了。 */}
        <article className="flex flex-col items-center justify-center pt-10">
            <h1 className='text-7xl  font-bold tracking-wider '>  
            {/* tracking-wider 即 letter spacing */}
              I'm Wen
            </h1>
            <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            {/* text-slate-700 在 Tailwind CSS 中用于将文本颜色设置为深灰蓝色。 */}
            {/* Tailwind CSS 通常使用从 100 到 900 的数字来表示颜色的深浅，数字越大，颜色越深。 */}
              Full Stack Developer
            </p>
            <p className='mt-2 text-lg text-slate-700 tracking-wide'>
              Turning ideas into interactive reality
            </p>
            <div className='flex gap-x-4 mt-4'>
              <a href="https://github.com/WenYuan77?tab=repositories">
                <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
              </a>
              <a href="https://www.linkedin.com/in/wenyuan77">
                <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
              </a>
              <a href="https://twitter.com/Wen_Yuan77"> 
                <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
              </a>
            </div>
          </article>
        </div>
  )
}

export default Hero