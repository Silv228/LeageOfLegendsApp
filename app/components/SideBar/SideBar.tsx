'use client'
import Link from "next/link"
import React, { useEffect, useState } from "react"
import styles from "./SideBar.module.css"
import Image from "next/image"
import menu from './menu.svg'
import { usePathname } from "next/navigation"

const SideBar = () => {
    const [isHidden, setIsHidden] = useState<boolean>(true)
    const [navigationShowed, setNavigationShowed] = useState<Record<string, boolean>>({
        champions: true,
        items: false,
        runes: false,
        summoners: false,
    })
    const [previousNav, setPreviousNav] = useState('champions')
    const page = usePathname()
    useEffect(() => {
        setIsHidden(true)
        let tempNav = navigationShowed
        tempNav[page?.slice(1, page.length).toLocaleLowerCase()] = true
        tempNav[previousNav] = false
        setNavigationShowed(tempNav)
        setPreviousNav(page?.slice(1, page.length).toLocaleLowerCase())
    }, [page])
    return (
        <div>
            <div onClick={(e) => setIsHidden(!isHidden)}>
                <Image className={styles.menuIcon} src={menu} width={30} height={30} alt="menu" />
            </div>
            <div className={`${styles.bar} ${isHidden ? styles.hiden : ''}`}>
                <ul className={styles.navigation}>
                    <li className={navigationShowed.champions ? styles.active : ''}>
                        <Link href={'/Champions'}>Чемпионы</Link>
                    </li>
                    <li className={navigationShowed.items ? styles.active : ''}>
                        <Link href={'/Items'}>Предметы</Link>
                    </li>
                    <li className={navigationShowed.runes ? styles.active : ''}>
                        <Link href={'/Runes'}>Руны</Link>
                    </li>
                    <li className={navigationShowed.summoners ? styles.active : ''}>
                        <Link href={'/Summoners'}>Самонерки</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar