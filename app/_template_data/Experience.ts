import Descope from '../_assets/experience/descope-removebg-preview.png'
import SkyWatch from '../_assets/experience/skywatch_logo.png'
import Harvard from '../_assets/experience/harvardlogo.png'
import CheaprEats from '../_assets/experience/cheapreats_logo.jpeg'
import UWaterloo from '../_assets/experience/uwaterloo.png'

import Django from '../_assets/experience/sources/django.webp'
import EarthCache from '../_assets/experience/sources/earthcache.png'
import Explorer from '../_assets/experience/sources/explorer.png'
import FlaskHTML from '../_assets/experience/sources/flask-html.webp'
import FlaskReact from '../_assets/experience/sources/flask-react.webp'
import HarvardLIT from '../_assets/experience/sources/graph.png'
import Next12 from '../_assets/experience/sources/next12.png'
import Next13 from '../_assets/experience/sources/next13.png'
import Svelte from '../_assets/experience/sources/svelte.png'
import Waitlist from '../_assets/experience/sources/waitlist.png'


export type Source = {
    title: string,
    website: string,
    github: string,
    img: string,
}


export type ExperienceListType = {
    title: string,
    date: string,
    logo: string,
    position: string,
    description: string,
    sources: Source[]
}


export const ExperienceList: ExperienceListType[] = [
    {
        title: "Descope",
        date: "May 2023 - August 2023",
        logo: Descope.src,
        position: "DevRel Engineer (Founding intern)",
        description: "hacking away on open source projects",
        sources: [
            {
                title: "Descope Explorer",
                website: "https://explorer.descope.com/",
                github: "https://github.com/descope-sample-apps/descope-explorer",
                img: Explorer.src
            },
            {
                title: "Next.js 13 Hackathon Template",
                website: "https://nextjs-hackathon-template.descope.com/",
                github: "https://github.com/descope/nextjs-hackathon-template",
                img: Next13.src
            },
            {
                title: "Next.js 12 Hackathon Template",
                website: "https://nextjs-hackathon-template-pages.preview.descope.org/",
                github: "https://github.com/descope-sample-apps/nextjs-hackathon-template-pages",
                img: Next12.src
            },
            {
                title: "Flask React sample app",
                website: "",
                github: "https://github.com/descope-sample-apps/flask-react-sample-app",
                img: FlaskReact.src
            },
            {
                title: "Startup landing page",
                website: "https://svelte-sample-app.preview.descope.org/",
                github: "https://github.com/descope-sample-apps/svelte-sample-app",
                img: Svelte.src
            },
            {
                title: "Waitlist sample app",
                website: "https://waitlist-sample-app.preview.descope.org/",
                github: "https://github.com/descope-sample-apps/waitlist-sample-app",
                img: Waitlist.src
            },
            {
                title: "Django sample app",
                website: "",
                github: "https://github.com/descope-sample-apps/django-sample-app",
                img: Django.src
            },
            {
                title: "Flask sample app",
                website: "",
                github: "https://github.com/descope-sample-apps/flask-sample-app",
                img: FlaskHTML.src
            },
        ]
    },
    {
        title: "SkyWatch",
        date: "July 2021 - September 2022",
        logo: SkyWatch.src,
        position: "Software Developer",
        description: "Automation Team, ML Team, API & SDK Team",
        sources: [
            {
                title: "EarthCache",
                website: "https://skywatch.com/earthcache/",
                github: "",
                img: EarthCache.src
            },
        ]
    },
    {
        title: "Harvard LIT Lab",
        date: "July 2021 - September 2022",
        logo: Harvard.src,
        position: "Student Researcher",
        description: "Lead developer for the MMCA project",
        sources: [
            {
                title: "MMCA Project",
                website: "https://mmca.gse.harvard.edu/index.html",
                github: "https://github.com/hgse-schneider/mmca-website",
                img: HarvardLIT.src
            },
        ]
    },
    {
        title: "CheaprEats",
        date: "August 2020 - November 2020",
        logo: CheaprEats.src,
        position: "Lead Frontend Developer",
        description: "Lead the development of a virtual receipt builder (this was during COVID-19). This was also my first formal software experience :)",
        sources: [
            {
                title: "Crunchbase",
                website: "https://www.crunchbase.com/organization/cheapreats",
                github: "",
                img: ""
            },
        ]
    },
    {
        title: "University of Waterloo",
        date: "July 2020 - September 2020",
        logo: UWaterloo.src,
        position: "Research Assistant",
        description: "Read a bunch of research papers on COVID-19 and learned about RL",
        sources: [
            {
                title: "Participation in TREC 2020 COVID Track Using Continuous Active Learning",
                website: "https://arxiv.org/pdf/2011.01453.pdf",
                github: "",
                img: ""
            },
        ]
    },
]