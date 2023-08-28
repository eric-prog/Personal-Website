import Link from "next/link";
import { SpeakingType } from "../_template_data/Speaking";


export default function Speaking({ speaking }: { speaking: SpeakingType[] }) {
    return (
        <div className="col page">
            <p className='title'><span className="symbol">&#9816;</span> / Speaking</p>
            <div className="row flex-wrap items-stretch">
                {speaking.map((event, i) => (
                    <Link target="_blank" key={i} href={event.link} className="col items-stretch w-full mt-3 border-[#424242] border-[1px] rounded-sm">
                        <div className={i === 2 ? "col bg-black" : "col bg-black p-4 py-8"}>
                            <img className={i === 2 ? "w-[100%] h-[15vh] object-cover" : "w-[auto] h-[8vh]"} src={event.img} alt="event-img" />
                        </div>
                        <div className="bg-[#1b1e26] p-4">
                            <p className="underline decoration-[#314766]">&#9733; Youtube: {event.title}</p>
                            <p className="mt-4 bg-black p-4 rounded-sm">{event.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
  }
  