import { IRunes } from "@/interfaces/runes.interface";
import React from "react";
import RunePage from "./components/RunePage/RunePage";

const getRunes = async (): Promise<IRunes[]> => {
  const data = await fetch('http://ddragon.leagueoflegends.com/cdn/13.14.1/data/ru_RU/runesReforged.json', {
    method: "GET"
  })
  return data.json()
}
async function Runes() {
  const runes: IRunes[] = await getRunes()
  return (
    <>
      <RunePage runes={runes} />
    </>
  )
}
export default Runes