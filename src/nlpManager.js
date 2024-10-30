const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['en'] });

// Adding multiple variations for each intent

// About Intent
manager.addDocument('en', 'Tell me about Sukrit', 'info.about');
manager.addDocument('en', 'Who are you?', 'info.about');
manager.addDocument('en', 'Can you introduce yourself?', 'info.about');
manager.addDocument('en', 'Give me some info about Sukrit', 'info.about');
manager.addDocument('en', 'What should I know about Sukrit?', 'info.about');

// Skills Intent
manager.addDocument('en', 'What are your skills?', 'info.skills');
manager.addDocument('en', 'Tell me your skillset', 'info.skills');
manager.addDocument('en', 'What technologies do you know?', 'info.skills');
manager.addDocument('en', 'Which programming languages do you use?', 'info.skills');
manager.addDocument('en', 'What are your technical skills?', 'info.skills');
manager.addDocument('en', 'List your skills', 'info.skills');

// Projects Intent
manager.addDocument('en', 'Show me your projects', 'info.projects');
manager.addDocument('en', 'What projects have you worked on?', 'info.projects');
manager.addDocument('en', 'Can I see some of your work?', 'info.projects');
manager.addDocument('en', 'Tell me about your projects', 'info.projects');
manager.addDocument('en', 'What kind of projects have you done?', 'info.projects');

// Contact Intent
manager.addDocument('en', 'How can I contact you?', 'info.contact');
manager.addDocument('en', 'What’s your contact information?', 'info.contact');
manager.addDocument('en', 'How do I get in touch?', 'info.contact');
manager.addDocument('en', 'I want to reach out to you', 'info.contact');
manager.addDocument('en', 'Give me your email or phone', 'info.contact');

// Adding responses
manager.addAnswer('en', 'info.about', 'Hello! I am Sukrit, a passionate software engineer interested in cybersecurity, AI, and web development.');
manager.addAnswer('en', 'info.skills', 'I have experience in JavaScript, Python, React, Node.js, and more!');
manager.addAnswer('en', 'info.projects', 'You can find my projects on this page. Click on any project to see details.');
manager.addAnswer('en', 'info.contact', 'Feel free to email me at sukrit@example.com or use the contact form here!');

// Train and save the model
(async () => {
  await manager.train();
  manager.save();
})();

module.exports = manager;
