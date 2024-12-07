import { memo, useRef } from 'react'
import BackgroundVideoEffect from '../BackgroundVideoEffect'
import { Send } from 'lucide-react'
import gsap from 'gsap'
import _ScrollTrigger, { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { clamp } from 'gsap/gsap-core'
const HeroSection = () => {
    gsap.registerPlugin(ScrollTrigger);

    const heroRef = useRef(null);
    const heroTextRef = useRef(null);

    useGSAP(() => {
        gsap.to(heroRef.current, {
            clipPath: 'polygon(20% 0%, 80% 0%, 90% 100%, 11% 88%)',
            // rotate: 15,
            y: -150,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: heroRef.current,
                scroller: 'body',
                start: clamp('top top'),
                end: clamp('bottom -100%'),
                scrub: true,
                onUpdate: (prop) => prop.progress == 0 && ScrollTrigger.refresh(),
                onEnter: () => ScrollTrigger.refresh(),
                onEnterBack: () => ScrollTrigger.refresh(),
            }
        })
        gsap.to(heroTextRef.current, {
            // rotate: -15,
            y: 150,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: heroRef.current,
                scroller: 'body',
                start: clamp('top top'),
                end: clamp('bottom -100%'),
                scrub: true
            }
        })
    }, []);

  return (
    <div className='w-full h-screen overflow-hidden relative bg-blue-75'>
        <div ref={heroRef} className='w-full h-full overflow-hidden relative z-[4]' style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}>
            <BackgroundVideoEffect />
            <div ref={heroTextRef} className='w-full h-full flex justify-between items-start flex-col relative z-[5] pt-24 pointer-events-none'>
                <div className='w-full pl-10 miniTB:pl-5 MB:pl-5 microMB:pl-4'>
                    <h1 className='uppercase font-zentry md:text-[170px] md:leading-[140px] text-[140px] leading-[120px] miniTB:text-[100px] miniTB:leading-[80px] MB:text-[100px] MB:leading-[80px] microMB:text-[80px] microMB:leading-[65px] overflow-hidden text-[#DFDFF2]'>Redefine</h1>
                    <p className='text-[#DFDFF2] font-circular-web leading-[18px] text-[16px] mt-5'>Enter the Metagame <br /> Unleash the Play Economy</p>
                    <button className='flex items-center bg-[#F1FF7E] gap-x-2 px-5 py-2.5 hover:py-3.5 rounded-xl hover:rounded-md text-[10px] leading-[10px] font-robert-medium uppercase mt-5 hover:skew-x-6 pointer-events-auto duration-150 outline-none border-none'><Send size={15} /> Watch Trailer</button>
                </div>
                <h1 className='uppercase font-zentry md:text-[170px] md:leading-[140px] text-[140px] leading-[120px] miniTB:text-[100px] miniTB:leading-[80px] MB:text-[100px] MB:leading-[80px] microMB:text-[80px] microMB:leading-[65px] overflow-hidden text-[#DFDFF2] self-end pb-8 pr-10 miniTB:pr-5 MB:pr-5 microMB:pr-4'>gaming</h1>
            </div>
        </div>
        <div className='w-full h-full flex justify-between items-start flex-col absolute top-0 left-0 z-[1] pt-24 pointer-events-none'>
            <div></div>
            <h1 className='uppercase font-zentry md:text-[170px] md:leading-[140px] text-[140px] leading-[120px] miniTB:text-[100px] miniTB:leading-[80px] MB:text-[100px] MB:leading-[80px] microMB:text-[80px] microMB:leading-[65px] overflow-hidden text-black self-end pb-8 pr-10 miniTB:pr-5 MB:pr-5 microMB:pr-4'>gaming</h1>
        </div>
    </div>
  )
}

export default memo(HeroSection)