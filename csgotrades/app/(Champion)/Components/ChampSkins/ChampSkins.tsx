'use client'
import { Skin } from "@/interfaces/champion.interface"
import Image from "next/image"
import React, { MouseEvent, useEffect, useState } from "react"
import { ChampSkinsProps } from "./ChampSkins.props"
import styles from "./ChampSkins.module.css"

const ChampSkins = ({ skins, champion, ...props }: ChampSkinsProps) => {
    const [indexSkin, setIndexSkin] = useState<number>(0)
    const [indexArray, setIndexArray] = useState<number[]>()
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false)
    useEffect(() => {
        let tempIndexArray: number[] = []
        skins.forEach((s) => {
            tempIndexArray.push(s.num)
        })
        setIndexArray(tempIndexArray)
    }, [skins])
    const skinsArray = skins.map((skin: Skin) => {
        return (
            <div className={styles.skin} key={skin.id}>
                <Image onClick={(e) => { setIsFullScreen(true) }} alt={skin.id} width={308} height={560} src={'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + `${champion}_` + skin.num + '.jpg'} />
                <div className={styles.skinName}>{skin.name}</div>
            </div>
        )
    }
    )
    const switchSkin = (action: number) => {
        if (!indexSkin && action === -1) setIndexSkin(skins.length - 1)
        else setIndexSkin((indexSkin + action) % skins.length)
    }
    return (
        <div className={styles.skins} {...props}>
            <Image className={styles.switchSkin} alt={`${champion}_${indexArray && indexArray[-(-skins.length - (indexSkin - 1)) % skins.length]}`} width={120} height={120} src={'http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/' + `${champion}_` + (indexArray && indexArray[-(-skins.length - (indexSkin - 1)) % skins.length]) + '.jpg'} onClick={(e: MouseEvent) => { switchSkin(-1) }} />
            {skinsArray[indexSkin]}
            <Image className={styles.switchSkin} alt={`${champion}_${indexArray && (indexArray[(indexSkin + 1) % (skins.length)])}`} width={120} height={120} src={'http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/' + `${champion}_` + (indexArray && (indexArray[(indexSkin + 1) % (skins.length)])) + '.jpg'} onClick={(e: MouseEvent) => { switchSkin(1) }} />
            {isFullScreen &&
                <div className={styles.splashSkin}>
                    <Image priority={true} alt={`splash_${champion}_` + (indexArray && indexArray[indexSkin])} width={1215} height={717} src={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + `${champion}_` + (indexArray && indexArray[indexSkin]) + '.jpg'} onClick={(e) => { setIsFullScreen(false) }} />
                </div>
            }
        </div>
    )
}

export default ChampSkins