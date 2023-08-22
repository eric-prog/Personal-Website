import TEDx from '../_assets/experience/tedx.png'
import Kurius from '../_assets/experience/kurius.png'


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
        description: "Gave a TEDx talk on how we can overcome the fear of failure & maximize potential."
    },
    {
        title: "Intro to Python: Build a Project!",
        img: Kurius.src,
        link: "https://youtu.be/Dof7R87R7tw",
        description: "Invitation, 80+ live listeners"
    },
]