import Link from "next/link";
import { ProjectType } from "../_template_data/Projects";


export default function Projects({ projects }: { projects: ProjectType[] }) {
    return (
        <div className="col page">
            <p className='title'><span className="symbol">&#9815;</span> / Projects</p>
            <div>
                {projects.map((project, i) => (
                    <div className={i === 0 ? "mb-8" : ""} key={i}>
                        <div className="row mb-3 max-md:flex-wrap">
                            <p className="text-3xl">{project.title}</p>
                            <div className="ml-3 max-md:ml-0 max-md:mt-4">
                                <Link className="border-b-2 border-[#a9a9a9] bg-[#1e2326] py-2 px-4" target="_blank" href={project.link}>GitHub</Link>
                                {project.link2 && <Link className="bg-[#1e2326] border-b-2 border-[#a6a6a6] py-2 px-4 ml-1" target="_blank" href={project.link2}>Website</Link>}
                            </div>
                        </div>
                        <div className="border-[1px] border-[#414141]">
                        {project.widget && <img src={project.widget} alt="widget" />}
                        <p className="bg-[#1c2023] p-5 leading-7 text-[#dcdcdc]">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
  }
  