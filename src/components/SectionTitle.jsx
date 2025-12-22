import React from 'react'


const SectionTitle = ({text}) => {
  return (
    <div className='border-b border-gray-200 pb-4 sm:pb-5'>
        <h2 className='font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900'>{text}</h2>
    </div>
    
  )
}

export default SectionTitle