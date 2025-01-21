// utils/calculateMBTI.ts

import { Question, questions } from "./type";



  export const calculateMBTI = (answers: { [key: number]: any }):string => {
   
   
    
    // Loop through the answers and calculate the total score for each dichotomy
    const scores: Record<"EI" | "SN" | "TF" | "JP", number> = {
      EI: 0, // Extraversion (E) vs. Introversion (I)
      SN: 0, // Sensing (S) vs. Intuition (N)
      TF: 0, // Thinking (T) vs. Feeling (F)
      JP: 0, // Judging (J) vs. Perceiving (P)
    };

    questions.forEach((question) => {
      const answerValue = answers[question.id];
      if (answerValue !== undefined) {
        const category = question.category as "EI" | "SN" | "TF" | "JP";
        scores[category] += answerValue;
      }
    });
  
    // Determine the MBTI type based on the scores
    const mbtiType =
    (scores.EI > 0 ? "I" : "E") + // Positive = Introversion, Negative = Extraversion
    (scores.SN > 0 ? "N" : "S") + // Positive = Intuition, Negative = Sensing
    (scores.TF > 0 ? "F" : "T") + // Positive = Feeling, Negative = Thinking
    (scores.JP > 0 ? "P" : "J");  // Positive = Perceiving, Negative = Judging
  
    return mbtiType;
  };
  


  