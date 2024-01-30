import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

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
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in JavaScript, with experience in using JavaScript and TypeScript for real-time industrial projects. Also possesses experience in Python and fundamental knowledge of R.',
  },
  {
    id: nanoid(),
    title: 'Front-End',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Skilled in using React, Vite, HTML, CSS, Redux, and other related technologies to create front-end web applications, including Single Page Applications (SPA), login pages, and implementing filtering functionalities, etc.',
  },
  {
    id: nanoid(),
    title: 'Back-End',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in utilizing backend technologies, such as Node.js, Express, as well as various databases such as MongoDB and Redis, to build backend applications and facilitate frontend-backend interaction. Including constructing data models, authentication, CRUD (Create, Read, Update, Delete) functionalities, and more.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
