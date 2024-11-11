import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Code2 } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const Slide10: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const scrollRef = useRef<HTMLPreElement>(null);
  const controls = useAnimation();
  
  const fullText = "Adding Custom Validation\nBy adding a validator to the answer field, we can try to catch the issue and correct it.";

  const codeString = `class QuestionAnswerNoEvil(BaseModel):
    question: str
    answer: Annotated[
        str,
        BeforeValidator(
            llm_validator(
                "don't say objectionable things", 
                client=client, 
                allow_override=True
            )
        ),
    ]`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative">
      {/* Streaming Text Container */}
      <div className="h-[120px] flex items-center justify-center mb-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <AnimatePresence mode='wait'>
            <motion.span
              key={displayedText}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-medium text-indigo-950 whitespace-pre-line"
            >
              {displayedText}
            </motion.span>
            {displayedText.length < fullText.length && (
              <motion.span
                className="inline-block w-1 h-8 bg-indigo-600 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Code Block Container */}
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="relative">
          {/* Code Header */}
          <div className="bg-indigo-900 text-white px-6 py-3 rounded-t-lg flex items-center">
            <Code2 className="w-6 h-6 mr-3" />
            <span className="font-mono text-2xl">Custom Validation Example</span>
          </div>
          
          {/* Code Content */}
          <pre 
            ref={scrollRef}
            className="bg-indigo-950 text-indigo-50 p-8 rounded-b-lg overflow-hidden"
          >
            <motion.code 
              animate={controls}
              className="font-mono text-2xl leading-relaxed whitespace-pre block"
            >
              {codeString}
            </motion.code>
          </pre>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <Link href="/slide9" className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <Link href="/slide11" className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors">
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Slide10; 