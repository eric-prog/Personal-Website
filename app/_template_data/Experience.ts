import Descope from '../_assets/links/descope-removebg-preview.png'
import SkyWatch from '../_assets/links/skywatch.png'
import Harvard from '../_assets/links/descope-removebg-preview.png'
import CheaprEats from '../_assets/links/cheapreats.png'
import UWaterloo from '../_assets/links/uwaterloo.png'

import D3 from '../_assets/links/skills/d3.png'
import Django from '../_assets/links/skills/django.png'
import flask from '../_assets/links/skills/flask.png'
import nextjs from '../_assets/links/skills/nextjs.png'
import nodejs from '../_assets/links/skills/nodejs.svg'
import python from '../_assets/links/skills/python.png'
import react from '../_assets/links/skills/react.png'
import svelte from '../_assets/links/skills/svelte.png'
import aws from '../_assets/links/skills/aws.png'
import mongodb from '../_assets/links/skills/mongodb.png'
import graphql from '../_assets/links/skills/graphql.png'
import typescript from '../_assets/links/skills/typescript.png'


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
    techstack: string[],
    sources: Source[]
}


export const ExperienceList: ExperienceListType[] = [
    {
        title: "Descope",
        date: "May 2023 - August 2023",
        logo: Descope.src,
        position: "DevRel Engineer (Founding intern)",
        description: "hacking away on open source projects",
        techstack: [
            Django.src, flask.src, react.src, nextjs.src, svelte.src, nodejs.src
        ],
        sources: [
            {
                title: "Descope Explorer",
                website: "https://explorer.descope.com/",
                github: "https://github.com/descope-sample-apps/descope-explorer",
                img: ""
            },
            {
                title: "Next.js 13 Hackathon Template",
                website: "https://nextjs-hackathon-template.descope.com/",
                github: "https://github.com/descope/nextjs-hackathon-template",
                img: ""
            },
            {
                title: "Next.js 12 Hackathon Template",
                website: "https://nextjs-hackathon-template-pages.preview.descope.org/",
                github: "https://github.com/descope-sample-apps/nextjs-hackathon-template-pages",
                img: ""
            },
            {
                title: "Flask React sample app",
                website: "",
                github: "https://github.com/descope-sample-apps/flask-react-sample-app",
                img: ""
            },
            {
                title: "Startup landing page",
                website: "https://svelte-sample-app.preview.descope.org/",
                github: "https://github.com/descope-sample-apps/svelte-sample-app",
                img: ""
            },
            {
                title: "Waitlist sample app",
                website: "https://waitlist-sample-app.preview.descope.org/",
                github: "https://github.com/descope-sample-apps/waitlist-sample-app",
                img: ""
            },
            {
                title: "Django sample app",
                website: "",
                github: "https://github.com/descope-sample-apps/django-sample-app",
                img: ""
            },
            {
                title: "Flask sample app",
                website: "",
                github: "https://github.com/descope-sample-apps/flask-sample-app",
                img: ""
            },
        ]
    },
    {
        title: "SkyWatch",
        date: "July 2021 - September 2022",
        logo: SkyWatch.src,
        position: "Software Developer",
        description: "Automation Team, ML Team, API & SDK Team",
        techstack: [
            aws.src, python.src, typescript.src, react.src, flask.src, 
        ],
        sources: [
            {
                title: "EarthCache",
                website: "https://skywatch.com/earthcache/",
                github: "",
                img: ""
            },
        ]
    },
    {
        title: "Harvard LIT Lab",
        date: "July 2021 - September 2022",
        logo: Harvard.src,
        position: "Student Researcher",
        description: "Lead developer for the MMCA project",
        techstack: [
            D3.src, 
        ],
        sources: [
            {
                title: "EarthCache",
                website: "https://lit.gse.harvard.edu/members",
                github: "https://github.com/hgse-schneider/mmca-website",
                img: ""
            },
        ]
    },
    {
        title: "CheaprEats",
        date: "August 2020 - November 2020",
        logo: CheaprEats.src,
        position: "Lead Frontend Developer",
        description: "Lead the development of a virtual receipt builder (this was during COVID-19). This was also my first formal software experience :)",
        techstack: [
            react.src, graphql.src, mongodb.src, 
        ],
        sources: [
            {
                title: "EarthCache",
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
        techstack: [
            python.src, 
        ],
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