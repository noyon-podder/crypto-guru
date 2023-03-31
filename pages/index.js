import BestSeller from '@/components/BestSeller'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Experts from '@/components/Experts'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Hosting from '@/components/Hosting'
import MostProfitable from '@/components/MostProfitable'
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
    <MostProfitable/> 
    <Experts/>
    <Hosting/>
    <BestSeller/>
    <Contact/>
    <Blog/> 
    <Newsletter/>
    <Footer/>
    </>
  )
}
