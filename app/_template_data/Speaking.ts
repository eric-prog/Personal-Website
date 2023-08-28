import TEDx from '../_assets/experience/tedx.png'
import Kurius from '../_assets/experience/kurius.png'
import Waitlist from '../_assets/blog/waitlist.webp'


export type SpeakingType = {
    title: string,
    img: string,
    link: string,
    description: string
}


export const SpeakingList: SpeakingType[] = [
    {
        title: "Your Fear Hides a World Full of Possibility",
        img: TEDx.src,
        link: "https://www.youtube.com/watch?v=r-v1I_IDl6E",
        description: "Honoured to have given a TEDx talk on how we can overcome the fear of failure and maximize potential. Talked about my struggles when working on ambitious projects and how I overcame them. It was an interesting process that involved script writing, and editors, and I definitely got better at public speaking (which I love)."
    },
    {
        title: "Intro to Python: Build a Project!",
        img: Kurius.src,
        link: "https://youtu.be/Dof7R87R7tw",
        description: "Invited to deliver a workshop on an Intro to Python. There were 80+ live listeners in the discord call, and I had a fun time interacting with everyone and getting to know people and their ideas."
    },
    {
        title: "Build a Waitlist App With Descope Flows and Airtable",
        img: Waitlist.src,
        link: "https://youtu.be/noRHDnRZbK8?feature=shared",
        description: "This is part of my work at Descope where I build a waitlist for your startup/app with authentication."
    },
]