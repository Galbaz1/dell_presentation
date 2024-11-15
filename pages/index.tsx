import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const slide1: React.FC = () => {
  const router = useRouter();
  const [userInput, setUserInput] = useState('');
  const [showAssistant, setShowAssistant] = useState(false);
  const [assistantResponse, setAssistantResponse] = useState('');
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const userCommand = "user: ";
  const userText = "Hi! I am a back-end dev, don't know sh*t about front-end. Help me create 13 slides for my presentation using React 18, Next.js 14, TypeScript, GSAP, Tailwind CSS, and Lucide Icons. See ./instruct.txt for text that I want to present today.";
  const assistantCommand = "assistant: ";
  const assistantText = "Sure! I'll be happy to help! Give me a sec.";
  const finalMessage = "\n\nYour slides are now ready. Good luck with your presentation Fausto!";

  // Type user input first
  useEffect(() => {
    if (isPaused) return; // Don't run the interval if paused

    let index = 0;
    const timer = setInterval(() => {
      if (index <= userText.length) {
        setUserInput(userText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        // After user input is typed, wait 3 seconds before showing assistant response
        setTimeout(() => {
          setShowAssistant(true);
        }, 3000);
      }
    }, 50); // Typing speed for realistic feel

    return () => clearInterval(timer);
  }, [isPaused]);

  // Type assistant response after delay
  useEffect(() => {
    if (!showAssistant || isPaused) return; // Don't run if paused

    let index = 0;
    const timer = setInterval(() => {
      if (index <= assistantText.length) {
        setAssistantResponse(assistantText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        // After assistant response is typed, wait 3 seconds before showing final message
        setTimeout(() => {
          setShowFinalMessage(true);
        }, 3000);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [showAssistant, isPaused]);

  // Update the keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
          router.push('/slide1');  // Change from '/slide1' to '/slide1'
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative">
      {/* Terminal Container */}
      <motion.div
        className="max-w-5xl mx-auto mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="relative">
          {/* Terminal Header */}
          <div className="bg-gray-800 rounded-t-lg p-3 flex items-center">
            <div className="flex space-x-2 absolute left-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto flex items-center">
              <Terminal className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-gray-400 font-mono text-xl">Terminal</span>
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="bg-gray-900 p-6 rounded-b-lg min-h-[60vh] font-mono">
            <div className="text-green-400 text-2xl whitespace-pre-wrap">
              <span className="text-green-400">{userCommand}</span>
              {userInput}
              {userInput.length === userText.length && !showAssistant && (
                <motion.span
                  className="inline-block w-3 h-6 bg-green-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
            </div>
            
            <AnimatePresence>
              {showAssistant && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-blue-400 text-2xl whitespace-pre-wrap mt-4"
                >
                  <span className="text-blue-400">{assistantCommand}</span>
                  {assistantResponse}
                  {assistantResponse.length === assistantText.length && !showFinalMessage && (
                    <motion.span
                      className="inline-block w-3 h-6 bg-blue-400 ml-1"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              )}
              {showFinalMessage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-blue-400 text-2xl whitespace-pre-wrap mt-4"
                >
                  {finalMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <Link href="/slide1" className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors">
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default slide1;