import React, { memo, useRef, useState } from 'react'
import Tilt from 'react-parallax-tilt'


const BackgroundVideoEffect = () => {
    const [ bgVideoStates, updateState ] = useState({
        currentVideoNum: 1,
        tiltVideo1: false,
        tiltVideo2: true,   
        tiltVideo3: false,
        tiltVideo4: false,
        isClicked2: false,
    });

    const video1 = useRef(null);
    const videoCon1 = useRef(null);
    const videoTiltCon1 = useRef(null);
    const video2 = useRef(null);
    const videoCon2 = useRef(null);
    const videoTiltCon2 = useRef(null);
    const video3 = useRef(null);
    const videoCon3 = useRef(null);
    const videoTiltCon3 = useRef(null);
    const video4 = useRef(null);
    const videoCon4 = useRef(null);
    const videoTiltCon4 = useRef(null);

    const nextvideo = () => {
        if(bgVideoStates.currentVideoNum == 1){
            videoCon2.current.classList.remove('w-60');
            videoCon2.current.classList.remove('h-60');
            videoCon2.current.classList.remove('pointer-events-auto');
            videoCon2.current.classList.add('w-full');
            videoCon2.current.classList.add('h-full');
            videoCon2.current.classList.add('pointer-events-none');
            video2.current.classList.add('rounded-none');
            video2.current.classList.remove('rounded-xl');
            
            setTimeout(() => {
                videoCon3.current.classList.remove('w-0');
                videoCon3.current.classList.remove('h-0');
                videoCon3.current.classList.remove('pointer-events-none');
                videoCon3.current.classList.add('w-60');
                videoCon3.current.classList.add('h-60');
                videoCon3.current.classList.add('pointer-events-auto');
                video3.current.classList.add('rounded-xl');
                video3.current.classList.remove('rounded-none');
            }, 300);
            
            setTimeout(() => {
                video2.current.play();

                videoCon1.current.classList.remove('w-full');
                videoCon1.current.classList.remove('h-full');
                videoCon1.current.classList.add('w-0');
                videoCon1.current.classList.add('h-0');
                video1.current.pause();
                video1.current.currentTime = 0;
                updateState(prev => ({...prev, currentVideoNum: 2}));
            }, 1010);

            setTimeout(() => {
                videoCon1.current.style.zIndex = 5;
                videoCon4.current.style.zIndex = 4;
                videoCon3.current.style.zIndex = 3;
                videoCon2.current.style.zIndex = 2;
            }, 2500);
        } else if(bgVideoStates.currentVideoNum == 2){
            videoCon3.current.classList.remove('w-60');
            videoCon3.current.classList.remove('h-60');
            videoCon3.current.classList.remove('pointer-events-auto');
            videoCon3.current.classList.add('w-full');
            videoCon3.current.classList.add('h-full');
            videoCon3.current.classList.add('pointer-events-none');
            video3.current.classList.add('rounded-none');
            video3.current.classList.remove('rounded-xl');
            
            setTimeout(() => {
                videoCon4.current.classList.remove('w-0');
                videoCon4.current.classList.remove('h-0');
                videoCon4.current.classList.remove('pointer-events-none');
                videoCon4.current.classList.add('w-60');
                videoCon4.current.classList.add('h-60');
                videoCon4.current.classList.add('pointer-events-auto');
                video4.current.classList.add('rounded-xl');
                video4.current.classList.remove('rounded-none');
            }, 300);
            
            setTimeout(() => {
                video3.current.play();

                videoCon2.current.classList.remove('w-full');
                videoCon2.current.classList.remove('h-full');
                videoCon2.current.classList.add('w-0');
                videoCon2.current.classList.add('h-0');
                video2.current.pause();
                video2.current.currentTime = 0;
                updateState(prev => ({...prev, currentVideoNum: 3}));
            }, 1010);
            
            setTimeout(() => {
                videoCon2.current.style.zIndex = 5;
                videoCon1.current.style.zIndex = 4;
                videoCon4.current.style.zIndex = 3;
                videoCon3.current.style.zIndex = 2;
            }, 2500);
        } else if(bgVideoStates.currentVideoNum == 3){
            videoCon4.current.classList.remove('w-60');
            videoCon4.current.classList.remove('h-60');
            videoCon4.current.classList.remove('pointer-events-auto');
            videoCon4.current.classList.add('w-full');
            videoCon4.current.classList.add('h-full');
            videoCon4.current.classList.add('pointer-events-none');
            video4.current.classList.add('rounded-none');
            video4.current.classList.remove('rounded-xl');
            
            setTimeout(() => {
                videoCon1.current.classList.remove('w-0');
                videoCon1.current.classList.remove('h-0');
                videoCon1.current.classList.remove('pointer-events-none');
                videoCon1.current.classList.add('w-60');
                videoCon1.current.classList.add('h-60');
                videoCon1.current.classList.add('pointer-events-auto');
                video1.current.classList.add('rounded-xl');
                video1.current.classList.remove('rounded-none');
            }, 300);
            
            setTimeout(() => {
                video4.current.play();

                videoCon3.current.classList.remove('w-full');
                videoCon3.current.classList.remove('h-full');
                videoCon3.current.classList.add('w-0');
                videoCon3.current.classList.add('h-0');
                video3.current.pause();
                video3.current.currentTime = 0;
                updateState(prev => ({...prev, currentVideoNum: 4}));
            }, 1010);
            
            setTimeout(() => {
                videoCon3.current.style.zIndex = 5;
                videoCon2.current.style.zIndex = 4;
                videoCon1.current.style.zIndex = 3;
                videoCon4.current.style.zIndex = 2;
            }, 2500);
        } else {
            videoCon1.current.classList.remove('w-60');
            videoCon1.current.classList.remove('h-60');
            videoCon1.current.classList.remove('pointer-events-auto');
            videoCon1.current.classList.add('w-full');
            videoCon1.current.classList.add('h-full');
            videoCon1.current.classList.add('pointer-events-none');
            video1.current.classList.add('rounded-none');
            video1.current.classList.remove('rounded-xl');
            
            setTimeout(() => {
                videoCon2.current.classList.remove('w-0');
                videoCon2.current.classList.remove('h-0');
                videoCon2.current.classList.remove('pointer-events-none');
                videoCon2.current.classList.add('w-60');
                videoCon2.current.classList.add('h-60');
                videoCon2.current.classList.add('pointer-events-auto');
                video2.current.classList.add('rounded-xl');
                video2.current.classList.remove('rounded-none');
            }, 300);
            
            setTimeout(() => {
                video1.current.play();

                videoCon4.current.classList.remove('w-full');
                videoCon4.current.classList.remove('h-full');
                videoCon4.current.classList.add('w-0');
                videoCon4.current.classList.add('h-0');
                video4.current.pause();
                video4.current.currentTime = 0;
                updateState(prev => ({...prev, currentVideoNum: 1}));
            }, 1010);
            
            setTimeout(() => {
                videoCon4.current.style.zIndex = 5;
                videoCon3.current.style.zIndex = 4;
                videoCon2.current.style.zIndex = 3;
                videoCon1.current.style.zIndex = 2;
            }, 2500);
        }
    }

    return (<>
        <div className="w-screen h-screen absolute top-0 left-0 overflow-hidden z-[1]">
            <div ref={videoCon1} className='absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 duration-1000 ease-out pointer-events-none' onClick={() => {
                nextvideo();
                updateState(prev => ({...prev, tiltVideo1: false, tiltVideo2: true}));
                videoTiltCon1.current.tilt.tiltAngleX = 0;
                videoTiltCon1.current.tilt.tiltAngleXPercentage = 0;
                videoTiltCon1.current.tilt.tiltAngleY = 0;
                videoTiltCon1.current.tilt.tiltAngleYPercentage = 0;
            }}>
                <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} ref={videoTiltCon1} tiltEnable={bgVideoStates.tiltVideo1} className='w-full h-full duration-1000 ease-out center'>
                    <video ref={video1} src='/videos/hero-1.mp4' autoPlay muted loop className='w-full h-full object-cover'></video>
                </Tilt>
            </div>
            <div ref={videoCon2} className='absolute top-1/2 left-1/2 w-60 h-60 -translate-x-1/2 -translate-y-1/2 duration-1000 ease-out' onClick={() => {
                nextvideo();
                updateState(prev => ({...prev, tiltVideo2: false, tiltVideo3: true, isClicked2: true}));
                videoTiltCon2.current.tilt.tiltAngleX = 0;
                videoTiltCon2.current.tilt.tiltAngleXPercentage = 0;
                videoTiltCon2.current.tilt.tiltAngleY = 0;
                videoTiltCon2.current.tilt.tiltAngleYPercentage = 0;
                video2.current.style.width = '100%';
                video2.current.style.height = '100%';
            }} onMouseEnter={() => {
                video2.current.style.width = '240px';
                video2.current.style.height = '240px';
            }} onMouseLeave={() => {
                if(!bgVideoStates.isClicked2){
                    video2.current.style.width = '0px';
                    video2.current.style.height = '0px';
                }
            }}>
                <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} ref={videoTiltCon2} tiltEnable={bgVideoStates.tiltVideo2} className='w-full h-full duration-1000 ease-out center'>
                    <video ref={video2} src={`/videos/hero-2.mp4`} muted loop className='w-0 h-0 object-cover rounded-xl duration-300 ease-out'></video>
                </Tilt>
            </div>
            <div ref={videoCon3} className='absolute top-1/2 left-1/2 w-0 h-0 -translate-x-1/2 -translate-y-1/2 duration-1000 ease-out' onClick={() => {
                nextvideo();
                updateState(prev => ({...prev, tiltVideo3: false, tiltVideo4: true}));
                videoTiltCon3.current.tilt.tiltAngleX = 0;
                videoTiltCon3.current.tilt.tiltAngleXPercentage = 0;
                videoTiltCon3.current.tilt.tiltAngleY = 0;
                videoTiltCon3.current.tilt.tiltAngleYPercentage = 0;
            }}>
                <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} ref={videoTiltCon3} tiltEnable={bgVideoStates.tiltVideo3} className='w-full h-full duration-1000 ease-out center'>
                    <video ref={video3} src={`/videos/hero-3.mp4`} muted loop className='w-full h-full object-cover rounded-xl duration-1000 ease-out'></video>
                </Tilt>
            </div>
            <div ref={videoCon4} className='absolute top-1/2 left-1/2 w-0 h-0 -translate-x-1/2 -translate-y-1/2 duration-1000 ease-out' onClick={() => {
                nextvideo();
                updateState(prev => ({...prev, tiltVideo4: false, tiltVideo1: true}));
                videoTiltCon4.current.tilt.tiltAngleX = 0;
                videoTiltCon4.current.tilt.tiltAngleXPercentage = 0;
                videoTiltCon4.current.tilt.tiltAngleY = 0;
                videoTiltCon4.current.tilt.tiltAngleYPercentage = 0;
            }}>
                <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} ref={videoTiltCon4} tiltEnable={bgVideoStates.tiltVideo4} className='w-full h-full duration-1000 ease-out center'>
                    <video ref={video4} src={`/videos/hero-4.mp4`} muted loop className='w-full h-full object-cover rounded-xl duration-1000 ease-out'></video>
                </Tilt>
            </div>
        </div>
</>)}


export default memo(BackgroundVideoEffect)