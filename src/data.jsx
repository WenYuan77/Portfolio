import { nanoid } from 'nanoid';
import { FaReact } from 'react-icons/fa';
import nodeImg from './assets/NodeJS.svg';
import jsImg from './assets/JavaScript.svg';
import cityViewFinderImg01 from './assets/City-View-Finder-01.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];
// nanoid() 用来生成的唯一ID，很多时候作用同index相同。遍历的时候通过 item.nanoid可以调取该item的id。
// nanoid生成的id是恒定的。所以，如果数列中各项的顺序是动态的，应用nanoid，如果是静态的，两者皆可。

export const skills = [
  {
    id: nanoid(),
    title: 'Languages',
    icon: <img src = {jsImg} className="h-16 w-16" alt="JS Icon" />,
    text: 'Proficient in JavaScript, with experience in using JavaScript and TypeScript for real-time industrial projects. Also possesses experience in Python and fundamental knowledge of R.',
  },
  {
    id: nanoid(),
    title: 'Front-End',
    icon: <FaReact className='h-16 w-16 text-lime-600' />,
    text: 'Skilled in using React, Vite, HTML, CSS, Redux, and other related technologies to create front-end web applications, including Single Page Applications (SPA), login pages, and implementing filtering functionalities, etc.',
  },
  {
    id: nanoid(),
    title: 'Back-End',
    icon: <img src = {nodeImg} className="h-16 w-16 text-emerald-500" alt="JS Icon" />,
    text: 'Proficient in utilizing backend technologies, such as Node.js, Express, as well as various databases such as MongoDB and Redis, to build backend applications and facilitate frontend-backend interaction. Including constructing data models, authentication, CRUD (Create, Read, Update, Delete) functionalities, and more.',
  },
];

export const projects = [
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
