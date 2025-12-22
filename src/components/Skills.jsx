// eslint-disable-next-line no-unused-vars
import React from 'react'
import SectionTitle from './SectionTitle'
import { skills } from '../data'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <section className='py-12 sm:py-16 md:py-20 align-element' id='skills'>
        <SectionTitle text='Tech Stack'/>
        <div className='py-8 sm:py-12 md:py-16 grid gap-6 sm:gap-8 md:grid-cols-2'>  
        {/* grid默认横向排列 */}
        {/* 现在只有2个技能卡片：Data Analysis（重点）和 Web Development（Freelancing） */}
            {skills.map((skill) => {
                return <SkillsCard key={skill.id} {...skill}/>     
                // {...skill}意为复制该object（或array）的所有内容。
                // 相当于 <SkillsCard key={skill.id} id={skill.id} title={skill.title} icon={skill.icon} text={skill.text} />
            })}
        </div>
    </section>
    
  )
} 

export default Skills
