"use client";





import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { calculateMBTI } from '../utils/calculateMBTI';
import MbtiDetail from '../components/MbtiDetail';
import ResultCard from '../components/ResultCard';
import ParticleBackground from '../components/ParticleBackground';
import { detail, questions } from '../utils/type';
import Loading from '../Loading';






const ResultPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [mbtiType, setMbtiType] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [strengths, setStrengths] = useState<string | null>(null);
  const [weaknesses, setWeaknesses] = useState<string | null>(null);
  const [careers, setCareers] = useState<string | null>(null);


  useEffect(() => {
    const answersString = searchParams.get('answers');

    if (answersString) {
      const answers = JSON.parse(answersString);

      const result = calculateMBTI(answers);

      const mbti = detail.find((personality) => personality.mbtiType === result);
      //  setMbtiType(mbti);
      console.log('mbti ', mbti);
      if (mbti) {
        setMbtiType(mbti.mbtiType);
        setDescription(mbti.description);
        setStrengths(mbti.strength);
        setWeaknesses(mbti.weakness);
        setCareers(mbti.career)

      }

    }
  }, [searchParams]);

  return (

    <div className='relative flex justify-center items-center '>
      <ParticleBackground />
      <div className='absolute
       top-10'>

        <div className='container mx-auto mt-8 '>
          <h1 className='text-center'>Hooray!!!!</h1>
          <h1 className='text-center'>Your MBTI Type is:</h1>
          {mbtiType ? <p className='font-bold mb-4 text-center'>{mbtiType}</p> : <p>Loading...</p>}

          <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
            <div className='lg:col-span-6  items-center  justify-between  '>
              {mbtiType ? <ResultCard type={mbtiType} description={description}
                strengths={strengths} weaknesses={weaknesses} /> : <p>Loading...</p>}
            </div>
            <div className='lg:col-span-6 flex items-center justify-center'>
              <MbtiDetail type={mbtiType} description={description}
                strengths={strengths} weaknesses={weaknesses} />
            </div>

            {/* Career choice */}
            {/* <div className='lg:col-span-4 bg-purple-200 shadow-md rounded-lg'>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Career Choices</h3>
              <p className="text-gray-600">
                Best careers for {mbtiType} personalities include:...
                {careers}</p>
            </div> */}


          </div>

          <p className='text-purple-400 mt-4 text-center'>
            Learn and explore more about your MBTI type
          </p>




        </div >







      </div>

    </div>








  );
};

export default ResultPage;



