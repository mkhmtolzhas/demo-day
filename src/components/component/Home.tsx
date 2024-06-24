import Script from 'next/script'
import React from 'react'

const HomePage = () => {
  return (
    <section className="w-full h-[85vh] md:h-screen bg-cover items-center pt-[50px] px-[8%] pb-[0] flex font-mono text-black home-page">
        <div className="max-w-[630px]">
            <h1 className='text-[45px] leading-[1.2] font-extrabold'>Together</h1>
            <h1 className='text-[45px] leading-[1.2] font-extrabold'>We Inspire</h1>
            <h1 className='text-[45px] leading-[1.2] font-extrabold'>Together We <span className="underline">Connect</span></h1>


            <p className='text-[18px] mt-[18px] mx-[0] mb-[30px] md:text-[23px]'>
              Welcome to matchMaking, the platform for building and enhancing relationships. Share experiences, seek advice, and connect with a community focused on personal growth and deeper bonds.
            </p>
            <button className="px-[28px] py-[10px] bg-transparent border-[1px] border-solid border-[#000000] rounded-[6px] text-[16px] text-black tracking-[1px] transition for-button">GET START</button>
        </div>        
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"></Script>
        <Script src='vanta/fog/fog.js'></Script>
    </section>
  )
}

export default HomePage