import React from 'react'
import SectionTitle from './SectionTitle'
import { skills } from '../data'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <section className='py-20 align-element' id='skills'>
        <SectionTitle text='tech stack'/>
        <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>  
        {/* grid默认横向排列 */}
        {/* 这是将每个元素都编程网格，然后在中等/大型屏幕尺寸的的时候一共分成2/3列。每一列里面可能装多个网格。*/}
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
