import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <h1>Home Page</h1>
      <h2 className="content">This content is from the home page</h2>
    </>
  )
}
