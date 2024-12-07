import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { memo, useRef } from 'react'

const AnimateHeadings = ({ children, animationDirection, startingPoint, opacity, className }) => {
    const headingCon = useRef(null);

    useGSAP(() => {
        gsap.from(headingCon.current, {
            opacity: opacity || 1,
            z: '-59.3966px',
            x: `${animationDirection == 'right' ? '' : '-'}107.977px`,
            y: '51.303px',
            rotateY: '50deg',
            rotateX: '-20deg',
            scrollTrigger: {
                trigger: headingCon.current,
                scroller: 'body',
                start: `top ${startingPoint || '85%'}`,
                end: 'top -1200vh',
                toggleActions: 'play reverse play reverse'
            }
        })
    }, [])

  return (
    <div ref={headingCon} className={`center flex-col  ${className || 'w-max mx-auto'}`} style={{transformOrigin: '398.234px 72.5625px'}}>{ children }</div>
  )
}

export default memo(AnimateHeadings)