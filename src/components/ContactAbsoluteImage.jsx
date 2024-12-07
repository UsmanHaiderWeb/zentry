import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { memo, useRef } from 'react'

const ContactAbsoluteImage = ({ className , imageURL, howToAnimate, startingPoint}) => {
    const imageConRef = useRef(null);

    useGSAP(() => {
        gsap.from(imageConRef.current, {
            ...howToAnimate,
            scrollTrigger: {
                trigger: imageConRef.current,
                scroller: 'body',
                start: `top ${startingPoint}`,
                end: 'bottom -1200vh',
                toggleActions: 'play reverse play reverse',
                // markers: true
            }
        })
    }, [])

  return (
    <div ref={imageConRef} className={className}>
        <img src={imageURL} alt="contact image" className='w-full h-full object-cover' />
    </div>
  )
}

export default memo(ContactAbsoluteImage)