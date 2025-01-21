import { FingerPrintIcon, HeartIcon, LightBulbIcon, PuzzlePieceIcon } from '@heroicons/react/16/solid';
import { redirect, useRouter } from 'next/navigation';

export default function MainPage({ startTest }: {
  startTest: (any)
}) {
  const router = useRouter();
  return (

    <div className='absolute top-[40%] lg:top-[10%]  lg:left-10 container mx-auto h-full flex justify-center items-center flex-col z-10'>
      {/* another layer div  */}


      <h1 className='text-center text-2xl md:text-4xl font-bold mb-4'>Welcome to the MBTI Test</h1>
      <p className='text-center text-lg mb-10'>Discover your personality type by answering a few questions.</p>



      <div className='flex flex-col lg:flex-row gap-4 items-center '>

        <div className="relative w-80 h-60 rounded-lg shadow-lg overflow-hidden">
          {/* Upper Part - Icon */}
          <div className="bg-blue-200 h-3/5 relative flex items-center justify-center">
            {/* Wavy Design */}
            <svg
              className="absolute bottom-0 w-full"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFFFFF"
                d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,138.7C672,171,768,245,864,256C960,267,1056,213,1152,197.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
            {/* Icon */}
            <div className="z-10">

              <FingerPrintIcon className="text-white h-16 w-16" />
            </div>
          </div>

          {/* Lower Part - Motto */}
          <div className="bg-white h-2/5 flex items-center justify-center text-center px-4">
            <p className="text-sm">
              "Discover the depth of who you are. Your personality is unique—embrace
              the journey of self-awareness."
            </p>
          </div>
        </div>


        <div className="relative w-80 h-60 rounded-lg shadow-lg overflow-hidden">
          {/* Upper Part - Icon */}
          <div className="bg-yellow-100 h-3/5 relative flex items-center justify-center">
            {/* Wavy Design */}
            <svg
              className="absolute bottom-0 w-full"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFFFFF"
                d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,138.7C672,171,768,245,864,256C960,267,1056,213,1152,197.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
            {/* Icon */}
            <div className="z-10">
              <HeartIcon className="text-white h-16 w-16" />
            </div>
          </div>

          {/* Lower Part - Motto */}
          <div className="bg-white h-2/5 flex items-center justify-center text-center px-4">
            <p className="text-sm">
              "Understanding yourself is the first step toward embracing the world.
              Take the test and uncover your true personality."
            </p>
          </div>
        </div>

        {/* 
        third card */}
        <div className="relative w-80 h-60 rounded-lg shadow-lg overflow-hidden">
          {/* Upper Part - Icon */}
          <div className="bg-pink-200 h-3/5 relative flex items-center justify-center">
            {/* Wavy Design */}
            <svg
              className="absolute bottom-0 w-full"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFFFFF"
                d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,138.7C672,171,768,245,864,256C960,267,1056,213,1152,197.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
            {/* Icon */}
            <div className="z-10">
              <PuzzlePieceIcon className="text-white h-16 w-16" />
            </div>
          </div>

          {/* Lower Part - Motto */}
          <div className="bg-white h-2/5 flex items-center justify-center text-center px-4">
            <p className=" text-sm">
              "Introvert, extrovert, or somewhere in between—every personality matters.
              Let’s find out who you really are."
            </p>
          </div>
        </div>

      </div>





      {/* <button className=' border rounded-md mb-3 py-3 px-8 text-lg mt-10  text-purple-400 
      hover:bg-purple-200 hover:text-purple-600 transition-all'
       onClick={startTest}>
        Start the Test
      </button> */}

      <button className='border rounded-md mb-3 py-3 px-8 text-lg mt-10 text-purple-400
      hover:text-purple-600 hover:bg-purple-200 transition-color' onClick={()=>{
router.push('/test')
        
        console.log('test click')
      }
        }>
        Start the Test
      </button>
    </div>

  );
}