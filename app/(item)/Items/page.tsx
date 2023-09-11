import styles from './page.module.css'
import { IItems } from '@/interfaces/items.interface'
import ItemPage from '../components/ItemPage/ItemPage'
import { api } from '@/app/myApi/api'
import { Metadata } from 'next'
import ItemPageContainer from '../components/ItemPage/ItemPageContainer'

export const metadata: Metadata = {
  title: 'Предметы Лиги Легенд',
  description: 'Здесь собраны все предметы игры Лига Легенд'
}
export default async function Home() {
  const res: IItems = await api.getItems()
  const itemsArray = Object.entries(res.data).map(e => ({ ...e[1], id: e[0] }))
  const tagsArr: string[] = []
  itemsArray.forEach((item) => {
    if (item.maps['11']) {
      item.tags.forEach((tag: string) => {
        if (!tagsArr.includes(tag) && tag !== 'Trinket') {
          tagsArr.push(tag)
        }
      })
    }
  })
  return (
    <main className={styles.main}>
      <ItemPageContainer tags={tagsArr} itemsObj={res.data} initItemsArray={itemsArray} />
    </main>
  )
}
