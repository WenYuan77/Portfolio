// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import FallingLeaves from './components/FallingLeaves'
import bgImg from './assets/bgImg-pavilion.jpg';

const App = () => {
  const [backgroundSize, setBackgroundSize] = useState('cover');

  useEffect(() => {
    const updateBackgroundSize = () => {
      const width = window.innerWidth;
      
      // 使用百分比让背景图片真正响应式缩放
      // 移动端使用更大的百分比，让图片明显缩小
      if (width <= 640) {
        setBackgroundSize('150% 150%');
      } else if (width <= 768) {
        setBackgroundSize('130% 130%');
      } else if (width <= 1024) {
        setBackgroundSize('120% 120%');
      } else {
        setBackgroundSize('100% 100%');
      }
    };

    // 立即执行一次
    updateBackgroundSize();
    
    // 监听窗口大小变化
    window.addEventListener('resize', updateBackgroundSize);
    
    return () => {
      window.removeEventListener('resize', updateBackgroundSize);
    };
  }, []);

  return (<>
    <div 
      className="w-full h-screen min-h-screen relative"
      style={{ 
        backgroundImage: `url(${bgImg})`,
        backgroundSize: backgroundSize,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}>
      <FallingLeaves />
      <Navbar/>
      <Hero/>
    </div>
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
  </>
 
  )
}

export default App