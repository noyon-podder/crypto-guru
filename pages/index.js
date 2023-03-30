import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import Product from '@/components/Product'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Product/>  
    <Newsletter/>
    <Footer/>
    </>
  )
}
