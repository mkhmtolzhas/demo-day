"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Chat from '@/components/component/chat-bot';

// Dynamically import FBXViewer to avoid server-side rendering issues
const FBXViewer = dynamic(() => import('../../components/component/FBXViewer'), { ssr: false });

const Home: React.FC = () => {
  const initialAnimation = "https://animations-demo-day.s3.eu-north-1.amazonaws.com/Happy+(2).fbx";
  const [currentAnimation, setCurrentAnimation] = useState<string>(initialAnimation);

  // const animations = [
  //   "https://animations-demo-day.s3.eu-north-1.amazonaws.com/Happy+(2).fbx",
  //   "https://animations-demo-day.s3.eu-north-1.amazonaws.com/Thinking+(3).fbx",
  //   "https://animations-demo-day.s3.eu-north-1.amazonaws.com/Excited+(2).fbx"
  // ];



  return (
    <>
      <Chat chatID='1'/>
    </>
  );
};

export default Home;
