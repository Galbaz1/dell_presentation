import React, { useState, useEffect } from 'react';
import { ArrowLeft, Terminal, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Slide9: React.FC = () => {
  const router = useRouter();
  const [commandText, setCommandText] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [outputText, setOutputText] = useState('');
  
  const command = '$ python structured_validation.py';
  const output = `
Question: What is the meaning of life?
Answer: The meaning of life is to live a life of sin and debauchery.

$`;

  // Type command first
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= command.length) {
        setCommandText(command.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        // After command is typed, wait 1 second before showing output
        setTimeout(() => {
          setShowOutput(true);
        }, 1000);
      }
    }, 100); // Slower typing speed for realistic feel

    return () => clearInterval(timer);
  }, []);

  // Type output after delay
  useEffect(() => {
    if (showOutput) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= output.length) {
          setOutputText(output.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [showOutput]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          router.push('/slide8');
          break;
        case 'ArrowRight':
          router.push('/slide10');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
              {commandText}
              {commandText.length === command.length && !showOutput && (
                <motion.span
                  className="inline-block w-3 h-6 bg-green-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
            </div>
            
            <AnimatePresence>
              {showOutput && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-2xl whitespace-pre-wrap"
                >
                  {outputText}
                  {outputText.length < output.length && (
                    <motion.span
                      className="inline-block w-3 h-6 bg-green-400 ml-1"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <Link href="/slide8" className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <Link href="/slide10" className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors">
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Slide9;