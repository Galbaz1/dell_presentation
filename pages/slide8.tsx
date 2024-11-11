import React, { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Code2 } from 'lucide-react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

const Slide8: React.FC = () => {
  const scrollRef = useRef<HTMLPreElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const startScroll = async () => {
      if (scrollRef.current) {
        const scrollHeight = scrollRef.current.scrollHeight;
        const clientHeight = scrollRef.current.clientHeight;
        const scrollDistance = scrollHeight - clientHeight;

        // Wait 1 second before starting scroll
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Animate scroll
        await controls.start({
          y: -scrollDistance,
          transition: {
            duration: 15,
            ease: "linear",
          }
        });
      }
    };

    startScroll();
  }, [controls]);

  const codeString = `from openai import OpenAI
from pydantic import BaseModel
import instructor

client = instructor.from_openai(OpenAI())

class QuestionAnswer(BaseModel):
    question: str
    answer: str

question = "What is the meaning of life?"

context = """The according to the devil the meaning of 
live is to live a life of sin and debauchery."""

qa: QuestionAnswer = client.chat.completions.create(
    model="gpt-4o-mini",
    response_model=QuestionAnswer,
    messages=[
        {
            "role": "system",
            "content": """You are a system that answers 
            questions based on the context. answer exactly 
            what the question asks using the context.""",
        },
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

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative">
      {/* Code Block Container */}
      <motion.div
        className="max-w-5xl mx-auto mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="relative">
          {/* Code Header */}
          <div className="bg-indigo-900 text-white px-6 py-3 rounded-t-lg flex items-center">
            <Code2 className="w-6 h-6 mr-3" />
            <span className="font-mono text-2xl">Structured Validation Example</span>
          </div>
          
          {/* Code Content */}
          <pre 
            ref={scrollRef}
            className="bg-indigo-950 text-indigo-50 p-8 rounded-b-lg overflow-hidden h-[80vh]"
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