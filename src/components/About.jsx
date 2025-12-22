import personalPicture from '../assets/personal-picture.jpg';
import SectionTitle from './SectionTitle';
import React from 'react';

const About = () => {
    return (
        <section className='bg-white py-12 sm:py-16 md:py-20' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-8 sm:gap-12 md:gap-16'>
                <div className='w-full flex justify-center md:justify-start relative'>
                    {/* Decorative background element */}
                    <div className='absolute -z-10 w-full max-w-[25rem] h-full bg-gradient-to-br from-lime-50 to-emerald-50 rounded-[3rem] transform rotate-3 sm:rotate-2'></div>
                    {/* Image container with enhanced styling */}
                    <div className='relative w-full max-w-[25rem]'>
                        <div className='absolute inset-0 bg-gradient-to-br from-lime-100/50 to-emerald-100/50 rounded-[3rem] blur-sm'></div>
                        <img 
                            src={personalPicture} 
                            className='relative w-full aspect-[4/5] rounded-[3rem] shadow-2xl object-cover' 
                            alt="Wen - Data Analyst & Web Developer" 
                        />
                    </div>
                </div>
                <article>
                    <SectionTitle text='About Me'/> 
                    <p className='font-body text-slate-600 mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-relaxed'>
                    Hi, my name is Wen! I'm currently pursuing a Master's degree in Computer Science, with a strong focus on data analysis. I love transforming complex datasets into actionable business insights that help organizations make better decisions.
                    <br /><br />
                    My toolkit includes Python (pandas, NumPy, Scikit-learn), R, SQL, and data visualization tools like Tableau, Matplotlib, and Seaborn. I'm experienced in statistical analysis, data cleaning, exploratory data analysis, and creating comprehensive reports that drive strategic decision-making.
                    <br /><br />
                    I also have experience in web development, which complements my data analysis skills perfectly. It allows me to build interactive dashboards and data-driven web applications, work with APIs, integrate data sources, and create user-friendly interfaces for presenting analytical findings.
                    <br /><br />
                    I'm someone who takes pride in delivering high-quality work within set timeframes. I'm meticulous, responsible, and always eager to learn and grow. I'm currently seeking a full-time Data Analyst position where I can leverage my analytical expertise and technical skills to contribute to data-driven business solutions.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default About;