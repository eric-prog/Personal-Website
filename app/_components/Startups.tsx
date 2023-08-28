import Studye from "../_assets/affiliations/studye.png"


export default function Startups({ affiliations, studye }: { affiliations: string[], studye: string[] }) {
    return (
        <div className="col page">
            <p className='title'><span className="symbol">&#9817;</span> / Startups / Affiliations</p>
            <div className="row flex-wrap flex-start mb-4">
                {affiliations.map((affiliate, i) => (
                    <img key={i} src={affiliate} className="w-[auto] h-[6vh] mr-3 my-3" alt="affiliate" />
                ))}
            </div>
            <div className="col items-start bg-[#1f1f1f] p-5 pb-7 px-8 rounded-sm border-[1px] border-[#303030]">
                <div className="row justify-between">
                    <p className="text-2xl">Studye</p>
                    <img src={Studye.src} alt="studye" className="w-[10vh] h-[auto] bg-slate-50 rounded-full" />    
                </div>
                <p className="bg-[#2d2d31] p-4 rounded-sm my-4 text-[#e1e1e1] leading-7">
                    Inspired by the boredom of my grade 10 history course which included hours of reading through 
                    tedious textbooks, and historical records... Studye was my first go at building a Saas startup: 
                    Grammarly for text summarization. Studye was a data extraction & summarization app for PDFs, documents, 
                    images, and web pages to condense information for studying by providing notes, keywords, and summaries. 
                    Made a ton of mistakes but also learned a lot about building something from the ground up. 
                    Conducted 20+ user interviews, had 80+ users at the peak, and learned a lot about 
                    NLP (extractive text summarization, tokenization, normalization). 
                    Met with local founders in the ed-tech space and gained a lot of wisdom. 
                    I would highly encourage other devs to tackle a problem you&apos;re passionate about, 
                    build in public, onboard users, and experience something new. There is no true failure 
                    where there are lessons that can be learned. 
                    <br/><br/>
                    RIP Heroku free tier. Although I&apos;m moving to Vercel and Netlify, Heroku is (in my opinion), one of the most impressive cloud deployment paradigms of all time. 
                    Before Vercel and others came out, there was Heroku. Good deployment times, an abundant amount of add-ons, 
                    real-time logs, Heroku CLI, and this arbitrary concept of &quot;dynos.&quot; Hope to see a comeback for Heroku on the global stage. 
                </p>
                <div className="row justify-between flex-wrap">
                    {studye.map((photo, i) => (
                        <img className="w-[49.5%] h-[auto] mt-2  max-md:w-[100%]" key={i} src={photo} alt="studye" />
                    ))}
                </div>
            </div>
        </div>
    )
  }
  