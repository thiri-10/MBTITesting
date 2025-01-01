// utils/calculateMBTI.ts



  export const calculateMBTI = (answers: number[]) => {
    let I_E = 0;  // Introversion vs. Extraversion
    let S_N = 0;  // Sensing vs. Intuition
    let T_F = 0;  // Thinking vs. Feeling
    let J_P = 0;  // Judging vs. Perceiving
  
    // Loop through the answers and calculate the total score for each dichotomy
    answers.forEach((value, index) => {
      if (index >= 0 && index <= 15) {
        // Questions 1-4 are for Introversion vs. Extraversion
        I_E += value;
      } else if (index >= 16 && index <= 30) {
        // Questions 5-8 are for Sensing vs. Intuition
        S_N += value;
      } else if (index >= 31 && index <= 45) {
        // Questions 9-12 are for Thinking vs. Feeling
        T_F += value;
      } else if (index >= 46 && index <= 60) {
        // Questions 13-16 are for Judging vs. Perceiving
        J_P += value;
      }
    });
  
    // Determine the MBTI type based on the scores
    const mbtiType = 
      (I_E > 0 ? 'I' : 'E') +  // Introversion if I_E > 0, otherwise Extraversion
      (S_N > 0 ? 'S' : 'N') +  // Sensing if S_N > 0, otherwise Intuition
      (T_F > 0 ? 'T' : 'F') +  // Thinking if T_F > 0, otherwise Feeling
      (J_P > 0 ? 'J' : 'P');   // Judging if J_P > 0, otherwise Perceiving
  
    return mbtiType;
  };
  


  