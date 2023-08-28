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
        description: "The first intern hired at Descope. I'm hacking away at open-source projects, a few of them actively being used by customers (most notably Descope Explorer). The Hackathon Template is expected to be featured on Vercel templates (https://vercel.com/templates) soon! My intuition for design and functional interfaces has led me to be the go-to guy for design in the team.",
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
        description: "A splendid experience! Worked on various teams and roles: Automation, ML, and API/SDK. I was the youngest hire at the company at 17 years old. I got to work on the backend of the cutting-edge EOD delivery (earth observation data). Most notable works include designing and building their SDK for the EarthCache API and building an internal satellite search engine tool for labelling, reporting, and viewing satellite imagery. It's currently being used across the entire company, and interns now build upon the tool.",
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
        description: "I led the software side of the MMCA project which aims to visualize the multimodal indicators of collaboration that have been identified by social scientists over the last decade. A fascinating topic on how multimodal learning changes our behaviour and approach to learning. The MMCA project visually displays this impact in six layers (each layer being more broad), each node being the mode (e.g. eye motion, facial expressions, etc.).  Worked under under Dr. Bertrand Schneider at Harvard LIT lab. I was inducted as the youngest official member of the lab at 18 years old among 120+ members including Harvard PhDs and undergrads.",
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
        description: "My first formal software experience. Worked with a team of 5 to develop a virtual receipt builder (this was during COVID-19). Learned a lot about working in a team and frontend development: React, styled-components and Tailwind.",
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
        description: "Worked under Dr. Gordon V. Cormack to create a search engine for scientific literature on COVID-19 by analyzing and labelling 3000+ documents. This was to contribute to increasing the document relevancy model accuracy of S-CAL’s multi-agent reinforcement learning algorithm.",
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