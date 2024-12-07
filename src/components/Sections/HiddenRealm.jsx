import { Send } from 'lucide-react'
import React, { memo } from 'react'
import Tilt from 'react-parallax-tilt'
import AnimateHeadings from '../AnimateHeadings'

const HiddenRealm = ({ themeRef }) => {
  return (
    <div className={`${themeRef == 'dark' ? 'bg-black' : 'bg-yellow-300'} text-blue-75 min-h-screen pt-10 relative`}>
        <h5 className='text-[12px] font-general uppercase text-center text-blue-75 relative z-[3]'>the open ip universe</h5>
        <AnimateHeadings animationDirection='right'>
          <h2 className='w-[550px] miniTB:w-[90dvw] MB:w-[100dvw] microMB:w-[100dvw] miniTB:px-10 MB:px-5 microMB:px-5 mx-auto font-zentry md:text-[100px] md:leading-[85px] sm:text-[85px] sm:leading-[70px] tablet:text-[75px] tablet:leading-[65px] miniTB:text-[65px] miniTB:leading-[55px] MB:text-[55px] MB:leading-[45px] microMB:text-[45px] microMB:leading-[40px] text-center mt-8 text-blue-75 relative z-[3] stroke-black stroke-[1px]' style={{WebkitTextStrokeWidth: '1px black'}}>The story of a hidden realm</h2>
        </AnimateHeadings>
        <div className='absolute bottom-48 miniTB:bottom-24 MB:bottom-24 microMB:bottom-16 right-20 MB:right-5 microMB:right-5 z-[4] flex flex-col MB:items-end microMB:items-end'>
            <p className={`text-[12px] w-[300px] microMB:w-[80vw] microMB:max-w-[300px] microMB:text-right MB:text-right ${themeRef == 'dark' ? 'text-blue-75' : 'text-black'} mb-2`}>A cross-platform metagame app, turning your activities across Web2 and Web3 gamesinto a rewarding adventure.</p>
            <button className={`w-max center gap-x-2 text-[10px] opacity-100 px-5  rounded-[50px] border-[1px] border-solid py-2 duration-100 ${themeRef == 'dark' ? ' hover:bg-black bg-[#DFDFF2]  text-black hover:text-white border-[#DFDFF2] border-opacity-10' : ' hover:bg-blue-75 bg-zinc-950  text-blue-75 hover:text-black border-black border-opacity-100'}`}><Send size={10} /> Discover Prologue</button>
        </div>
        <Tilt>
          <div className='-mt-14 tablet:-mt-8 miniTB:-mt-5 MB:-mt-6 microMB:-mt-4 relative z-[2] sm:w-[1360px] tablet:w-[1100px] miniTB:w-[900px] MB:w-[900px] microMB:w-[220vw] left-1/2 -translate-x-1/2' style={{clipPath: 'polygon(28% 0, 68% 12%, 74% 50%, 29% 60%)'}}>
            <img src="/img/entrance.webp" alt="hidden-realm" className='w-full h-full object-cover' />
          </div>
        </Tilt>
    </div>
  )
}

export default memo(HiddenRealm)