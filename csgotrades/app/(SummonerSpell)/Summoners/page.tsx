import styles from './page.module.css'
import { ISummoner } from '@/interfaces/summoners.interface'
import Summoners from '../components/Summoners/Summoners'

export default async function Spell() {
  const data = await fetch('http://ddragon.leagueoflegends.com/cdn/13.14.1/data/ru_RU/summoner.json',
    {
      method: 'GET'
    }
  )
  let res: ISummoner = await data.json()
  const spellsArray = Object.entries(res.data).map(e => ({ ...e[1], id: e[0] }))
  return (
    <main className={styles.main}>
      <Summoners spellsArray={spellsArray} className={styles.summs}/>
    </main>
  )
}
