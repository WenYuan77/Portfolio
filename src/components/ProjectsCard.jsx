import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({url, img, github, title, text}) => {
    return (
        <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
            {/* shadow-md表示中等强度的阴影。 rounded就是 border radius。*/}
            <img src={img} alt={title} className="w-full object-cover rounded-t-lg h-64"/>
            {/* object-cover即object-fit:cover，表示根据容器大小等比缩放或增大。 */}
            <div className="p-8">
                <div className="text-center my-[-0.4rem]">
                    <h2 className="font-bold  bg-slate-100 rounded-lg inline-block py-1.5 px-3 ">{title}</h2>
                </div>
                <p className="mt-4 text-slate-700 leading-loose">{text}</p>
                <div className="mt-4 grid grid-cols-4 place-items-center">
                    <div></div>   {/* Empty elements to occupy grid spaces for layout adjustment */}
                    <a href={url}>
                        <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300"/>
                    </a>
                    <a href={github}>
                        <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"/>
                    </a>
                    <div></div>  {/* Empty elements to occupy grid spaces for layout adjustment */}
                </div>
            </div>
        </article>
    );
}

export default ProjectsCard;