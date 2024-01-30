import React from 'react'
import heroImg from '../assets/Hero-img.png';
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
              <a href="https://github.com/WenYuan77/Personal-Projects">
                <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
              </a>
              <a href="https://www.linkedin.com/in/wenyuan77">
                <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
              </a>
              <a href="https://twitter.com/Wen_Yuan77"> 
                <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
              </a>
              <a href="https://wenyuan77.github.io/"> 
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-slate-500 hover:text-black duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path><path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path><path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path><path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path><path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path><path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path><path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path><path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path><path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path></svg>
              </a>
            </div>
          </article>
        </div>
  )
}

export default Hero