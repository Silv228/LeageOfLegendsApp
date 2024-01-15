'use client'
import { createContext, useState } from "react"

const loadContext = {
    isLoad: false
}

export const LContext = createContext(loadContext)

export const LoadProvider = ({ children, value }) => {
    const [isLoadState, setIsLoadState] = useState(value)
    return (
        <LContext.Provider value={{ isLoad: isLoadState, setIsLoad: setIsLoadState }}>
            {children}
        </LContext.Provider>
    )
}