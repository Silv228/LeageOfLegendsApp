import { IRune, IRunes, ISlot } from "@/interfaces/runes.interface";
import Image from "next/image";
import React from "react";

const getRunes = async (): Promise<IRunes[]> => {
  const data = await fetch('http://ddragon.leagueoflegends.com/cdn/13.14.1/data/ru_RU/runesReforged.json', {
    method: "GET"
  })
  return data.json()
}
const Runes = async () => {
  const runes: IRunes[] = await getRunes()
  return (
    <>
      {runes.map((rune) => (
        <div key={rune.id}>
          <Image alt={rune.key} width={50} height={50} src={'http://ddragon.leagueoflegends.com/cdn/img/' + rune.icon} />
          <div>{rune.name}</div>
          <div>{rune.slots.map((slot: ISlot) => (
            <div>{slot.runes.map((skill: IRune) => (
              <div>
                <Image alt={skill.key} width={50} height={50} src={'http://ddragon.leagueoflegends.com/cdn/img/' + skill.icon} />
                <div>{skill.name}</div>
                <div dangerouslySetInnerHTML={{ __html: skill.longDesc }} />
                <br />
              </div>
            ))}</div>
          ))}</div>
        </div>
      ))
      }
    </>
  )
}
export default Runes