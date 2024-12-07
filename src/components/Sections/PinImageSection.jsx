import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { memo, useRef } from 'react';
import AnimateHeadings from '../AnimateHeadings';

const PinImageSection = () => {
  const pinImageCon = useRef(null);
  const pinImage = useRef(null);
  const pintrigger = useRef(null);
  const stones = useRef(null);

  useGSAP(() => {
    // Create GSAP timeline for scroll-triggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pintrigger.current,
        scroller: 'body',
        start: 'top top', // Ensure this is set properly for when the pin should start
        end: '+=100%', // Pin until the section reaches the bottom (adjust as needed)
        scrub: true,
        anticipatePin: 1,
        pinSpacing: true, // This ensures the space occupied by the image is kept even when unpinned
        pin: true,
        onLeave: () => ScrollTrigger.refresh(), // Refresh on leave if needed
        onEnterBack: () => ScrollTrigger.refresh(), // Refresh on enter back if needed
      }
    });

    // Add the animations to the timeline
    tl.to(pinImageCon.current, {
      clipPath: 'path("M 1350.5 -371.5 L 1350.5 -371.5 Q 1358.5 -371.5 1358.5 -363.5 L 1358.5 988.5 Q 1358.5 996.5 1350.5 996.5 L -1.5 996.5 Q -9.5 996.5 -9.5 988.5 L -9.5 -363.5 Q -9.5 -371.5 -1.5 -371.5 Z")', 
      ease: 'linear'
    }, 'same');

    tl.to(pinImage.current, {
      scale: 1,
      ease: 'linear'
    }, 'same');

    tl.to(stones.current, {
      scale: 1,
      ease: 'linear'
    }, 'same');
  }, []);

  return (
    <div className='w-[100dvw] overflow-hidden min-h-screen pt-32 relative bg-blue-75'>
        <h5 className='text-[12px] font-general uppercase text-center'>Welcome To Zentry</h5>
        <AnimateHeadings>
            <h2 className='md:w-[900px] sm:w-[750px] tablet:w-[560px] miniTB:w-[100dvw] MB:w-[100dvw] microMB:w-[100dvw] font-zentry md:text-[90px] md:leading-[75px] sm:text-[75px] sm:leading-[60px] tablet:text-[65px] tablet:leading-[55px] miniTB:text-[55px] miniTB:leading-[45px] MB:text-[50px] MB:leading-[40px] microMB:text-[40px] microMB:leading-[35px] text-center mt-8 MB:px-5 microMB:px-4 miniTB:px-5'>discover the world's largest shared adventure</h2>
        </AnimateHeadings>
        <div ref={pintrigger} className='w-full h-auto relative'>
            <div ref={pinImageCon} className='w-[1380px] h-screen overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5]' style={{ clipPath: 'path("M 768.832 93.7829 L 768.832 93.7829 Q 776.643 95.5104 777.916 103.408 L 832.58 442.502 Q 833.853 450.4 825.854 450.504 L 556.723 453.983 Q 548.723 454.086 548.546 446.088 L 539.765 51.082 Q 539.588 43.084 547.399 44.8115 Z")' }}>
                <img ref={pinImage} src="/img/about.webp" alt="Pin Image" className='w-full h-full object-center object-cover scale-125' />
            </div>
            <div ref={stones} className='w-[1380px] MB:w-[800px] microMB:w-[800px] h-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[6] scale-125'>
                <img src="/img/stones.webp" alt="stones" />
            </div>
            <div className='relative z-[4] flex flex-col items-center justify-between h-screen pb-10'>
                <div></div>
                <div className='MB:w-[100dvw] microMB:w-[100dvw] MB:px-5 microMB:px-5'>
                    <h6 className='font-robert-medium text-center text-[14px]'>The Game of Legends begins - your life, now an epic MMORPG</h6>
                    <p className='text-[11px] font-general opacity-60 text-center w-[400px] microMB:w-full MB:w-full'>
                    Zenity unites every player from countless games and platforms, both digital and physical, into a unified Play Economy.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default memo(PinImageSection);
