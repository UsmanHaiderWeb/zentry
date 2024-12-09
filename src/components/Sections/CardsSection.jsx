import React, { memo } from 'react'
import CardContent from '../CardContent'
import Tilt from 'react-parallax-tilt'
import { Send } from 'lucide-react'

const CardsSection = () => {
  return (
    <section className='bg-black pb-40 overflow-hidden'>
        <div className='md:px-20 sm:px-16 px-5 py-20'>
            <h6 className='font-robert-medium text-[15px] text-[#DFDFF2]'>Dive into the 'Games of Legends' Universe</h6>
            <p className='text-[13px] font-general opacity-60 w-[450px] max-w-[450px] miniTB:w-[80vw] MB:w-[88vw] microMB:w-full text-[#DFDFF2]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officiis, blanditiis illo laboriosam assumenda sit similique provident excepturi, perferendis asperiores, pariatur eos debitis! Sequi delectus vero doloremque, tempora praesentium excepturi.</p>
        </div>
        <div className='lg:w-[1000px] md:w-[95vw] sm:w-[92vw] tablet:w-[100dvw] miniTB:w-[100dvw] MB:w-[100dvw] microMB:w-[100dvw] grid grid-cols-1 sm:grid-cols-2 gap-5 MB:gap-3 microMB:gap-3 mx-auto sm:px-0 px-5'>
          <Tilt className='w-full sm:col-span-2' tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className='simpleBorder w-full h-[49vh] sm:h-auto rounded-xl overflow-hidden md:pl-40 relative'>
              <img src="/img/feature-1.webp" loop muted autoPlay loading="lazy" className='h-full w-full object-cover' />
              <CardContent />
            </div>
          </Tilt>
          <Tilt className='row-span-2 sm:block hidden' tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className='simpleBorder text-[white] h-screen rounded-xl overflow-hidden relative'>
              <img src="/img/feature-2.webp" loop autoPlay muted loading="lazy" className='w-full h-full object-cover' />
              <CardContent heading='zigma' para='An Anime and gaming inspired NFT collection - the Ip prime for Expansion' />
            </div>
          </Tilt>
          <Tilt className='w-full h-[49vh]'>
            <div className='simpleBorder text-[white] rounded-xl h-full max-h-[49vh] overflow-hidden relative'>
              <img src="/img/feature-3.webp" loop autoPlay muted loading="lazy" className='w-full h-full object-cover' />
              <CardContent heading='nexus' para='An Anime and gaming inspired NFT collection - the Ip prime for Expansion' />
            </div>
          </Tilt>
          <Tilt className='w-full h-[49vh]'>
            <div className='simpleBorder text-[white] rounded-xl h-full max-h-[49vh] overflow-hidden relative'>
              <img src="/img/feature-4.webp" loop autoPlay muted loading="lazy" className='w-full h-full object-cover' />
              <CardContent heading='zigma' para='An Anime and gaming inspired NFT collection - the Ip prime for Expansion' />
            </div>
          </Tilt>
          <Tilt className='w-full h-[49vh]'>
            <div className='simpleBorder bg-[#5724ff] rounded-xl h-full max-h-[49vh] overflow-hidden relative flex flex-col justify-between p-5'>
              <h2 className='font-zentry text-[60px] leading-[50px] w-48 overflow-hidden'>MORE Coming Soon</h2>
              <button className='center gap-x-2 text-[10px] opacity-80 px-5  rounded-[50px] text-[#DFDFF2] border-[#DFDFF2] border-[1px] border-solid border-opacity-10 hover:bg-[#DFDFF2] hover:text-black py-2 duration-100 self-end'><Send size={10} /> Coming Soon</button>
            </div>
          </Tilt>
          <Tilt className='w-full h-[49vh]'>
            <div className='simpleBorder text-[white] rounded-xl h-full max-h-[49vh] overflow-hidden relative'>
              <video src="/videos/hero-2.mp4" loop autoPlay muted loading="lazy" className='w-full h-full object-cover'></video>
              <CardContent heading='radiant' para='An Anime and gaming inspired NFT collection - the Ip prime for Expansion' />
            </div>
          </Tilt>
        </div>
    </section>
  )
}

export default memo(CardsSection)