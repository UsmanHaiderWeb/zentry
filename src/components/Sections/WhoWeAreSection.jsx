import React, { memo, useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimateHeadings from '../AnimateHeadings';
import ButtonWithSendIcon from '../ButtonWithSendIcon';

const WhoWeAreSection = ({ setTheme }) => {
    const themeChanger1toLight= useRef(null);

    useGSAP(() => {
      gsap.to(themeChanger1toLight.current, {
        scrollTrigger: {
          trigger: themeChanger1toLight.current,
          scroller: 'body',
          start: 'top 90%',
          end: 'bottom -1200vh',
          // toggleActions: 'play reverse play reverse',
          // markers: true,
          scrub: true,
          onEnter: () => {
            // ScrollTrigger.refresh();
            setTheme('light');
          },
          onEnterBack: () => {
            // ScrollTrigger.refresh();
            setTheme('light');
          },
          onUpdate: (prop) => prop.progress == 0 ? setTheme('yellow') : setTheme('light'),
        }
      })
    }, [])

  return (
    <div className='px-10 MB:px-5 microMB:px-4 pt-28 center flex-col overflow-hidden'>
      <h5 className='text-[12px] font-general uppercase text-center'>Welcome To Zent</h5>
      <AnimateHeadings startingPoint='90%'>
        <h2 ref={themeChanger1toLight} className='center flex-col w-[600px] tablet:w-[450px] miniTB:w-[80vw] MB:w-[80vw] microMB:w-[90vw] miniTB:max-w-[400px] font-zentry md:text-[100px] md:leading-[85px] sm:text-[85px] sm:leading-[70px] tablet:text-[75px] tablet:leading-[65px] miniTB:text-[65px] miniTB:leading-[55px] MB:text-[55px] MB:leading-[45px] microMB:text-[45px] microMB:leading-[40px] my-5 text-center mx-auto'>
          <span className='whitespace-nowrap '>We are building</span>
          <span className='whitespace-nowrap center gap-x-5 MB:gap-x-3 microMB:gap-x-3  '>
            a new
            <span className='whitespace-nowrap w-10 h-10 MB:w-8 MB:h-8
             microMB:w-6 microMB:h-6 bg-black inline-block rounded-md' style={{animation: 'scaleAnimation 1s alternate infinite ease-out'}}></span>
            reality
          </span>
          <span className='whitespace-nowrap '>that rewards</span>
          <span className='whitespace-nowrap center gap-x-5 MB:gap-x-3 microMB:gap-x-3'>
            players
            <span className='whitespace-nowrap w-10 h-10 MB:w-8 MB:h-8
             microMB:w-6 microMB:h-6 bg-black inline-block rounded-md' style={{animation: 'scaleAnimation 1s alternate infinite ease-out'}}></span>
            and
          </span>
          <span className='whitespace-nowrap '>encourages</span>
          <span className='whitespace-nowrap '>communities</span>
          <span className='whitespace-nowrap center gap-x-5 MB:gap-x-3 microMB:gap-x-3'>
            to
            <span className='whitespace-nowrap w-10 h-10 MB:w-8 MB:h-8
             microMB:w-6 microMB:h-6 bg-black inline-block rounded-md' style={{animation: 'scaleAnimation 1s alternate infinite ease-out'}}></span>
            thrive
          </span>
        </h2>
      </AnimateHeadings>
      <p className='text-[11px] font-general opacity-80 text-center w-[400px] MB:w-[80vw] microMB:w-[90vw] MB:max-w-[400px] microMB:max-w-[320px] mx-auto my-5'>Zenity unites every player from countless games and platforms, both digital and physical, into a unified Play Economy.</p>
      <ButtonWithSendIcon content='Discover Who We Are' />
    </div>
  )
}

export default memo(WhoWeAreSection)