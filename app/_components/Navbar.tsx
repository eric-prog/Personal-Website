import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'


const playfair = Playfair_Display({ subsets: ['latin'] })


export default function Navbar() {
  return (
    <div className={playfair.className}>
      <h1 className='text-5xl m-5'>ES</h1>
    </div>
  )
}
