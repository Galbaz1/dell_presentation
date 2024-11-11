import React from 'react';
import { ArrowRight, ArrowLeft, AlertCircle, Gauge, Bug, Brain, Target, Clock } from 'lucide-react';
import Link from 'next/link';

const Slide2: React.FC = () => {
  const challenges = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Model Limitations",
      description: "Balancing capability expectations with current technological constraints"
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Hallucinations",
      description: "Managing false or inconsistent outputs in production"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing response times and resource utilization"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Accuracy",
      description: "Ensuring reliable and contextually appropriate responses"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Rapid Evolution",
      description: "Keeping up with fast-paced model updates and capabilities"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-amber-900 mb-3">Challenges in LLM Dev Cycle</h1>
        <p className="text-xl text-amber-700 flex items-center justify-center">
          <AlertCircle className="w-6 h-6 mr-2" />
          The intersection of immature technology and unrealistic expectations
        </p>
      </div>

      {/* Challenges Circle */}
      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-2 border-amber-400 
                         transform hover:scale-105 transition-transform duration-200"
            >
      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <Link href="/" className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <Link href="/slide3" className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-colors">
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Slide2; 