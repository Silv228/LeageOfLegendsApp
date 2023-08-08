import styles from './page.module.css'
import { IItems } from '@/interfaces/items.interface'
import ItemCard from '../../components/ItemCard/ItemCard'

export default async function Home() {
  const data = await fetch('http://ddragon.leagueoflegends.com/cdn/13.14.1/data/ru_RU/item.json',
    {
      method: 'GET'
    }
  )
  let res: IItems = await data.json()
  const itemsArray = Object.entries(res.data).map(e => ({...e[1], id: e[0]})) 
  const itemGrid = itemsArray.map(item => <ItemCard description = {item.description} into={item.into} id={item.id} info={item.plaintext} gold={item.gold} key={item.id} img={item.image.full} name = {item.name}/>) 
  return (
    <main className={styles.main}>
      {itemGrid}
    </main>
  )
}
