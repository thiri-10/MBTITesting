// // components/QuestionCard.tsx

// import React from 'react';
// import { Question } from '../utils/type';

// interface QuestionCardProps {
//   questions: Question[];
//   onSelectAnswer: (id:number,answer: number) => void;
// }

// const QuestionCard: React.FC<QuestionCardProps> = ({ questions, onSelectAnswer }) => {
//   return (
//     <div className='flex items-center justify-center'>
//       <div className="h-60 w-80 bg-pink-200 mt-6 border rounded-xl shadow-xl">

//         {
//           questions.map((question,index) => (

//               <div key={index}>
//               <h3 className='p-4'>{question.text}</h3>
//               <button className='font-semibold '
//                 onClick={() => onSelectAnswer(question.id, question.answers)}
//                 style={{ margin: '5px', padding: '10px 15px' }}
//               >
//                 {question.text}
//               </button>
//             </div>




//           ))

//         }
//       </div>
//     </div>
//   );
// };

// export default QuestionCard;


import React, { useState } from 'react';
import { Question } from '../utils/type';

interface QuestionCardProps {
  questions: Question[]; // Array of questions
  onSelectAnswer: (id: number, value: number) => void; // Callback for selecting an answer
  userAnswers: { [key: number]: number };
}

const QuestionCard: React.FC<QuestionCardProps> = ({ questions, onSelectAnswer,userAnswers }) => {

  const [check, Setcheck] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {questions.map((question) => (
        <div key={question.id} className="w-full max-w-xl bg-white p-6 border rounded-xl shadow-xl">
          <h3 className="text-lg font-bold mb-4">{question.text}</h3>
          <div className="flex  justify-center items-center space-y-2 gap-6">

            {question.answers.map((answer, index) => (

              <label
                key={answer.value}
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <input
                  type="radio"
                  id={`question-${question.id}`}
                  name={`question-${question.id}`}
                  value={answer.value}
                  className="hidden peer"
                  checked={userAnswers[question.id] === answer.value}
                  onChange={() => onSelectAnswer(question.id, answer.value)}
                />
                <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center peer-checked:bg-purple-200 peer-checked:border-purple-500 transition-all">
                  <div className="w-4 h-4 bg-transparent rounded-full"></div>
                </div>
                <label htmlFor={`question-${question.id}`} className="mt-2 text-sm text-center">{answer.text}</label>
              </label>


            ))}

          </div>
        </div>
      ))}
    </div>
  );
};




export default QuestionCard;

// <button
//                 key={index}
//                 className="bubble-btn"
//                 // className="px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600"
//                 onClick={() => onSelectAnswer(question.id, answer.value)}
//               >
//                 {answer.text}
//               </button>

