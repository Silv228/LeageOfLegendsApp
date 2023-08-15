import { IRunes } from "@/interfaces/runes.interface";
import React from "react";
import RunePage from "./components/RunePage/RunePage";
import { api } from "@/app/api/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Руны Лиги Легенд',
  description: 'В Лиге Легенд есть несколько видов рун, их 5, а именно: Доминирование, Вдохновение, Точность, Храбрость, Колдовство, они дают некоторые дополниельные показатели'
} 
async function Runes() {
  const runes: IRunes[] = await api.getRunes()
  return (
    <>
      <RunePage runes={runes} />
    </>
  )
}
export default Runes