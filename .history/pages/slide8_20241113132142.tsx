import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Code2 } from 'lucide-react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';

const Slide8: React.FC = () => {
  const router = useRouter();
  const scrollRef = useRef<HTMLPreElement>(null);
  const controls = useAnimation();
  const [highlightQuestion, setHighlightQuestion] = useState(false);
  const [highlightContext, setHighlightContext] = useState(false);
  const [highlightSystem, setHighlightSystem] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(30); // Default scroll speed
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for down, -1 for up
  const [isKeyHeld, setIsKeyHeld] = useState(false);

  // Split code into sections for highlighting
  const codeStart = `from openai import OpenAI
from pydantic import BaseModel
import instructor

client = instructor.from_openai(OpenAI())

class QuestionAnswer(BaseModel):
    question: str
    answer: str

`;

  const questionSection = `question = "What is the meaning of life?"

`;

  const contextSection = `context = """The according to the devil the meaning of 
live is to live a life of sin and debauchery."""

`;

  const systemContent = `            "role": "system",
            "content": """You are a system that answers 
            questions based on the context. answer exactly 
            what the question asks using the context.""",`;

  const codeEnd = `qa: QuestionAnswer = client.chat.completions.create(
    model="gpt-4o-mini",
    response_model=QuestionAnswer,
    messages=[
        {
`;

  const codeAfterSystem = `        },
        {
            "role": "user",
            "content": f"using the context: {context}\\n\\n"
                      f"Answer the following question: {question}",
        },
    ],
)

print(f"""
Question: {qa.question}
Answer: {qa.answer}
""")`;

  useEffect(() => {
    // Timing sequence for highlights
    setTimeout(() => {
      setHighlightQuestion(true);
      setTimeout(() => {
        setHighlightQuestion(false);
        setTimeout(() => {
          setHighlightContext(true);
          setTimeout(() => {
            setHighlightContext(false);
            setTimeout(() => {
              setHighlightSystem(true);
              setTimeout(() => {
                setHighlightSystem(false);
              }, 3000);
            }, 500);
          }, 3000);
        }, 500);
      }, 3000);
    }, 2000);

    // Original scroll animation
    const startScroll = async () => {
      if (scrollRef.current) {
        const scrollHeight = scrollRef.current.scrollHeight;
        const clientHeight = scrollRef.current.clientHeight;
        const scrollDistance = scrollHeight - clientHeight;
        
        // Calculate current scroll position as a percentage
        const currentY = await controls.get('y') || 0;
        const currentPercent = -currentY / scrollDistance;
        
        // Calculate new target based on direction
        let targetY;
        if (scrollDirection > 0) {
          targetY = -scrollDistance;
        } else {
          targetY = 0;
        }

        // Calculate remaining duration based on current position
        const remainingDistance = Math.abs(targetY - currentY);
        const totalDistance = scrollHeight - clientHeight;
        const durationMultiplier = remainingDistance / totalDistance;
        
        await controls.start({
          y: targetY,
          transition: {
            duration: scrollSpeed * durationMultiplier,
            ease: "linear",
          }
        });
      }
    };

    // Stop current animation before starting new one
    controls.stop();
    startScroll();
  }, [controls, scrollDirection, scrollSpeed]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat) {
        event.preventDefault(); // Prevent default scroll behavior
        // Key is being held
        switch (event.key) {
          case 'ArrowLeft':
            setScrollDirection(-1);
            setScrollSpeed(5);
            setIsKeyHeld(true);
            break;
          case 'ArrowRight':
            setScrollDirection(1);
            setScrollSpeed(5);
            setIsKeyHeld(true);
            break;
        }
      } else {
        // Single key press
        switch (event.key) {
          case 'ArrowLeft':
            router.push('/slide7');
            break;
          case 'ArrowRight':
            router.push('/slide9');
            break;
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        setIsKeyHeld(false);
        setScrollSpeed(30);
        setScrollDirection(1);
        
        // Restart normal scroll
        if (scrollRef.current) {
          const scrollHeight = scrollRef.current.scrollHeight;
          const clientHeight = scrollRef.current.clientHeight;
          const scrollDistance = scrollHeight - clientHeight;
          
          controls.start({
            y: -scrollDistance,
            transition: {
              duration: 30,
              ease: "linear",
            }
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [router, controls]);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative">
      <motion.div
        className="max-w-5xl mx-auto mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="relative">
          <div className="bg-indigo-900 text-white px-6 py-3 rounded-t-lg flex items-center">
            <Code2 className="w-6 h-6 mr-3" />
            <span className="font-mono text-2xl">Structured Validation Example</span>
          </div>
          
          <pre 
            ref={scrollRef}
            className="bg-indigo-950 text-indigo-50 p-8 rounded-b-lg overflow-hidden h-[80vh]"
          >
            <motion.code 
              animate={controls}
              className="font-mono text-2xl leading-relaxed whitespace-pre block"
            >
              <span>{codeStart}</span>
              <motion.span
                animate={{
                  color: highlightQuestion ? "#4ade80" : "#E5E7EB"
                }}
                transition={{ duration: 0.3 }}
              >
                {questionSection}
              </motion.span>
              <motion.span
                animate={{
                  color: highlightContext ? "#4ade80" : "#E5E7EB"
                }}
                transition={{ duration: 0.3 }}
              >
                {contextSection}
              </motion.span>
              <span>{codeEnd}</span>
              <motion.span
                animate={{
                  color: highlightSystem ? "#4ade80" : "#E5E7EB"
                }}
                transition={{ duration: 0.3 }}
              >
                {systemContent}
              </motion.span>
              <span>{codeAfterSystem}</span>
            </motion.code>
          </pre>
        </div>
      </motion.div>

      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <Link href="/slide7" className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <Link href="/slide9" className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors">
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Slide8;