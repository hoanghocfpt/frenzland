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
