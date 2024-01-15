'use client'
import { useContext } from "react"
import { LContext } from "./Context/loadContext"
import Preloader from "./preloader"
import cn from "classnames"

export default function LoadContainer({ children }) {
    const { isLoad } = useContext(LContext)
    return (
        <div className={cn({'preloader': isLoad})}>
            {!isLoad ? children : <Preloader />}
        </div>
    )
}