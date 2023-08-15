'use client'
import Link from "next/link"
import Reacts, { useEffect, useState } from "react"
import styles from "./SideBar.module.css"
import Image from "next/image"
import menu from './menu.svg'
import { usePathname } from "next/navigation"

const SideBar = () => {
    const [isHidden, setIsHidden] = useState<boolean>(true)
    const [navigationShowed, setNavigationShowed] = useState<Record<string, boolean>>({
        Champions: true,
        Items: false,
        Runes: false,
        Summoners: false,
    })
    const [previousNav, setPreviousNav] = useState('Champions')
    const page = usePathname()
    useEffect(() => {
        let tempNav = navigationShowed
        tempNav[page?.slice(1, page.length)] = true
        tempNav[previousNav] = false
        setNavigationShowed(tempNav)
        setPreviousNav(page?.slice(1, page.length))
    }, [page])
    return (
        <div>
            <div onClick={(e) => setIsHidden(!isHidden)}>
                <Image className={styles.menuIcon} src={menu} width={30} height={30} alt="menu" />
            </div>
            {isHidden && <div className={styles.bar}>
                <ul className={styles.navigation}>
                    <li className={navigationShowed.Champions ? styles.active : ''}>
                        <Link href={'/Champions'}>Чемпионы</Link>
                    </li>
                    <li className={navigationShowed.Items ? styles.active : ''}>
                        <Link href={'/Items'}>Предметы</Link>
                    </li>
                    <li className={navigationShowed.Runes ? styles.active : ''}>
                        <Link href={'/Runes'}>Руны</Link>
                    </li>
                    <li className={navigationShowed.Summoners ? styles.active : ''}>
                        <Link href={'/Summoners'}>Самонерки</Link>
                    </li>
                </ul>
            </div>}
        </div>
    )
}

export default SideBar