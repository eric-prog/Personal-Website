import { Playfair_Display } from 'next/font/google'


const playfair = Playfair_Display({ subsets: ['latin'] })


export default function Navbar() {
  return (
    <div className={playfair.className}>
      <h1 className='text-4xl m-5 mb-10'>∞</h1>
    </div>
  )
}
