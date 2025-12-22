import React from "react";
import { FaChartLine, FaCode } from 'react-icons/fa';

const ComingSoonCard = ({ icon = 'chart', text }) => {
    // Default texts for different types
    const defaultTexts = {
        chart: (
            <>
                Exciting data visualization projects are in the works. 
                <br className="hidden sm:block" />
                Stay tuned for insights and interactive dashboards coming soon!
            </>
        ),
        code: (
            <>
                More web development projects are in the works. 
                <br className="hidden sm:block" />
                Stay tuned for innovative web applications and solutions coming soon!
            </>
        )
    };

    const displayText = text || defaultTexts[icon];
    const IconComponent = icon === 'code' ? FaCode : FaChartLine;

    return (
        <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-dashed border-lime-200 flex items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center text-center w-full p-6 sm:p-8 md:p-10">
                <div className="mb-5 sm:mb-6 flex items-center justify-center">
                    <IconComponent className='h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 text-lime-600' />
                </div>
                <h4 className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-slate-900 mb-3 sm:mb-4">
                    Coming Soon
                </h4>
                <p className="font-body text-sm sm:text-base md:text-lg text-slate-600 max-w-md leading-relaxed px-4">
                    {displayText}
                </p>
            </div>
        </article>
    );
};

export default ComingSoonCard;

