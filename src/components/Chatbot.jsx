import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import context from '../assets/chatbot-context.json';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Copy, RefreshCcw } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === '' || isLoading) return;

    const userMessage = { text: inputValue, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const contextString = JSON.stringify(context);
      const prompt = `Context: ${contextString}\n\nQuestion: ${inputValue}\n\nAnswer:`;

      const response = await axios.get(
        `https://text.pollinations.ai/${encodeURIComponent(prompt)}`
      );
      
      let botText = "Sorry, the response was empty.";
      if (response.data) {
        botText = response.data;
      }
      
      const botMessage = { text: botText, sender: 'bot' };
      
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching from Pollinations AI:", error);
      const errorMessage = { text: "Sorry, I couldn't get a response. Please try again.", sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyMessage = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleRegenerateResponse = async (index) => {
    if (isLoading || index === 0) return;
    
    // Find the user message that triggered this response
    const userMessageIndex = index - 1;
    if (userMessageIndex < 0 || messages[userMessageIndex].sender !== 'user') return;
    
    const userMessage = messages[userMessageIndex].text;
    setIsLoading(true);
    
    try {
      const contextString = JSON.stringify(context);
      const prompt = `Context: ${contextString}\n\nQuestion: ${userMessage}\n\nAnswer:`;

      const response = await axios.get(
        `https://text.pollinations.ai/${encodeURIComponent(prompt)}`
      );
      
      let botText = "Sorry, the response was empty.";
      if (response.data) {
        botText = response.data;
      }
      
      // Replace the existing bot message with the new one
      const newMessages = [...messages];
      newMessages[index] = { text: botText, sender: 'bot' };
      setMessages(newMessages);
    } catch (error) {
      console.error("Error regenerating response:", error);
      const newMessages = [...messages];
      newMessages[index] = { text: "Sorry, I couldn't regenerate a response. Please try again.", sender: 'bot' };
      setMessages(newMessages);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <motion.button
        onClick={toggleChat}
        className="bg-[#00816d] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-[#006d5b] transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="h-8 w-8" />
        ) : (
          <MessageSquare className="h-8 w-8" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden"
            style={{ height: '500px' }}
          >
            <div className="bg-[#00816d] text-white p-4 rounded-t-lg flex justify-between items-center">
                <motion.h3 
                  className="text-lg font-semibold"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Chat with our AI
                </motion.h3>
              </div>
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                <AnimatePresence initial={false}>
                  {messages.map((msg, index) => (
                    <motion.div 
                      key={index} 
                      className={`my-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {msg.sender === 'bot' && (
                        <div className="h-8 w-8 mr-2 flex-shrink-0 rounded-full bg-[#00816d] text-white flex items-center justify-center">AI</div>
                      )}
                      <div className="flex flex-col max-w-[80%]">
                        <div className={`p-3 rounded-lg ${
                          msg.sender === 'user' 
                            ? 'bg-[#00816d] text-white ml-auto' 
                            : 'bg-gray-200 text-gray-800'
                        }`}>
                          {msg.text}
                        </div>
                        {msg.sender === 'bot' && (
                          <div className="flex gap-2 mt-1 ml-1">
                            <button 
                              className="h-6 w-6 rounded-full hover:bg-[#00816d]/10 flex items-center justify-center"
                              onClick={() => handleCopyMessage(msg.text)}
                            >
                              <Copy className="h-3 w-3 text-gray-500" />
                            </button>
                            <button 
                              className="h-6 w-6 rounded-full hover:bg-[#00816d]/10 flex items-center justify-center"
                              onClick={() => handleRegenerateResponse(index)}
                              disabled={isLoading}
                            >
                              <RefreshCcw className="h-3 w-3 text-gray-500" />
                            </button>
                          </div>
                        )}
                      </div>
                      {msg.sender === 'user' && (
                         <div className="h-8 w-8 ml-2 flex-shrink-0 rounded-full bg-[#00816d]/80 text-white flex items-center justify-center">You</div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {isLoading && (
                  <motion.div 
                    className="my-2 flex justify-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                     <div className="h-8 w-8 mr-2 rounded-full bg-[#00816d] text-white flex items-center justify-center">AI</div>
                    <div className="p-3 rounded-lg bg-gray-200">
                      <div className="flex items-center space-x-2">
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-[#00816d]"
                          animate={{ scale: [0.5, 1, 0.5] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        />
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-[#00816d]"
                          animate={{ scale: [0.5, 1, 0.5] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                        />
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-[#00816d]"
                          animate={{ scale: [0.5, 1, 0.5] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleSendMessage} className="p-4 border-t bg-white rounded-b-lg">
                <div className="flex">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Ask me anything..."
                    className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#00816d]"
                    disabled={isLoading}
                  />
                  <button
                    type="submit" 
                    className="ml-2 bg-[#00816d] hover:bg-[#006d5b] text-white px-4 py-2 rounded-r-lg"
                    disabled={isLoading}
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot; 