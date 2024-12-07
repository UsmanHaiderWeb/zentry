import React, { memo } from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-[#5542FF] pt-2 overflow-hidden'>
        <h1 className='w-full text-[37vw] leading-[30vw] MB:text-[55px] MB:leading-normal microMB:text-[55px] microMB:leading-normal text-center MB:text-left microMB:text-left MB:px-5 microMB:px-4 overflow-hidden origin-top font-zentry MB:mt-5 microMB:mt-5'>Zentry</h1>
        <div className='flex md:justify-start justify-center items-start gap-x-32 mt-10 MB:mt-5 microMB:mt-5 pb-20 pl-10 MB:pl-5 microMB:pl-4 md:pr-32 pr-10 MB:pr-5 microMB:pr-4'>
          <div className='md:block hidden'>
            <img src="/img/favicon.png" alt="logo" width={55} />
          </div>
          <div className='w-full flex justify-between items-start miniTB:flex-wrap MB:flex-wrap microMB:flex-col gap-5'>
            <div className='miniTB:w-[40%] MB:w-[180px] flex items-center md:items-start miniTB:items-start microMB:items-start MB:items-start flex-col'>
              <h6 className='font-robert-medium uppercase font-bold mb-5'>Explore</h6>
              <a href="/">Home</a>
              <a href="/">Prologue</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
            </div>
            <div className='miniTB:w-[40%] MB:w-[180px] flex items-center md:items-start miniTB:items-start microMB:items-start MB:items-start flex-col'>
              <h6 className='font-robert-medium uppercase font-bold mb-5'>Products</h6>
              <a href="/">Radiant</a>
              <a href="/">Nexus</a>
              <a href="/">Zigma</a>
              <a href="/">Azul</a>
            </div>
            <div className='miniTB:w-[40%] MB:w-[180px] flex items-center md:items-start miniTB:items-start microMB:items-start MB:items-start flex-col'>
              <h6 className='font-robert-medium uppercase font-bold mb-5'>Follow Us</h6>
              <a href="/">Twitter</a>
              <a href="/">Instagram</a>
              <a href="/">Facebook</a>
              <a href="/">Youtube</a>
              <a href="/">Vimeo</a>
            </div>
            <div className='miniTB:w-[40%] MB:w-[180px] flex items-center md:items-start miniTB:items-start microMB:items-start MB:items-start flex-col'>
              <h6 className='font-robert-medium uppercase font-bold mb-5'>Resources</h6>
              <a href="/">Media Kit</a>
              <a href="/">Medium</a>
            </div>
          </div>
        </div>
        <div className='between MB:center microMB:center MB:flex-col microMB:flex-col gap-y-1 px-10 pb-6'>
          <p className='text-[10px] font-robert-regular font-bold'>&copy; 2023 ZENTRY, ALL RIGHTS ARE RESERVED</p>
          <p className='text-[10px] font-robert-regular font-bold'>PRIVACY POLICY</p>
        </div>
    </footer>
  )
}

export default memo(Footer)