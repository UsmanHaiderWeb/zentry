import { useRef } from "react"

export const useAudio = (url) => {
    const audio = useRef(new Audio(url));
    let isplaying = false;

    const playAudio = () => {
        audio.current.play();
        isplaying = true;
        setTimeout(() => {
            if(isplaying){
                audio.current.pause();
                audio.current.currentTime = 0;
            }
        }, 900);
    }
    const pauseAudio = () => {
        audio.current.pause();
        audio.current.currentTime = 0;
        isplaying = false;
    }

    return { playAudio, pauseAudio };
}