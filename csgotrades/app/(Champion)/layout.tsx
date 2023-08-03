import { Inter } from 'next/font/google'
import SideBar from '../components/SideBar/SideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Champion',
  description: 'Info Champion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <SideBar />
        {children}
      </body>
    </html>
  )
}
