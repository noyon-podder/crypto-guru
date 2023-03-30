import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TopBar from '@/components/TopBar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Footer/>
    </>
  )
}
