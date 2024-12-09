import { Send } from 'lucide-react'
import React, { memo, useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ZentPin = ({ setTheme }) => {
    const themeChangerToYellow = useRef(null);

    useGSAP(() => {
      gsap.to(themeChangerToYellow.current, {
        scrollTrigger: {
          trigger: themeChangerToYellow.current,
          scroller: 'body',
          start: 'top 70%',
          end: 'bottom -1200vh',
          scrub: true,
          onEnter: () => setTheme('yellow'),
          onEnterBack: () => setTheme('yellow'),
          onLeave: () => setTheme('dark'),
          onLeaveBack: () => setTheme('dark'),
        }
      })
    }, [])

  return (
    <div ref={themeChangerToYellow} className='h-full pb-10 overflow-hidden'>
        <div className='px-10 MB:px-5 microMB:px-4 flex justify-between items-start min-h-screen h-full flex-col relative'>
            <div>
                <h5 className='text-[12px] font-general uppercase'>Welcome To Zent</h5>
                <h2 className='w-[600px] tablet:w-[450px] miniTB:w-[80vw] MB:w-[80vw] microMB:w-[90vw] miniTB:max-w-[400px] font-zentry md:text-[100px] md:leading-[85px] sm:text-[85px] sm:leading-[70px] tablet:text-[75px] tablet:leading-[65px] miniTB:text-[65px] miniTB:leading-[55px] MB:text-[55px] MB:leading-[45px] microMB:text-[45px] microMB:leading-[40px] my-5'>The universe powered by zent</h2>
                <button className='center gap-x-2 text-[10px] opacity-100 px-5  rounded-[50px] border-[1px] border-solid py-2 duration-100 hover:bg-blue-75 bg-zinc-950  text-blue-75 hover:text-black border-black border-opacity-100'><Send size={10} /> Discover Prologue</button>
            </div>
            <div className='sm:h-full tablet:h-full sm:pr-10 lg:pr-20 xl:pr-32 pr-2 md:pt-0 sm:pt-20 tablet:pt-20 pt-5 sm:w-screen tablet:w-screen w-max flex justify-end items-center sm:absolute tablet:absolute sm:top-0 tablet:top-0 sm:left-0 tablet:left-0'>
                <video src="/videos/symbol_3@lg.webm" loop autoPlay muted loading="lazy" className='sm:w-[400px] w-[330px] MB:w-[290px] microMB:w-[80vw] microMB:max-w-[280px]'></video>
            </div>
            <div className='flex justify-start items-start flex-col gap-y-2'>
                {[1,2,3].map((i, idx) => (
                    <div key={i} className='flex justify-start items-start gap-x-10 microMB:gap-x-5'>
                        <div className='center gap-y-3 flex-col'>
                            <div>{idx + 1}</div>
                        {i == 1 &&
                            <div className='w-1 h-14 bg-black opacity-80'></div>
                        }
                        </div>
                            <div className='flex items-start gap-y-3 flex-col'>
                                <h6 className='text-[18px] font-robert-medium'>Shaping Zentry Collectively</h6>
                        {i == 1 &&
                                <p className='text-[11px] font-robert-regular w-64'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora minima officia corrupti in hic. Tempore dicta blanditiis nam officiis neque.</p>
                        }
                            </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default memo(ZentPin)