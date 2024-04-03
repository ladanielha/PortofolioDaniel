import { FaBriefcase, FaGraduationCap, FaBuilding } from 'react-icons/fa';

const timelineItems = [
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2024 Feb - Now </span>,
    position: 'left',
    icon: <FaGraduationCap />,
    title: 'Bootcamp Juara Coding MERN Batch 20',
    subTitle: 'Freelandce Developer',
    description: 'React JS, NodeJS, React Native, ExpressJS, MongoDB,',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2023 - Now </span>,
    position: 'right',
    icon: <FaBriefcase />,
    title: 'Freelance Web Mobile Deeveloper',
    subTitle: 'Freelandce Developer',
    description: 'React JS, Inertia JS, Tailwinds, Laravel , MySQL,',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'>2020 Jul - 2020 Desc</span>,
    position: 'left',
    icon: <FaBuilding />,
    title: 'PT Aneka Sarivita',
    subTitle: 'Website Developer Intern',
    description: 'HTML, CSS , JavaScript, Tailwind CSS, CodeIgniter, Laravel, MySQL',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2017 - 2023 </span>,
    position: 'right',
    icon: <FaGraduationCap />,
    title: 'Multimedia Nusantara University',
    subTitle: 'Bachelor, Computer Science ',
    description: 'Total GPA : 3,18',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2014 - 2017 </span>,
    position: 'left',
    icon: <FaGraduationCap />,
    title: 'Nusputera Senior HighScoll',
    subTitle: 'Science',
  },
];

export default timelineItems