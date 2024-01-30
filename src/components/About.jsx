import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
import React from 'react';



const About = () => {
    return (
        <section className='bg-white py-20' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={aboutSvg} className='w-full h-64' />
                <article>
                    <SectionTitle text='About Me'/> 
                    {/* 子元素里有的属性父元素里也必须有。 */}
                    <p className='text-slate-600 mt-8 leading-loose'>
                    A current Master’s student in Computer Science with experience in developing industrial projects. Contributed to the
                    development of a large-scale shopping website using front-end and back-end technologies such as JavaScript, TypeScript,
                    HTML, CSS, React, MongoDB, and Node.js. Successfully built the client-side, database, and implemented an in-site
                    search function. Skilled at completing tasks excellently within a set timeframe, meticulous and responsible, with a strong
                    ambition and a desire for self-improvement.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default About;