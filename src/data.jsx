import { nanoid } from 'nanoid';
import { FaChartLine, FaCode } from 'react-icons/fa';
import cityViewFinderImg01 from './assets/City-View-Finder-01.png'
import churnAnalysisImg from './assets/churn_analysis.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#contact', text: 'contact' },
];
// nanoid() 用来生成的唯一ID，很多时候作用同index相同。遍历的时候通过 item.nanoid可以调取该item的id。
// nanoid生成的id是恒定的。所以，如果数列中各项的顺序是动态的，应用nanoid，如果是静态的，两者皆可。

export const skills = [
  {
    id: nanoid(),
    title: 'Data Analysis',
    icon: <FaChartLine className='h-16 w-16 text-lime-600' />,
    text: 'Specialized in extracting insights from complex datasets using Python (pandas, NumPy, Scikit-learn), R, and SQL. Experienced in data visualization with Tableau, Power BI, Matplotlib, and Seaborn. Proficient in Excel for data analysis and reporting. Skilled in machine learning and AI techniques for predictive modeling and advanced analytics. Experienced in statistical analysis, data cleaning, and creating actionable reports for business decision-making.',
  },
  {
    id: nanoid(),
    title: 'Web Development',
    icon: <FaCode className='h-16 w-16 text-lime-600' />,
    text: 'Freelancing experience in full-stack web development. Skilled in front-end technologies (React, Vite, HTML, CSS, Redux) and back-end technologies (Node.js, Express, MongoDB, Redis) to build interactive web applications. This experience complements my data analysis skills by enabling me to create interactive dashboards and data-driven applications.',
  },
];

// Data Visualization Projects
export const dataVizProjects = [
  {
    id: nanoid(),
    img: churnAnalysisImg,
    url: 'https://public.tableau.com/views/ChurnAnalysis_17661084130590/Story1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    title: 'Churn Analysis',
    text: 
      <>
        <strong>Summary:</strong> A comprehensive customer churn analysis dashboard created using Tableau, analyzing customer retention patterns across multiple dimensions including tenure, city tier, and marital status.
        <br />
        <strong>Key Insights:</strong> Customers with 0-5 months tenure have the highest churn rate (35.03%). Single customers show higher churn rates (26.73%) than married customers.
      </>
  },
];

// Web Development Projects
export const webDevProjects = [
  {
    id: nanoid(),
    img: cityViewFinderImg01,
    url: 'https://city-view-finder.netlify.app/',
    github: 'https://github.com/WenYuan77/City-View-Finder',
    title: 'City View Finder',
    text: 
      <>
        <strong>Summary:</strong> A web application created using JavaScript, HTML, and CSS, combined with an API, which allows users to see photos of a city by entering the city's name.
        <br />
        <strong>How to use:</strong> Enter the name of a city in the search box and press Enter, and you will then see ten photos of that city.
      </>
  },
];
