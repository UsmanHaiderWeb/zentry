import { memo } from 'react'
import SkewButton from './SkewButton'

const Header = () => {
  return (
    <header className='absolute z-[10] top-0 left-0 w-full'>
        <nav className='between px-10 miniTB:px-5 MB:px-5 microMB:px-4 py-5'>
            <div className='center gap-x-5'>
                <a href='/'>
                    <img src="/img/favicon.png" alt="Logo" className='w-10' />
                </a>
                <div className='md:center gap-x-3 hidden'>
                    <SkewButton content='Products' />
                    <SkewButton content='Whitepaper' />
                </div>
            </div>
            <div className='sm:center hidden gap-x-2'>
                <button className='text-[10px] text-white hover:text-black duration-100 ease-in font-robert-medium uppercase px-5 py-1.5 rounded-[50px] hover:bg-[#DFDFF2] tracking-wide'>Nexus</button>
                <button className='text-[10px] text-white hover:text-black duration-100 ease-in font-robert-medium uppercase px-5 py-1.5 rounded-[50px] hover:bg-[#DFDFF2] tracking-wide'>Vault</button>
                <button className='text-[10px] text-white hover:text-black duration-100 ease-in font-robert-medium uppercase px-5 py-1.5 rounded-[50px] hover:bg-[#DFDFF2] tracking-wide'>Prologue</button>
                <button className='text-[10px] text-white hover:text-black duration-100 ease-in font-robert-medium uppercase px-5 py-1.5 rounded-[50px] hover:bg-[#DFDFF2] tracking-wide'>About</button>
                <button className='text-[10px] text-white hover:text-black duration-100 ease-in font-robert-medium uppercase px-5 py-1.5 rounded-[50px] hover:bg-[#DFDFF2] tracking-wide'>Contact us</button>
            </div>
            <div className='sm:hidden center gap-x-4'>
                <div className='center gap-x-3 MB:hidden microMB:hidden'>
                    <SkewButton content='Products' />
                    <SkewButton content='Whitepaper' />
                </div>
                <div className='relative flex justify-center items-center pb-2 h-[50px] px-2 cursor-pointer' onClick={() => {
                    // i.toggleSideBar(!!true);
                    window.scrollTo(0, 0);
                }}>
                    <div className='w-[30px] micro:w-[25px] flex flex-col items-center justify-center relative pointer-events-none'>
                        <div className={`${!true ? "rotate-[-45deg] origin-right -translate-x-1" : "rotate-[0deg] origin-right"} w-[20px] micro:w-4 h-[2px] mb-[6px] bg-white duration-300`}></div>
                        <div className={`${!true ? "rotate-[45deg] origin-right -translate-x-1" : "rotate-[0deg] origin-right"} w-[20px] micro:w-4 h-[2px] bg-white duration-300`}></div>
                    </div>
                    <svg className="absolute top-0 left-0" width="21" height="44" viewBox="0 0 21 44">
                        <path fill="none" stroke='white' strokeWidth="2" d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"></path>
                    </svg>
                    <svg className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]" height="44" viewBox="0 0 100 44" preserveAspectRatio="none" fill="none">
                        <polygon fillRule="nonzero" fill='white' points="100 42 100 44 0 44 0 42"></polygon><polygon fillRule="nonzero" fill='white' points="100 0 100 2 0 2 0 0"></polygon>
                    </svg>
                    <svg className="absolute top-0 right-0" width="21" height="44" viewBox="0 0 21 44">
                        <path fill="none" stroke="white" strokeWidth="2" d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"></path>
                    </svg>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default memo(Header)