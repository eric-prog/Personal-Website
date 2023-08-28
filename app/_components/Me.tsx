import Pfp from "../_assets/pfp/pfp.jpeg"
import Space from "../_assets/pfp/space.jpeg"

import { Space_Mono } from 'next/font/google'


const handjet = Space_Mono({ subsets: ['latin'], weight: "400" })


export default function Me() {
  return (
    <div className="col items-start mt-8 w-full bg-[#000000]">
        <div className='row h-[15vh] overflow-hidden'>
            <img src={Pfp.src} className='w-[15vh] h-[auto]' alt="pfp" />
            <img src={Space.src} className='w-full' alt="space" />
        </div>
        <p className='p-3 text-sm' style={handjet.style}>Email: easheen [@] uwaterloo.ca</p>
    </div>
  )
}
