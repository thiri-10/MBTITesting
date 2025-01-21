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
  question: Question; // Array of questions
  onSelectAnswer: (id: number, value: number) => void; // Callback for selecting an answer
  userAnswers: { [key: number]: number };
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onSelectAnswer,userAnswers }) => {

  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleSelection = (value: number) => {
    setSelectedValue(value);
    onSelectAnswer(question.id, value);
  };
  return (
    // <div className="flex flex-col items-center justify-center space-y-6">
      
    //     <div className="w-full max-w-xl bg-white p-6 border rounded-xl shadow-xl">

    //       <h3 className="text-lg font-bold mb-4">{question.text}</h3>
    //       <div className="flex  justify-center items-center space-y-10 gap-6">

    //         {question.answers.map((answer, index) => (

    //           <label
    //             key={index}
    //             htmlFor={`question-${question.id}-answer-${index}`}
    //             className="flex flex-col items-center justify-center cursor-pointer"
    //           >
    //             <input
    //               type="radio"
    //               id={`question-${question.id}-answer-${index}`}
    //               name={`question-${question.id}`}
    //               value={answer.value}
    //               className="hidden peer"
    //               checked={userAnswers[question.id] === answer.value}
    //               onChange={() =>{ onSelectAnswer(question.id, answer.value)
    //                 console.log('useranswers',userAnswers)
    //               }
    //               }
    //             />
    //             <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center 
    //             justify-center peer-checked:bg-purple-200 peer-checked:border-purple-500 transition-all">
    //               <div className="w-4 h-4 bg-transparent rounded-full"></div>
    //             </div>
    //             <span className="mt-2 text-sm text-center">{answer.text}</span>
                
    //           </label>


    //         ))}

    //       </div>
    //     </div>
      
    // </div>





<div className="p-6  rounded-md shadow-md bg-white z-10 mb-2">
    <h2 className="text-lg font-semibold mb-4">{question.text}</h2>
    <div className="flex  flex-wrap gap-6 justify-center ">
      {question.answers.map((answer, index) => (
        <label
          key={index}
          htmlFor={`question-${question.id}-answer-${index}`}
          className="flex flex-col items-center cursor-pointer"
        >
          <input
          id={`question-${question.id}-answer-${index}`}
            type="radio"
            name={`question`}
            value={answer.value}
            checked={selectedValue === answer.value}
            onClick={() => handleSelection(answer.value)}
            className="hidden"
          />
          <div
            className={`w-5 h-5 md:w-7 md:h-7 rounded-full border-2 flex items-center justify-center transition-all ${
              selectedValue === answer.value
                ? "bg-purple-300 border-purple-500 text-white"
                : "border-gray-400 text-gray-600"
            }`}
            style={{ cursor: "pointer" }}
          >
            {selectedValue === answer.value && "✓"}
          </div>
          <span className="mt-2 text-sm text-center">{answer.text}</span>
        </label>
      ))}
    </div>
  </div>
    
  
  );
};




export default QuestionCard;


