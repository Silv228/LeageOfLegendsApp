'use client'
import React, { useState } from "react";
import ChampionsPage from "./ChampionsPage";

const ChampionsPageContainer = ({ champArray }) => {
    const [champArr, setChampArr] = useState(champArray)
    return (
        <ChampionsPage champArray={champArr} initChampArray={champArray} setChampArr={setChampArr} />
    )
}

export default ChampionsPageContainer