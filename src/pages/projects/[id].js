import { useRouter } from 'next/router';
import styles from '../../styles/ProjectDetail.module.css'; // Import the new CSS file

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  const projectDetails = {
    project1: {
      name: 'AI-GYM',
      description:
        'Developed a web application for real-time user position tracking and feedback of movements. Implemented computer vision techniques using OpenCV and Mediapipe for accurate pose detection in Flask. Built a responsive frontend with React.js and scalable backend with Node.js, including user authentication. Utilized machine learning for predicting calories burnt during exercise using a Kaggle dataset. Helps to track user workout data over a month in a MongoDB database.',
      technologies: ['React', 'Python', 'OpenCV, Mediapipe', 'Flask', 'Node.js', 'MongoDB'],
      link: 'https://github.com/Sukrit-Prakash/gym',
      image: '/ai-gym.png',
    },
    project2: {
      name: 'PDF Interact-Q',
      description:
        'Utilized LangChain and OpenAI API to generate relevant MCQs from uploaded PDF files. Implemented translational capabilities to convert PDF content into different languages, enhancing accessibility for diverse users. Interactive Querying: Enabled users to interact with the PDF content by asking questions, with responses powered by FAISS for efficient and accurate retrieval.',
      technologies: ['Python', 'Flask', 'LangChain', 'FAISS', 'OpenAI API'],
      link: 'https://github.com/yourusername/pdf-interact-q',
      image: '/reader.png',
    },
    project3: {
      name: 'File-ops AI',
      description:
        'Developed an advanced file management system that allows the creation and deletion of multiple files and folders. Also finds large files and folders. Tracks CPU usage and disk space to provide insights into system performance. Leverages OpenAI API to understand and process user intent and execute tasks.',
      technologies: ['Python', 'os module', 'Speech to text', 'psutils library', 'OpenAI API', 'Flask'],
      link: 'https://github.com/yourusername/file-ops-ai',
      image: '/file-ai.jpg',
    },
    project4: {
      name: 'E-Commerce Customization Platform',
      description:
        'Developed an e-commerce platform that allows users to upload customized images and preview them using an interactive canvas. Implemented Prisma with SQLite for efficient data handling and Next.js with TypeScript for a scalable frontend-backend architecture. The platform provides seamless image manipulation and order processing for custom products.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'SQLite', 'Canvas API'],
      link: 'https://github.com/Sukrit-Prakash/custom-ui-ecom',
      image: '/custom-ai.png',
    },
    project5: {
      name: 'YouTube Downloader',
      description:
        'Created a YouTube downloader web application in Flask, leveraging the YouTube-dl library for efficient video and audio downloads. Integrated the YouTube API for search functionality, allowing users to search for videos directly within the application. The tool supports multiple formats and resolutions for user convenience.',
      technologies: ['Python', 'Flask', 'YouTube-dl', 'YouTube API'],
      link: 'https://github.com/Sukrit-Prakash/ytclone',
      image: '/youtube-logo.webp',
    },
    project6: {
      name: 'Time Management App',
      description:
        'Designed a React Native application to help users manage time and boost productivity. Features include task creation, reminders, and tracking of daily, weekly, and yearly goals. Integrated MongoDB for secure data storage and analytics. Currently in development for release on the Google Play Store.',
      technologies: ['React Native', 'MongoDB', 'JavaScript', 'Expo'],
      link: 'https://github.com/Sukrit-Prakash/Productive-app',
      image: '/under-construction.jpg',
    },
    project7: {
      name: 'Museum Chatbot Public',
      description:
        'Developed a multilingual Museum Chatbot using **Node NLP** for natural language processing. The chatbot supports both English and Spanish, providing users with information about exhibits, timings, and general museum queries. Built with **React.js** for the front end and **MongoDB** for storing user interactions. The chatbot is designed to provide an interactive experience for museum visitors.',
      technologies: ['Node NLP', 'React.js', 'MongoDB', 'English/Spanish Corpus'],
      link: 'https://github.com/Sukrit-Prakash/Museum-chatbot',
      image: '/under-construction.jpg',
    },
    
    project8: {
      name: 'Hobby Subcouncil Website',
      description:
        'Created a responsive and user-friendly website for the Hobby Subcouncil, which was used by the college subcouncil. Built with **React.js**, **CSS**, and other frontend frameworks to ensure seamless navigation and aesthetic appeal. The site offers information about various hobby clubs, events, and resources for students.',
      technologies: ['React.js', 'CSS', 'HTML', 'Frontend Frameworks'],
      link: 'https://hsc-hbtu.site/',
      image: '/hsc.png',
    },
    
    project9: {
      name: 'Tic Tac Toe AI Bot',
      description:
        'Developed a Tic Tac Toe game with an AI bot using **Minimax** and **Heuristic Algorithms** to determine the best possible moves. The AI’s performance was evaluated and compared with other approaches. Built with pure **HTML**, **CSS**, and **JavaScript** to make the game interactive and visually appealing.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Minimax Algorithm', 'AI'],
      link: 'https://github.com/Sukrit-Prakash/Tic-Tac-Toe',
      image: '/tic-tac-toe.jpg',
    },
  };

  const project = projectDetails[id];

  if (!project) return <p>Loading...</p>;

  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectHeader}>
        <h1>{project.name}</h1>
      </div>
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        className={styles.projectImage}
      />
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.technologiesUsed}>
        <h3>Technologies Used:</h3>
        <ul className={styles.technologyList}>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className={styles.projectLink}>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}
