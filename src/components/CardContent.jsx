import React, { memo } from 'react'
import ButtonWithSendIcon from './ButtonWithSendIcon'

const CardContent = ({heading, para}) => {
  return (
    <div className='flex justify-between items-start flex-col absolute top-0 left-0 w-full h-full px-5 pb-5'>
      <div>
          <h3 className='text-[50px] font-zentry text-[#DFDFF2]'>{heading || 'Radiant'}</h3>
          <p className='text-[12px] w-48 text-[#DFDFF2]'>{para || 'A cross-platform metagame app, turning your activities across Web2 and Web3 gamesinto a rewarding adventure.'}</p>
      </div>
      <ButtonWithSendIcon content='Coming Soon' transparent={true} theme='dark' />
    </div>
  )
}

export default memo(CardContent)