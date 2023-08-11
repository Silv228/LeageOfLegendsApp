'use client'
import Link from "next/link"
import Reacts, { useState } from "react"
import styles from "./SideBar.module.css"
import Image from "next/image"
import menu from './menu.svg'

const SideBar = () => {
    const [isHidden, setIsHidden] = useState<boolean>(true)
    return (
        <div>
            <div onClick={(e) => { setIsHidden(!isHidden); console.log('hello') }}>
                <Image className={styles.menuIcon} src={menu} width={30} height={30} alt="menu"  />
            </div>
            {isHidden && <div className={styles.bar}>
                <ul className={styles.navigation}>
                    <li>
                        <Link href={'/Champions'}>Чемпионы</Link>
                    </li>
                    <li>
                        <Link href={'/Items'}>Предметы</Link>
                    </li>
                    <li>
                        <Link href={'/Runes'}>Руны</Link>
                    </li>
                    <li>
                        <Link href={'/Summoners'}>Самонерки</Link>
                    </li>
                </ul>
            </div>}
        </div>
    )
}

export default SideBar