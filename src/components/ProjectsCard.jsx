import React from "react";
import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({url, img, github, title, text}) => {
    return (
        <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <a href={url} className="block cursor-pointer">
                <img src={img} alt={title} className="w-full object-cover rounded-t-lg h-48 sm:h-56 md:h-64 hover:opacity-90 transition-opacity duration-300"/>
            </a>
            <div className="p-6 sm:p-8 md:p-10">
                <div className="text-center my-[-0.4rem]">
                    <h2 className="font-display font-semibold text-lg sm:text-xl md:text-2xl bg-slate-100 rounded-lg inline-block py-2 px-4 text-slate-900">{title}</h2>
                </div>
                <p className="mt-4 sm:mt-5 md:mt-6 font-body text-sm sm:text-base text-slate-600 leading-relaxed">{text}</p>
                <div className="mt-5 sm:mt-6 md:mt-7 flex justify-center gap-6">
                    <a href={url} className="transition-transform hover:scale-110 duration-300" aria-label="View live demo">
                        <TbWorldWww className="h-7 w-7 sm:h-8 sm:w-8 text-slate-500 hover:text-slate-900 duration-300"/>
                    </a>
                    {github && (
                        <a href={github} className="transition-transform hover:scale-110 duration-300" aria-label="View source code">
                            <FaGithubSquare className="h-7 w-7 sm:h-8 sm:w-8 text-slate-500 hover:text-slate-900 duration-300"/>
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectsCard;