import React, { MouseEvent, useEffect, useRef, useState } from "react";
import styles from './SpellVideo.module.css'
import { SpellVideoProps } from "./SpellVideo.props";
import Image from "next/image";

const SpellVideo = ({ button, ChampKey, ...props }: SpellVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPause, setIsPause] = useState<boolean>(true)
    const [isHideToolBar, setIsHideToolBar] = useState<boolean>(false)
    const [currentTime, setCurrentTime] = useState<number>(0)
    useEffect(() => {
        videoRef.current?.play()
        return () => {
            videoRef.current?.pause()
        }
    }, [])
    useEffect(() => {
        const timer = setInterval(() => {
            isPause && setCurrentTime(currentTime + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    })
    const changePause = (): void => {
        setIsPause(!isPause)
        if (isPause) {
            videoRef.current?.pause()
        }
        else {
            videoRef.current?.play()
        }
    }
    const hideToolBar = (e: MouseEvent) => {
        e.preventDefault()
        setIsHideToolBar(!isHideToolBar)
    }
    const endVideo = () => {
        setIsPause(false)
        setCurrentTime(0)
        videoRef.current && (videoRef.current.currentTime = 0)
    }
    const toRightTime = (seconds: number): string => {
        return `${Math.round(seconds / 60)}:${'00'.slice(seconds.toString().length).concat((seconds % 60).toString())}`
    }
    const goToTime = (value: string) => {
        videoRef.current && (videoRef.current.currentTime = Number(value))
        setCurrentTime(Number(value))
    }
    const replay = () => {
        setCurrentTime(0)
        setIsPause(true)
        videoRef.current?.play()
        videoRef.current && (videoRef.current.currentTime = 0)
    }
    return (
        <div {...props}>
            <video onEnded={endVideo} onClick={(e: MouseEvent) => hideToolBar(e)} className={styles.video} ref={videoRef} style={{ width: '100%' }} src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${ChampKey}/ability_${ChampKey}_${button}1.webm`} />
            {!isHideToolBar && <div className={styles.toolBar}>
                <Image width={50} height={50} alt="replay" src={'/ui/replay.svg'} className={styles.replay} onClick={replay} />
                <Image width={100} height={100} alt={isPause ? 'pause' : 'play'} src={`/ui/${isPause ? 'pause' : 'play'}.svg`} className={styles.play} onClick={changePause} />
                <div className={styles.progressBar}>
                    <input className={styles.slider} type="range" onChange={(e) => goToTime(e.target.value)} value={currentTime} min={0} max={videoRef.current ? Math.round(videoRef.current?.duration) : 0} step={1} />
                    <span className={styles.time}>{toRightTime(currentTime)}/{toRightTime(Math.round(videoRef.current ? videoRef.current?.duration : 0))}</span>
                </div>
            </div>}
        </div>
    )
}

export default SpellVideo