import Link from "next/link";
import { ExperienceListType } from "../_template_data/Experience";


export default function Experience({ experience }: { experience: ExperienceListType[] }) {
  return (
    <div>
      {experience.map((experience, i) => (
        <div key={i}>
          <p>{experience.title}</p>
          <img src={experience.logo} alt="logo" />
          <p>{experience.position}</p>
          <p>{experience.description}</p>
          <p>{experience.date}</p>
          <p></p>
          {experience.techstack.map((icon, i) => (
            <div key={i}>
              <img src={icon} alt="icon" />
            </div>
          ))}
          {experience.sources.map((source, i) => (
            <div key={i}>
              <p>{source.img}</p>
              <Link href={source.github}>Github</Link>
              <p>{source.title}</p>
              <Link href={source.website}>Website</Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
