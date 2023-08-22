import Studye from "../_assets/affiliations/studye.png"


export default function Startups({ affiliations, studye }: { affiliations: string[], studye: string[] }) {
    return (
        <div className="col page">
            <p className='title'><span className="symbol">&#9817;</span> / Startups / Affiliations</p>
            <div className="col items-start bg-[#1f1f1f] p-6 px-8 rounded-sm">
                <div className="row justify-between">
                    <p className="text-2xl">Studye</p>
                    <img src={Studye.src} alt="studye" className="w-[10vh] h-[auto] bg-slate-50 rounded-full" />    
                </div>
                <p className="bg-[#262b30] p-4 rounded-sm my-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="row justify-between flex-wrap">
                    {studye.map((photo, i) => (
                        <img className="w-[49.5%] h-[auto] mt-2  max-md:w-[100%]" key={i} src={photo} alt="studye" />
                    ))}
                </div>
            </div>
            <div className="row flex-wrap flex-start mt-4">
                {affiliations.map((affiliate, i) => (
                    <img key={i} src={affiliate} className="w-[auto] h-[6vh] mr-3 my-3" alt="affiliate" />
                ))}
            </div>
        </div>
    )
  }
  