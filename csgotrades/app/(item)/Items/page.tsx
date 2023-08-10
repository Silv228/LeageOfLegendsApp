import styles from './page.module.css'
import { IItems } from '@/interfaces/items.interface'
import ItemPage from '../components/ItemPage/ItemPage'

export default async function Home() {
  const data = await fetch('http://ddragon.leagueoflegends.com/cdn/13.14.1/data/ru_RU/item.json',
    {
      method: 'GET'
    }
  )

  let res: IItems = await data.json()
  const itemsArray = Object.entries(res.data).map(e => ({ ...e[1], id: e[0] }))

  return (
    <main className={styles.main}>
      <ItemPage itemsArray={itemsArray} />
    </main>
  )
}
