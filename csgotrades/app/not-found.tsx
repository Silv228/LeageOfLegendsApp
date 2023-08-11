import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='notFound'>
            <div>
                <h2>Ничего не найдено</h2>
                <p>То что вы искали не существует</p>
            </div>
            <Link href="/">Вернуться на главную</Link>
        </div>
    )
}