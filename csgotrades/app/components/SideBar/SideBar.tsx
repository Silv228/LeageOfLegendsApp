import Link from "next/link"
import Reacts from "react"
import styles from "./SideBar.module.css"

const SideBar = () => {
    return (
        <div className={styles.bar}>
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
        </div>
    )
}

export default SideBar