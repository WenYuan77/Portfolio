import React from 'react'

const SkillsCard = ({icon, title, text}) => {
  return (
      <article className='transition-transform hover:scale-105 duration-300'>
        <span className='block'>{icon}</span>
        <h4 className='mt-6 sm:mt-8 font-display text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight'>
          {title}
        </h4>
        <p className='mt-3 sm:mt-4 font-body text-sm sm:text-base text-slate-600 leading-relaxed'>
          {text}
        </p>
      </article>
  )
}

export default SkillsCard
