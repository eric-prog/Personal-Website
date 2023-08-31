import Link from 'next/link'

import { DM_Sans } from 'next/font/google'


const dmSans = DM_Sans({ subsets: ['latin'], weight: "300" })


export default function Intro() {
  return (
    <div className={dmSans.className}>
        <h1 className='text-3xl'>Hey, I&apos;m Eric Sheen <span className="ml-1 text-4xl">&#9883;</span></h1>
        <p className="my-8 leading-7 font-thin text-[#e0e0e0]">
          I&apos;m a full-stack developer, researcher, and community builder. My latest work was at <Link target='_blank' className='underline' href="https://www.descope.com/">Descope</Link> as a DevRel Engineer, where I built & led a variety of <Link target='_blank' className='underline' href="https://github.com/descope-sample-apps">open-source projects</Link> to increase the adoption of our authentication product. I also wrote a lot of <Link target='_blank' className='underline' href="https://www.descope.com/blog">blogs</Link>.
          <br /><br />
          I&apos;m currently living in Waterloo, ON, Canada. It&apos;s not a city with skylines and tall buildings but it&apos;s a peaceful community with lots of green.
          <br /><br />
          My journey started during my grade 8 year, learning the basics of Java and Android development. Then, progressed toward ML and full-stack web development. During high school, you would catch me at hackathons, working in research and doing a few SWE internships.
          <br /><br />
          I spent my four years of high school working in startups and research labs. My most notable works include engineering/research at <Link target='_blank' className='underline' href="https://www.crunchbase.com/organization/cheapreats">CheaprEats</Link>, <Link target='_blank' className='underline' href="https://skywatch.com/">SkyWatch</Link>, <Link target='_blank' className='underline' href="https://uwaterloo.ca/artificial-intelligence-institute/">UWaterloo</Link>, and <Link target='_blank' className='underline' href="https://lit.gse.harvard.edu/">Harvard LIT lab</Link>. I am also involved in hackathons and communities like <Link target='_blank' className='underline' href="https://www.ted.com/tedx/events/44384">TEDx</Link> and <Link target='_blank' className='underline' href="https://velocityincubator.com/spaces/student-creator-spaces/">Velocity</Link>. Read more about it below. 
          <br /><br />
          This upcoming 2023-2024 term, I&apos;m back living in residence and studying at the University of Waterloo for Software Engineering. Planning on joining some compelling clubs and continuing to make some meaningful friends.
        </p>
    </div>
  )
}
