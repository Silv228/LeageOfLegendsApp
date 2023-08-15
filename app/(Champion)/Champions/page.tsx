import { IResponse } from '@/interfaces/championsFull.interface'
import ChampCard from '../../components/ChampCard/ChampCard'
import styles from './page.module.css'
import { api } from '@/app/api/api'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Чемпионы Лиги Легенд',
  description: 'Здесь собраны все чемпионы игры Лига Легенд)))'
}
export default async function Champions() {
  const res: IResponse = await api.getChampions()
  const champArray = Object.entries(res.data).map(e => (e[1]))
  const champGrid = champArray.map(champ => <ChampCard id={champ.id} info={champ.info} key={champ.key} img={champ.image.full} name={champ.name} />)
  return (
    <main className={styles.main}>
      {champGrid}
    </main>
  )
}
