import { useState } from 'react';
import axios from 'axios';
import { TbMessageChatbot } from 'react-icons/tb';
import styles from '../styles/Chatbot.module.css';
import { useRef,useEffect } from 'react';
export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isopen, setisopen] = useState(false)
  const toggleChatbot = () => setisopen(!isopen);
  const chatbotRef = useRef(null);
  const sendMessage = async () => {
    if (!input) return;


    setMessages([...messages, { sender: 'user', text: input }]);

  
    const res = await axios.post('/api/chatbot', { query: input });
    const botMessage = res.data.response;

    
    setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botMessage }]);
    setInput('');
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setisopen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
    <div className={styles.chatIcon} onClick={toggleChatbot}>
      <TbMessageChatbot size={30} />
    </div>
    {isopen && (
        <div ref={chatbotRef} className={styles.chatbotContainer}>
          <div className={styles.chatbotHeader}>
            <h3>Chat with Sukrit</h3>
            <button onClick={toggleChatbot}>&times;</button>
          </div>
          <div className={styles.chatbotMessages}>
            <p>Hello! Ask me anything about Sukrit!</p>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'bot' ? styles.botMessage : styles.userMessage}>
        <TbMessageChatbot/>    {msg.text}  
          </div>
        ))}
      </div>
      <div className={styles.chatbotInputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything!"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
    )}
    </div>
  );
}
