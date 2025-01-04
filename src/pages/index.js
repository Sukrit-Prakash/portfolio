/* eslint-disable react/no-unescaped-entities */

import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
// import { TbMessageChatbot } from "react-icons/tb";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiLangchain } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import { SiOpenai } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
// import { FaWhatsappSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import {toggleChatbot} from '../components/Chatbot';
import Chatbot from '@/components/Chatbot';
export default function Home() {
  const projects = [
    { id: 'project1', name: 'AI-GYM', description: 'Tool for AI assisted gym tracking' },
    { id: 'project2', name: 'PDF Interact-Q', description: 'An educational tool to generate mcq ,translate and manage your pdf' },
    { id: 'project3', name: 'File- ops AI', description: 'Advance file management system that allows creation, deletion of multiple files and folders' },
    { id: 'project4', name: 'E-Commerce Customization Platform', description: 'Platform for customized image uploads and previews' },
    { id: 'project5', name: 'YouTube Downloader', description: 'Web app for downloading YouTube videos with search functionality' },
    { id: 'project6', name: 'Time Management App', description: 'React Native app for time management and productivity' },
    { id: 'project7', name: 'Museum Chatbot Public', description: 'Multilingual chatbot for museum information using Node NLP, React.js, and MongoDB' },
    { id: 'project8', name: 'Hobby Subcouncil Website', description: 'Responsive website for the Hobby Subcouncil built with React.js, CSS, and frontend frameworks' },
    { id: 'project9', name: 'Tic Tac Toe AI Bot', description: 'AI bot for Tic Tac Toe game using Minimax and Heuristic algorithms' }
  ];
  const blogs = [
    { id: 'blog1', title: 'How Developers Level Up: A Journey Through Tic Tac Toe', link: 'https://medium.com/@SukritPrakash_x/how-developers-level-up-a-journey-through-tic-tac-toe-fb01fc86423d' },
    { id: 'blog2', title: 'Generative Agents-Interactive Simulacra of Human Behavior', link: 'https://medium.com/@SukritPrakash_x/generative-agents-interactive-simulacra-of-human-behavior-0cd8746a5c84' },
  ];
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </nav>

      <section id="hero" className={styles.hero}>
      <Image src="/profile.jpg" alt="Profile Photo" width={150} height={150} className={styles.profilePhoto} />
        <h1>Hello, I am <span className={styles.highlight}>Sukrit Prakash Singh</span></h1>
        <h2>Software Developer</h2>
        <p>
          I'm a passionate and skilled developer with experience in full-stack development and artificial Intelligence.
        </p>
        <button onClick={toggleChatbot} className={styles.button}>Work with me</button>
      </section>

      <section id="about" className={styles.about}>
        <h2>About Me</h2>
        <p>----</p>
        <p>Hello, I'm a MERN stack developer,currently pursuing BTech in Computer Science in my prefinal year of HBTU,Kanpur</p>
        <p>Currently I am working as an intern in a E-Com startup MaddyCustom</p>
      </section>

      <section id="projects" className={styles.projects}>
        <h2>Projects</h2>
        <p>            
          -------------------
        </p>
       
        <div className={styles.projectCards}>
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id} passHref>
              <div className={styles.card}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* </section> */}
      {/* Languages: Python, MongoDB, JavaScript, HTML/CSS, C,Java,Sql 
Frameworks: React,Langchain, Node.js, Flask, RESTful API,Express.js,Redux 
Developer Tools: Git/Github, Docker, Open AI-API, VS Code 
Libraries: TensorFlow, Keras,OpenCV, scikit-learn, Seaborn, pandas, NumPy, Matplotlib, PyTorch,Python-OS-Module 
Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Operating Systems,Machine learning  */}
      <section id="skills" className={styles.skills}>
        <h2>Skills</h2>
<p>.</p>
        <div className={styles.skillLogos}>

          <h1><IoLogoJavascript /></h1>
          <h2><IoLogoCss3 /></h2>
          <h2><FaReact /></h2>
          <h2><SiMongodb /></h2>
          <h2><FaHtml5 /></h2>
          <h2><FaPython /></h2>
          <h2><SiFlask /></h2>
          <h2><AiOutlineConsoleSql /></h2>
          <h2><FaDocker /></h2>
          <h2><FaGithub /></h2>
          <h2><SiJupyter /></h2>
          <h2><DiNodejs /></h2>
          <h2><SiExpress /></h2>
          <h2><FaJava /></h2>
          <h2><SiLangchain /></h2>
          <h2><SiTensorflow /></h2>
          <h2><SiOpencv /></h2>
          <h2><IoLogoElectron /></h2>
          <h2><SiOpenai /></h2>
          <h2><SiKubernetes /></h2>
          <h2><SiLeetcode /></h2>
             

          {/* Add more skill logos */}
        </div>
      </section>
      <section id="blogs" className={styles.blogs}>
        <h2>My Blogs</h2>
        <h7> -------------------</h7>
        <ul className={styles.blogList}>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                {blog.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section id="contact" className={styles.contact}>
        <h2>Get in touch with me</h2>
        {/* <p>Get in touch with me</p> */}
        <p>-------------------------------------------</p>
        <p>Reach me at sukritprakash2020@gmail.com or find me on anything below.</p>

        <div className={styles.socials}>
          {/* Social media icons */}
          <a href="https://x.com/SukritPrakash_x" target="_blank" rel="noopener noreferrer"><h1><FaSquareXTwitter /></h1></a>
          <a href="https://github.com/sukrit-prakash" target="_blank" rel="noopener noreferrer"><h1><FaGithub /></h1></a>
          <a href="https://www.linkedin.com/in/sukrit-prakash-singh-9a501b273/" target="_blank" rel="noopener noreferrer"><h1><IoLogoLinkedin /></h1></a>
          <a href="mailto:sukritprakash2020@gmail.com"><h1><MdAttachEmail /></h1></a>
          <a href="https://discord.com/users/750351911115451422" target="_blank" rel="noopener noreferrer"><h1><FaDiscord /></h1></a>
        </div>
      </section>
      <div><Chatbot /></div>
    </div>
  );
}
