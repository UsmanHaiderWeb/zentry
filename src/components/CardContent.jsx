import React, { memo } from 'react'
import { Send } from 'lucide-react'

const CardContent = ({heading, para}) => {
  return (
    <div className='flex justify-between items-start flex-col absolute top-0 left-0 w-full h-full px-5 pb-5'>
        <div>
            <h3 className='text-[50px] font-zentry text-[#DFDFF2]'>{heading || 'Radiant'}</h3>
            <p className='text-[12px] w-48 text-[#DFDFF2]'>{para || 'A cross-platform metagame app, turning your activities across Web2 and Web3 gamesinto a rewarding adventure.'}</p>
        </div>
        <button className='center gap-x-2 text-[10px] opacity-80 px-5  rounded-[50px] text-[#DFDFF2] border-[#DFDFF2] border-[1px] border-solid border-opacity-10 hover:bg-[#DFDFF2] hover:text-black py-2 duration-100'><Send size={10} /> Coming Soon</button>
    </div>
  )
}

export default memo(CardContent)