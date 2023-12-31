import styles from './page.module.css'
import { ISummoner } from '@/interfaces/summoners.interface'
import SummonersPage from '../components/SummonersPage/SummonersPage'
import { api } from '@/app/myApi/api'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Умения призывателей',
  description: 'В Лиге Легенд у каждого игрока есть 2 умения призывателя, они выбираются до начала игры, их нельзя сменить в течении всей карты'
}
export default async function Spell() {
  const res: ISummoner = await api.getSummonersSpell()
  const spellsArray = Object.entries(res.data).map(e => ({ ...e[1], id: e[0] }))
  return (
    <main className={styles.main}>   
      <SummonersPage spellsArray={spellsArray} className={styles.summs}/>
    </main>
  )
}
