import { IResponse } from '@/interfaces/championsFull.interface'
import ChampCard from './components/ChampCard/ChampCard'
import styles from './page.module.css'

export default async function Home() {
  const data = await fetch('http://ddragon.leagueoflegends.com/cdn/13.14.1/data/en_US/champion.json',
    {
      method: 'GET'
    }
  )
  let res: IResponse = await data.json()
  const champArray = Object.entries(res.data).map(e => (e[1])) 
  const champGrid = champArray.map(champ => <ChampCard id={champ.id} info={champ.info} key={champ.key} img={champ.image.full} name = {champ.name}/>) 
  return (
    <main className={styles.main}>
      {champGrid}
    </main>
  )
}
