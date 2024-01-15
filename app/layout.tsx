import SideBar from './components/SideBar/SideBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { LoadProvider } from './Context/loadContext'
import LoadContainer from './LoadContainer'

const inter = Inter({ subsets: ['latin'], weight: ['400'] })

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
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <body className={inter.className}>
        <LoadProvider value={false}>
          <SideBar />
          <LoadContainer>
            {children}
          </LoadContainer>
        </LoadProvider>
      </body>
    </html>
  )
}
