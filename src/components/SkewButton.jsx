import React, { memo } from 'react'

const SkewButton = ({content, link}) => {
  return (
    <button className='text-[10px] font-robert-medium uppercase px-5 py-1.5 hover:py-2 hover:skew-x-[4deg] rounded-[50px] hover:rounded-md duration-100 ease-out bg-[#DFDFF2]'>{ content }</button>
  )
}

export default memo(SkewButton)