import React, { memo } from 'react';
import CardContent from './CardContent';
import Tilt from 'react-parallax-tilt';

const Card = ({ displayVideo, videoSrc, imgSrc, className, tiltMaxAngleX, tiltMaxAngleY }) => {
  return (
    <Tilt className={className} tiltMaxAngleX={tiltMaxAngleX || 20} tiltMaxAngleY={tiltMaxAngleY || 20}>
        <div className='simpleBorder text-[white] rounded-xl h-full overflow-hidden relative'>
            {displayVideo ?
                <video src={videoSrc} loop autoPlay muted loading="lazy" className='w-full h-full object-cover'></video>
            :
                <img src={imgSrc} loading="lazy" width={10} height={10} className='w-full h-full object-cover' />
            }
            <CardContent heading='nexus' para='An Anime and gaming inspired NFT collection - the Ip prime for Expansion' />
        </div>
    </Tilt>
  )
}

export default memo(Card)