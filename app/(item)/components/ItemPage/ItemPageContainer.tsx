'use client'
import React, { useState } from "react";
import ItemPage from "./ItemPage";

const ItemPageContainer = ({ tags, itemsObj, initItemsArray }) => {
    const [itemsArray, setItemsArray] = useState(initItemsArray)
    return (
        <ItemPage setItemsArray={setItemsArray} itemsArray={itemsArray} tags={tags} itemsObj={itemsObj} initItemsArray={initItemsArray} />
    )
}

export default ItemPageContainer