import { Catamaran } from 'next/font/google'
import './globals.css'
import './layout.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const catamaran = Catamaran({ weight: ['100','200','300','400','500','600','700','800','900'],subsets: ['latin'] })

export const metadata = {
  title: 'The Offical Home of Bobby',
  description: 'Bobby coming to Vietnam',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="https://db.onlinewebfonts.com/c/7c1c241f20bff52b24056c04cd20703c?family=Menco+W00+Black" rel="stylesheet"></link>
      <body className={catamaran.className}>
      <div className='container'>
        <Header/>
        {children}
        <Footer/>
      </div>
      
      </body>
    </html>
  )
}
