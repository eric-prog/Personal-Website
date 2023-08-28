import Link from 'next/link'

import { Playfair_Display } from 'next/font/google'


const playfair = Playfair_Display({ subsets: ['latin'] })


export default function Navbar() {
  return (
    <div className={playfair.className}>
      <h1 className='text-4xl m-5 ml-6 mb-10'><Link target="_blank" href="https://math.dartmouth.edu/~matc/Readers/HowManyAngels/InfinityMind/IM.html">∞</Link></h1>
    </div>
  )
}
