// app/test/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '../utils/type'; // Adjust the path based on your setup
import QuestionCard from '../components/QuestionCards';
import { AnimatePresence, motion } from 'framer-motion';
import ProgressBar from '../components/ProgressBar';


const TestPage: React.FC = () => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const currentQuestion = questions[currentQuestionIndex];





  const handleAnswerSelection = (value: number) => {
    setUserAnswers(prevAnswers => [...prevAnswers, value]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const queryParams = new URLSearchParams({
        answers: JSON.stringify([...userAnswers, value]) // Include the final answer
      });
      router.push(`/result?${queryParams.toString()}`); // Construct URL with query params
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }

  return (

    <>
     
    
     <div className=' text-center mt-[70px]'>
     <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
     <ProgressBar current={currentQuestionIndex} total={60} />
     </div>
      {/* <AnimatePresence> */}
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
        <div className='text-center'>
        <QuestionCard question={currentQuestion} onSelectAnswer={handleAnswerSelection} />
        </div>
          <div className='flex justify-center'>
            {currentQuestionIndex > 0 && (
              <button className='mt-4 p-2 border rounded-md bg-purple-300 text-white' onClick={handlePrevious}>Previous</button>
            )}
          </div>
        </motion.div>
      {/* </AnimatePresence> */}
      
    </>

  );
};

export default TestPage;

