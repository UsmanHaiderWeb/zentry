import { Send } from 'lucide-react'
import React, { memo } from 'react'

const ButtonWithSendIcon = ({theme = 'light', link, content, zIndex, transparent}) => {
  return (<>
    {transparent ?
        <button className={`w-max center gap-x-2 text-[10px] opacity-100 px-5 rounded-[50px] border-[1px] border-solid py-2 duration-100 relative ${zIndex} bg-transparent ${theme == 'dark' ? 'hover:bg-blue-75 hover:text-black border-blue-75 border-opacity-100' : 'hover:bg-zinc-900 hover:text-white border-black border-opacity-100'} text-blue-75`}><Send size={10} /> {content}</button>
    :
        <button className={`w-max center gap-x-2 text-[10px] opacity-100 px-5 rounded-[50px] border-[1px] border-solid py-2 duration-100 relative ${zIndex} ${theme == 'dark' ? ' hover:bg-black bg-[#DFDFF2]  text-black hover:text-white border-[#DFDFF2] border-opacity-10' : ' hover:bg-blue-75 bg-zinc-950  text-blue-75 hover:text-black border-black border-opacity-100'}`}><Send size={10} /> {content}</button>
    }
</>)}

export default memo(ButtonWithSendIcon)