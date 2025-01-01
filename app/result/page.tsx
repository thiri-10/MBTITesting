"use client";





import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { calculateMBTI } from '../utils/calculateMBTI'; 
import MbtiDetail from '../components/MbtiDetail';
import ResultCard from '../components/ResultCard';
import ParticleBackground from '../components/ParticleBackground';
import { detail } from '../utils/type';
import Loading from '../components/Loading';





const ResultPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [mbtiType, setMbtiType] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [strengths, setStrengths] = useState<string | null>(null);
  const [weaknesses, setWeaknesses] = useState<string | null>(null);


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
        setStrengths(mbti.strengths);
        setWeaknesses(mbti.weaknesses);

      }

    }
  }, [searchParams]);

  return (
    <Suspense fallback={<Loading/>}>
      <div className='relative flex justify-center items-center '>
      <ParticleBackground />
      <div className='absolute
       top-10'>

        <div className='text-center mt-8 '>
          <h1 className='text-center'>Your MBTI Type is:</h1>
          {mbtiType ? <p className='font-bold mb-4 text-center'>{mbtiType}</p> : <p>Loading...</p>}

          <div className='container  mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6'>
            <div className='lg:col-span-6  items-center  justify-between  '>
              {mbtiType ? <ResultCard type={mbtiType} description={description}
                strengths={strengths} weaknesses={weaknesses} /> : <p>Loading...</p>}
            </div>
            <div className='lg:col-span-6 flex items-center justify-center'>
              <MbtiDetail type={mbtiType} description={description}
                strengths={strengths} weaknesses={weaknesses} />
            </div>

            <div className='lg:col-span-4 bg-purple-200 shadow-md rounded-lg'>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Career Choices</h3>
              <p className="text-gray-600">
                Best careers for {mbtiType} personalities include:...</p>
            </div>
            {/* <div className='lg:col-span-4 bg-purple-200 shadow-md rounded-lg'>
              <p className="text-gray-600">
                People with your personality type tend to form deep, meaningful connections...
              </p>
            </div> */}

          </div>

          <p className='text-purple-400 mt-4'>
            Learn and explore more about your MBTI type
          </p>




        </div >







      </div>

    </div>

    </Suspense>
    


  );
};

export default ResultPage;



