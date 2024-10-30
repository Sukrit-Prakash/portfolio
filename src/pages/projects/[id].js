import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Sample project data
  const projectDetails = {
    project1: { name: 'AI-GYM', description: ' Developed a web application for real time user position tracking and feedback of movements Implemented computer vision techniques using OPENCV and Mediapipe for accurate pose detection in Flask   Built a responsive frontend with React.js and scalable Backend through Node.js including user authentication Utilized machine learning for predicting Calories Burnt during Exercise using Kaggle Dataset Helps to track user workout data over a month in MongoDB database', technologies: ['React', 'Python', 'OpenCV,Mediapipe', 'Flask', 'Node.js', 'MongoDB' ] },
    project2: { name: 'PDF Interact-Q', description: ' Utilized Langchain and OpenAI API to generate relevant MCQs from uploaded PDF files  Implemented translational capabilities to convert pdf-content into different languages,enhancing accessibility for diverse users Interactive Querying :Enabled users to interact with the PDF content by asking questions , with responses powered by FAISS for efficient and accurate retrieval ', technologies: [ 'Python',' Flask',  'LangChain', 'FAISS', 'OpenAI API' ] },
    project3: { name: 'File- ops AI', description: ' Developed an advance file management system that allows creation, deletion of multiple files and folders ,also finds large files and folders  Tracks CPU usage and disk space to provide insights into system performance Leverages OpenAI API to understand and process user intent and execute tasks ', technologies: ['Python',   'Python ‘os - module’', 'Speech to text' , 'psutils library', 'OpenAI API','Flask' ] },
  };

  const project = projectDetails[id];

  if (!project) return <p>Loading...</p>;

  return (
    <div className={styles.projectDetail}>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <h3>Technologies Used:</h3>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
