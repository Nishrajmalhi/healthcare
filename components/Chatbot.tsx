// components/Chatbot.tsx
import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Add the chatbot script
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute('chatbotId', 'jCthwPBZbHLoC5domMkWl');
    script.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script);

    // Set up the embedded chatbot configuration
    window.embeddedChatbotConfig = {
      chatbotId: "jCthwPBZbHLoC5domMkWl",
      domain: "www.chatbase.co",
    };

    return () => {
      document.body.removeChild(script); // Cleanup
    };
  }, []);

  return (
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/jCthwPBZbHLoC5domMkWl"
      width="100%"
      style={{ height: '100%', minHeight: '700px' }}
      frameBorder="0"
    ></iframe>
  );
};

export default Chatbot;