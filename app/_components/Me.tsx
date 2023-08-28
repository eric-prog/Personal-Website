import Link from "next/link"
import Pfp from "../_assets/pfp/pfp.jpeg"
import Space from "../_assets/pfp/space.jpeg"

import { Space_Mono } from 'next/font/google'
import { Silkscreen } from 'next/font/google'


const handjet = Space_Mono({ subsets: ['latin'], weight: "400" })
const archivo = Silkscreen({ subsets: ['latin'], weight: "400" })


export default function Me() {
  return (
    <div className="col items-start mt-6 mb-2 w-full bg-[#000000] border-[1px] border-[#303030]">
        <div className='row h-[15vh] overflow-hidden'>
            <img src={Pfp.src} className='w-[15vh] h-[auto]' alt="pfp" />
            <img src={Space.src} className='w-full h-full object-cover' alt="space" />
        </div>
        <div className="p-3">
            <p className='text-sm mb-2' style={handjet.style}>Email: easheen [@] uwaterloo.ca</p>
            <p className='text-sm' style={archivo.style}>Old website: <Link target="_blank" href="https://ericsheen.netlify.app/">https://ericsheen.netlify.app/</Link></p>
        </div>
    </div>
  )
}
