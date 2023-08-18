import SideBar from './components/SideBar/SideBar'
import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'League Of Legends',
  description: 'League Of Legends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <SideBar />
        {children}
      </body>
    </html>
  )
}
