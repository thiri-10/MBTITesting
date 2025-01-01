// components/QuestionCard.tsx

import React from 'react';
import { Question } from '../utils/type';

interface QuestionCardProps {
  question: Question;
  onSelectAnswer: (value: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onSelectAnswer }) => {
  return (
   <div className='flex items-center justify-center'>
     <div className="h-60 w-80 bg-pink-200 mt-6 border rounded-xl shadow-xl">
      <h3 className='p-4'>{question.text}</h3>
      {question.answers.map((answer, index) => (
        <button className='font-semibold '
          key={index}
          onClick={() => onSelectAnswer(answer.value)}
          style={{ margin: '5px', padding: '10px 15px' }}
        >
          {answer.text}
        </button>
      ))}
    </div>
   </div>
  );
};

export default QuestionCard;
