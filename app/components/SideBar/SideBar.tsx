'use client'
import Link from "next/link"
import React, { useContext, useEffect, useState } from "react"
import styles from "./SideBar.module.css"
import Image from "next/image"
import menu from './menu.svg'
import { usePathname } from "next/navigation"
import { LContext } from "@/app/Context/loadContext"

const SideBar = () => {
    const [isHidden, setIsHidden] = useState<boolean>(true)
    const [navigationShowed, setNavigationShowed] = useState<Record<string, boolean>>({
        champions: true,
        items: false,
        runes: false,
        summoners: false,
    })
    const path = usePathname()
    const { setIsLoad } = useContext(LContext)
    const [previousNav, setPreviousNav] = useState('champions')
    const changePage = (page: string) => {
        setIsHidden(true)
        setIsLoad(true)
        let tempNav = navigationShowed
        tempNav[page] = true
        tempNav[previousNav] = false
        setNavigationShowed(tempNav)
        setPreviousNav(page)
    }
    useEffect(() => {
        setIsLoad(false)
    }, [path])
    return (
        <div>
            <div onClick={(e) => setIsHidden(!isHidden)}>
                <Image className={styles.menuIcon} src={menu} width={30} height={30} alt="menu" />
            </div>
            <div className={`${styles.bar} ${isHidden ? styles.hiden : ''}`}>
                <ul className={styles.navigation}>
                    <li className={navigationShowed.champions ? styles.active : ''}>
                        <Link onClick={() => changePage('champions')} href={'/Champions'}>Чемпионы</Link>
                    </li>
                    <li className={navigationShowed.items ? styles.active : ''}>
                        <Link onClick={() => changePage('items')} href={'/Items'}>Предметы</Link>
                    </li>
                    <li className={navigationShowed.runes ? styles.active : ''}>
                        <Link onClick={() => changePage('runes')} href={'/Runes'}>Руны</Link>
                    </li>
                    <li className={navigationShowed.summoners ? styles.active : ''}>
                        <Link onClick={() => changePage('summoners')} href={'/Summoners'}>Самонерки</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar