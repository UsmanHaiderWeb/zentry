import React, { memo } from 'react'
import CardContent from '../CardContent'
import Tilt from 'react-parallax-tilt'
import { Send } from 'lucide-react'
import Card from '../Card'

const CardsSection = () => {
  return (
    <section className='bg-black pb-40 overflow-hidden'>
        <div className='md:px-20 sm:px-16 px-5 py-20'>
            <h6 className='font-robert-medium text-[15px] text-[#DFDFF2]'>Dive into the 'Games of Legends' Universe</h6>
            <p className='text-[13px] font-general opacity-60 w-[450px] max-w-[450px] miniTB:w-[80vw] MB:w-[88vw] microMB:w-full text-[#DFDFF2]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officiis, blanditiis illo laboriosam assumenda sit similique provident excepturi, perferendis asperiores, pariatur eos debitis! Sequi delectus vero doloremque, tempora praesentium excepturi.</p>
        </div>
        <div className='lg:w-[1000px] md:w-[95vw] sm:w-[92vw] tablet:w-[100dvw] miniTB:w-[100dvw] MB:w-[100dvw] microMB:w-[100dvw] grid grid-cols-1 sm:grid-cols-2 gap-5 MB:gap-3 microMB:gap-3 mx-auto sm:px-0 px-5'>
          <Card className='w-full min-h-[49vh] sm:col-span-2' displayVideo={false} imgSrc='/img/feature-1.webp' tiltMaxAngleX={5} tiltMaxAngleY={5} />
          <Card className='row-span-2 sm:block hidden' displayVideo={false} imgSrc='/img/feature-2.webp' tiltMaxAngleX={10} tiltMaxAngleY={10} />
          <Card className='w-full h-[49vh]' displayVideo={false} imgSrc='/img/feature-3.webp' />
          <Card className='w-full h-[49vh]' displayVideo={false} imgSrc='/img/feature-4.webp' />
          <Card className='w-full h-[49vh]' displayVideo={true} videoSrc='/videos/feature-5.mp4' />
          <Card className='w-full h-[49vh]' displayVideo={true} videoSrc='/videos/hero-2.mp4' />
        </div>
    </section>
  )
}

export default memo(CardsSection)