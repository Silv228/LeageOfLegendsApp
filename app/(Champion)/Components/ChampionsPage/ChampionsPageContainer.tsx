'use client'
import React, { Suspense, useContext, useState } from "react";
import ChampionsPage from "./ChampionsPage";
import { LContext } from "@/app/Context/loadContext";
import Preloader from "@/app/preloader";

const ChampionsPageContainer = ({ champArray }) => {
    const [champArr, setChampArr] = useState(champArray)
    const { isLoad } = useContext(LContext)
    console.log(isLoad)
    return (
        <>
            {!isLoad ? <ChampionsPage champArray={champArr} initChampArray={champArray} setChampArr={setChampArr} /> : <Preloader />}
        </>
    )
}

export default ChampionsPageContainer