import React, { memo } from 'react'
import Tilt from 'react-parallax-tilt'
import { Send } from 'lucide-react'

const StickyContentSection = ({setTheme}) => {
  return (
    <div className='w-full relative min-h-screen'>
        <div className='w-full min-h-screen relative flex sm:justify-between sm:items-start items-center sm:flex-row flex-col pt-40 pb-28 lg:px-20 px-10 miniTB:px-5 MB:px-5 microMB:px-4 bg-blue-75 gap-y-10'>
            <div className='sticky top-10 w-max flex-col flex sm:items-start items-center'>
                <h5 className='text-[12px] font-general uppercase'>Welcome To Zent</h5>
                <h2 className='w-[400px] md:w-[400px] sm:w-[250px] font-zentry md:text-[100px] md:leading-[85px] sm:text-[85px] sm:leading-[70px] tablet:text-[75px] tablet:leading-[65px] miniTB:text-[75px] miniTB:leading-[65px] MB:text-[55px] MB:leading-[45px] microMB:text-[45px] microMB:leading-[40px] my-5 sm:text-left text-center'>Latest Updates</h2>
                <p className='w-[400px] md:w-[400px] sm:w-[300px] MB:max-w-[400px] MB:w-[85vw] microMB:max-w-[320px] microMB:w-[92vw] text-[14px] leading-[18px] opacity-75 font-robert-regular mb-5 sm:text-left text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat aperiam ipsum molestiae earum, adipisci aliquid nemo, similique autem aspernat.</p>
                <button className='center gap-x-2 text-[10px] opacity-100 px-5  rounded-[50px] border-[1px] border-solid py-2 duration-100 hover:bg-blue-75 bg-zinc-950  text-blue-75 hover:text-black border-black border-opacity-100'><Send size={10} /> Discover Prologue</button>
            </div>
            <div className='lg:pr-14 md:pr-4 bg-blue-75 relative z-[5]'>
                <Tilt>
                    <div className='md:w-[500px] sm:w-[48vw] MB:w-[90vw] microMB:w-[90vw] rounded-xl overflow-hidden'>
                        <img src="/img/gallery-2.webp" alt="Stone image" className='w-full h-72 rounded-xl object-cover border-solid border-[2px] border-black border-opacity-25' />
                        <div className='flex items-start gap-x-10 px-2 mt-5'>
                            <p className='text-[10px]'>19.05.2024</p>
                            <h6 className='w-60 leading-[18px] font-robert-medium'>Welcome Nexus: Zentry's Social Gateway</h6>
                        </div>
                    </div>
                </Tilt>
                <Tilt>
                    <div className='md:w-[500px] sm:w-[48vw] MB:w-[90vw] microMB:w-[90vw] rounded-xl overflow-hidden mt-10'>
                        <img src="/img/gallery-3.webp" alt="Stone image" className='w-full h-72 rounded-xl object-cover border-solid border-[2px] border-black border-opacity-25' />
                        <div className='flex items-start gap-x-10 px-2 mt-5'>
                            <p className='text-[10px]'>19.05.2024</p>
                            <h6 className='w-60 leading-[18px] font-robert-medium'>Introducing Zentry: Metagame Universe Layer</h6>
                        </div>
                    </div>
                </Tilt>
                <Tilt>
                    <div className='md:w-[500px] sm:w-[48vw] MB:w-[90vw] microMB:w-[90vw] rounded-xl overflow-hidden mt-10'>
                        <img src="/img/entrance.webp" alt="Stone image" className='w-full h-72 rounded-xl object-cover border-solid border-[2px] border-black border-opacity-25' />
                        <div className='flex items-start gap-x-10 px-2 mt-5'>
                            <p className='text-[10px]'>19.05.2024</p>
                            <h6 className='w-60 leading-[18px] font-robert-medium'>Welcome Nexus: Zentry's Social Gateway</h6>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    </div>
  )
}

export default memo(StickyContentSection)