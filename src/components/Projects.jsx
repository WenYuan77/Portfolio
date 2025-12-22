import React from "react";
import ProjectsCard from './ProjectsCard';
import ComingSoonCard from './ComingSoonCard';
import { dataVizProjects, webDevProjects } from '../data';
import SectionTitle from './SectionTitle';
import { FaChartLine, FaCode } from 'react-icons/fa';

const Projects = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 align-element" id="projects">
            <SectionTitle text='Projects'/>
            
            {/* Data Visualization Section - 重点突出 */}
            <div className="py-8 sm:py-12 md:py-16">
                <div className="mb-8 sm:mb-10 md:mb-12">
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-lime-600 mb-3 flex items-center gap-3">
                        <FaChartLine className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                        <span className="project-title">Data Visualization</span>
                    </h3>
                    <div className="project-title-underline"></div>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                    {dataVizProjects.map((project) => {
                        return <ProjectsCard key={project.id} {...project}/>
                    })}
                    <ComingSoonCard icon="chart" />
                </div>
            </div>

            {/* Web Development Section */}
            <div className="py-8 sm:py-12 md:py-16">
                <div className="mb-8 sm:mb-10 md:mb-12">
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-lime-600 mb-3 flex items-center gap-3">
                        <FaCode className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                        <span className="project-title">Web Development</span>
                    </h3>
                    <div className="project-title-underline"></div>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                    {webDevProjects.map((project) => {
                        return <ProjectsCard key={project.id} {...project}/>
                    })}
                    <ComingSoonCard icon="code" />
                </div>
            </div>
        </section>
    );
}

export default Projects;