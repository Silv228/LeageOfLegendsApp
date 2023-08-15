import React, { MouseEvent, useEffect, useRef, useState } from "react";
import styles from './SpellVideo.module.css'
import { SpellVideoProps } from "./SpellVideo.props";
import Image from "next/image";
//баг - при открытии тулбара сбрасывается прогрессбар
const SpellVideo = ({ url, ...props }: SpellVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPause, setIsPause] = useState<boolean>(false)
    const [isHideToolBar, setIsHideToolBar] = useState<boolean>(false)
    const [currentTime, setCurrentTime] = useState<number>(0)
    useEffect(() => {
        setCurrentTime(0)
        setIsHideToolBar(false)
        return () => {
            videoRef.current?.pause()
        }
    }, [url])
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
        return seconds ? `${Math.round(seconds / 60)}:${'00'.slice(seconds.toString().length).concat((seconds % 60).toString())}` : '00:00'
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
            <video onWaiting={() => setIsPause(false)} onPlaying={() => setIsPause(true)} onEnded={endVideo} onClick={(e: MouseEvent) => hideToolBar(e)} className={styles.video} ref={videoRef} style={{ width: '100%' }} src={url} />
            {!isHideToolBar && <div className={styles.toolBar}>
                <Image width={30} height={30} alt="replay" src={'/ui/replay.svg'} className={styles.replay} onClick={replay} />
                <Image width={70} height={70} alt={isPause ? 'pause' : 'play'} src={`/ui/${isPause ? 'pause' : 'play'}.svg`} className={styles.play} onClick={changePause} />
                <div className={styles.progressBar}>
                    <input className={styles.slider} type="range" onChange={(e) => goToTime(e.target.value)} value={currentTime} min={0} max={videoRef.current ? Math.round(videoRef.current?.duration) : 0} step={1} />
                    <span className={styles.time}>{toRightTime(currentTime)}/{toRightTime(Math.round(videoRef.current ? videoRef.current?.duration : 0))}</span>
                </div>
            </div>}
        </div>
    )
}

export default SpellVideo