import { Send } from 'lucide-react'
import React, { memo } from 'react'
import ContactAbsoluteImage from '../ContactAbsoluteImage'
import Tilt from 'react-parallax-tilt'
import AnimateHeadings from '../AnimateHeadings'

const ContactSection = () => {
  return (
    <Tilt className='center pb-8 mt-24' tiltMaxAngleX={5} tiltMaxAngleY={5}>
        <div className='center flex-col w-[94vw] h-[550px] bg-black rounded-xl overflow-hidden relative'>
            <h5 className='text-[12px] font-general uppercase text-center text-blue-75 relative z-[3]'>the open ip universe</h5>
            <AnimateHeadings startingPoint='93%' className='md:w-[600px] sm:w-[550px] tablet:w-[500px] miniTB:w-[400px] MB:w-[330px] microMB:max-w-[280px] microMB:w-[80vw] mx-auto relative z-[6]'>
              <h2 className='w-full font-zentry md:text-[90px] md:leading-[75px] sm:text-[75px] sm:leading-[60px] tablet:text-[65px] tablet:leading-[55px] miniTB:text-[55px] miniTB:leading-[45px] MB:text-[50px] MB:leading-[40px] microMB:text-[40px] microMB:leading-[35px] text-center my-8 text-blue-75 stroke-black stroke-[1px]' style={{WebkitTextStrokeWidth: '1px black'}}>Lets build the new era of gaming together.</h2>
            </AnimateHeadings>
            <button className='center gap-x-2 text-[10px] opacity-100 px-5  rounded-[50px] border-[1px] border-solid py-2 duration-100 hover:bg-black bg-[#DFDFF2]  text-black hover:text-white border-[#DFDFF2] border-opacity-10 relative z-[6]'><Send size={10} /> Contact Us</button>
            <ContactAbsoluteImage className='absolute -top-20 lg:left-60 left-16 w-48 h-60 rounded-xl -rotate-12 overflow-hidden md:opacity-100 opacity-50' imageURL="/img/contact-1.webp" howToAnimate={{duration: .5, y: '-100%', rotate: 0}} startingPoint='20%' />
            <ContactAbsoluteImage className='absolute -bottom-20 lg:left-60 left-16 w-48 h-60 rounded-xl -rotate-12 overflow-hidden md:opacity-100 opacity-50' imageURL="/img/contact-2.webp" howToAnimate={{duration: .5, y: '100%', rotate: 0}} startingPoint='110%' />
            <ContactAbsoluteImage className='absolute top-0 lg:right-32 right-3 w-64 h-2/3 rounded-xl rotate-12 overflow-hidden md:opacity-100 opacity-50' imageURL="/img/swordman.webp" howToAnimate={{duration: .5, x: '200%', rotate: 0}} startingPoint='50%' />
        </div>
    </Tilt>
  )
}

export default memo(ContactSection)