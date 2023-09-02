import styles from './page.module.css'
import { IItems } from '@/interfaces/items.interface'
import ItemPage from '../components/ItemPage/ItemPage'
import { api } from '@/app/myApi/api'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Предметы Лиги Легенд',
  description: 'Здесь собраны все предметы игры Лига Легенд'
} 
export default async function Home() {
  const res: IItems = await api.getItems()
  const itemsArray = Object.entries(res.data).map(e => ({ ...e[1], id: e[0] }))

  return (
    <main className={styles.main}>
      <ItemPage itemsObj={res.data} itemsArray={itemsArray} />
    </main>
  )
}
