import Intro from './_components/Intro'
import Photos from './_components/Photos'
import { PhotoList } from './_template_data/Photos'
import { ExperienceList } from './_template_data/Experience'
import Experience from './_components/Experience'
import BottomNav from './_components/BottomNav'
import Blog from './_components/Blog'
import { BlogList } from './_template_data/Blog'
import Speaking from './_components/Speaking'
import { SpeakingList } from './_template_data/Speaking'
import Startups from './_components/Startups'
import { affiliations, studye } from './_template_data/Affiliations'
import Projects from './_components/Projects'
import { ProjectsList } from './_template_data/Projects'
import Me from './_components/Me'


export default function Home() {
  return (
    <div className='col w-[50%] max-md:w-[80%]'>
      <Intro />
      <Experience experience={ExperienceList} />
      <Speaking speaking={SpeakingList} />
      <Blog blogs={BlogList} />
      <Projects projects={ProjectsList} />
      <Startups studye={studye} affiliations={affiliations} />
      <Photos photos={PhotoList}/>
      <Me />
      <BottomNav />
    </div>
  )
}
