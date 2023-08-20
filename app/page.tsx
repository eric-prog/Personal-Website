import Intro from './_components/Intro'
import Photos from './_components/Photos'
import { PhotoList } from './_template_data/Photos'
import { ExperienceList } from './_template_data/Experience'
import Experience from './_components/Experience'


export default function Home() {
  return (
    <div className='col w-[50%]'>
      <Intro />
      <Experience experience={ExperienceList} />
      <Photos photos={PhotoList}/>
    </div>
  )
}
