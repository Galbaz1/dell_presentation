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
  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative">
      {/* Placeholder content - same as slide 1 */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-amber-900 mb-2">Slide 2</h1>
        <p className="text-lg text-amber-700">Content coming soon...</p>
      </div>

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