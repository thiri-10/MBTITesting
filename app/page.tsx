// app/page.tsx
"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ParticlesBackground from './components/ParticleBackground';
import { FingerPrintIcon, HeartIcon, LightBulbIcon, PuzzlePieceIcon } from '@heroicons/react/16/solid';
import MainPage from './components/MainPage';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [Component,setComponent] = useState(null);

  const startTest = () => {
    router.push('/test');
  };



  

  return (
    <div className="">
      <ParticlesBackground />
      {/* <div style={{ textAlign: 'center', marginTop: '100px' ,zIndex: 100}}> */}
      <MainPage startTest={startTest}/>




     
    </div>

  );
};

export default HomePage;

