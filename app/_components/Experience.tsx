import Link from "next/link";
import { ExperienceListType } from "../_template_data/Experience";


export default function Experience({ experience }: { experience: ExperienceListType[] }) {
  return (
    <div className="col m-0 p-0 page">
      <p className='title'><span className="symbol">&#9812;</span> / Experiences</p>
      {experience.map((experience, i) => (
        <div key={i} className="experience w-full">
          <div className="row justify-between max-md:flex-wrap">
            <div className="w-fit">
              <p className="text-2xl mb-2">{experience.title}</p>
              <div className="row max-md:flex-wrap">
                <p className="bg-[#1d2229] rounded mr-1 border-[#585858] block max-md:my-2">{experience.position}</p>
                <p className="bg-[#1d2229] rounded border-[#585858] block">{experience.date}</p>
              </div>
            </div>
            <img className="w-[9vh] h-[auto] max-md:mt-2" src={experience.logo} alt="logo" />
          </div>
          <p className="box-border p-2 pl-4 my-2 mb-4 bg-[#181f29] text-[#afafaf] rounded-sm">{experience.description}</p>
          <div className="row items-start flex-wrap">
            {experience.sources.map((source, i) => (
              <div key={i} className={experience.sources.length === 1 ? 'w-full' : 'w-[50%] max-md:w-full'}>
                {source.img && 
                  <img src={source.img} className='w-full h-[25vh] object-cover' alt="source" />
                }
                <div className="bg-[#242424] mb-3 box-border p-3">
                  <p className="mb-2">{source.title}</p>
                  <div className="row">
                    {source.github && <Link target="_blank" href={source.github} className="bg-[#141414] rounded-sm py-1 px-3 mr-1">Github <span className="font-bold text-[#e7c340]">&#8599;</span></Link>}
                    {source.website && <Link target="_blank" className="bg-[#141414] rounded-sm py-1 px-3" href={source.website}>Website <span className="font-bold text-[#ff834a]">&#8599;</span></Link>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
