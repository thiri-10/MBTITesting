// app/test/page.tsx
"use client";
import React, { Suspense, useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '../utils/type'; // Adjust the path based on your setup
import QuestionCard from '../components/QuestionCards';
import { AnimatePresence, motion } from 'framer-motion';
import ProgressBar from '../components/ProgressBar';

const ITEMS_PER_PAGE = 6;

const TestPage: React.FC = () => {
  const router = useRouter();

  
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentQuestions = questions.slice(startIndex,startIndex + ITEMS_PER_PAGE);

  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});

  // const currentQuestion = questions[currentQuestionIndex];





  const handleAnswerSelection = (questionId:number, value:number) => {
    // setUserAnswers(prevAnswers => [...prevAnswers, value]);

    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));

    const answeredQuestions = currentQuestions.every(
      (q) => userAnswers[q.id] !== undefined
    );

   
   

   if(answeredQuestions){
    if ((currentPage + 1) * ITEMS_PER_PAGE < questions.length) {
      setCurrentPage(currentPage + 1);
    } else {
      const queryParams = new URLSearchParams({
        answers: JSON.stringify({ ...userAnswers, [questionId]: value }) // Include the final answer
      });
      router.push(`/result?${queryParams.toString()}`); // Construct URL with query params
    }
   }
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  }

  return (

    <>
     <Suspense fallback={<p>loading...</p>}>
     <div className=' text-center mt-[70px]'>
     <h2>Page {currentPage + 1} of {Math.ceil(questions.length / ITEMS_PER_PAGE)}</h2>
     <ProgressBar current={currentPage + 1} total={Math.ceil(questions.length / ITEMS_PER_PAGE)} />
     </div>
      {/* <AnimatePresence> */}
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
        <div className='text-center'>
        <QuestionCard questions={currentQuestions} onSelectAnswer={handleAnswerSelection} userAnswers={userAnswers}/>
        </div>
          <div className='flex justify-center'>
            {currentPage > 0 && (
              <button className='mt-4 p-2 border rounded-md bg-purple-300 text-white' onClick={handlePrevious}>Previous</button>
            )}
          </div>
        </motion.div>
      {/* </AnimatePresence> */}
      

     </Suspense>
    
    
    </>

  );
};

export default TestPage;

