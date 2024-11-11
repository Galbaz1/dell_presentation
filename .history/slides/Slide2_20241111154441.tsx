import React from 'react';
import SlideLayout from '../components/slides/SlideLayout';
import { Brain, Cpu, Network, Workflow } from 'lucide-react';

const Slide2: React.FC = () => {
  return (
    <SlideLayout>
      <div className="mb-12 text-center fade-in-scale">
        <h1 className="text-4xl font-bold text-amber-900 mb-2">AI Engineering Expertise</h1>
        <p className="text-lg text-amber-700">Core Competencies & Technical Skills</p>
      </div>

      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* ML/DL Fundamentals */}
        <div className="bg-white p-8 rounded-lg shadow-md border-2 border-amber-400 fade-in-scale" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-semibold text-amber-900 mb-4 flex items-center">
            <Brain className="mr-3 text-amber-700 w-6 h-6" />
            ML/DL Fundamentals
          </h2>
          <ul className="space-y-2 text-amber-800">
            <li>• Neural Network Architectures</li>
            <li>• Training & Optimization</li>
            <li>• Model Evaluation</li>
            <li>• Feature Engineering</li>
          </ul>
        </div>

        {/* LLM Engineering */}
        <div className="bg-white p-8 rounded-lg shadow-md border-2 border-amber-400 fade-in-scale" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-semibold text-amber-900 mb-4 flex items-center">
            <Cpu className="mr-3 text-amber-700 w-6 h-6" />
            LLM Engineering
          </h2>
          <ul className="space-y-2 text-amber-800">
            <li>• Prompt Engineering</li>
            <li>• Fine-tuning & RAG</li>
            <li>• Context Management</li>
            <li>• API Integration</li>
          </ul>
        </div>

        {/* MLOps & Deployment */}
        <div className="bg-white p-8 rounded-lg shadow-md border-2 border-amber-400 fade-in-scale" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-semibold text-amber-900 mb-4 flex items-center">
            <Workflow className="mr-3 text-amber-700 w-6 h-6" />
            MLOps & Deployment
          </h2>
          <ul className="space-y-2 text-amber-800">
            <li>• Model Versioning</li>
            <li>• Monitoring & Logging</li>
            <li>• Scalable Infrastructure</li>
            <li>• CI/CD for ML</li>
          </ul>
        </div>

        {/* AI Systems Architecture */}
        <div className="bg-white p-8 rounded-lg shadow-md border-2 border-amber-400 fade-in-scale" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-2xl font-semibold text-amber-900 mb-4 flex items-center">
            <Network className="mr-3 text-amber-700 w-6 h-6" />
            AI Systems Architecture
          </h2>
          <ul className="space-y-2 text-amber-800">
            <li>• System Design</li>
            <li>• Performance Optimization</li>
            <li>• Security & Privacy</li>
            <li>• Integration Patterns</li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide2; 