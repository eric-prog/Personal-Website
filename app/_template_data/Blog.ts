import Next13 from '../_assets/blog/next13.webp'
import Next12 from '../_assets/blog/next12.webp'
import DjangoDeep from '../_assets/blog/django.webp'
import DjangoSample from '../_assets/blog/djangosample.webp'
import Waitlist from '../_assets/blog/waitlist.webp'
import FlaskHTML from '../_assets/blog/flaskhtml.webp'
import FlaskReact from '../_assets/blog/flaskreact.webp'
import JWT from '../_assets/blog/jwt.webp'


export type BlogListType = {
    title: string,
    link: string,
    img: string,
}


export const BlogList: BlogListType[] = [
    {
        title: "Add Descope Authentication to a Next.js 13 App Using NextAuth",
        link: "https://www.descope.com/blog/post/auth-nextjs13-app-nextauth",
        img: Next13.src
    },
    {
        title: "Next.js 12 vs Next.js 13: What's the Difference?",
        link: "https://www.descope.com/blog/post/nextjs12-vs-nextjs13",
        img: Next12.src
    },
    {
        title: "A Deep Dive into the Descope Django Plugin",
        link: "https://www.descope.com/blog/post/django-sdk",
        img: DjangoDeep.src
    },
    {
        title: "Adding Descope Authentication to a Django App",
        link: "https://www.descope.com/blog/post/auth-django-app",
        img: DjangoSample.src
    },
    {
        title: "Build a Waitlist App With Descope Flows and Airtable",
        link: "https://www.descope.com/blog/post/waitlist-app-airtable",
        img: Waitlist.src
    },
    {
        title: "Adding Descope Authentication to a Flask App",
        link: "https://www.descope.com/blog/post/auth-flask-app",
        img: FlaskHTML.src
    },
    {
        title: "Adding Descope Authentication to a React+Flask App",
        link: "https://www.descope.com/blog/post/auth-react-flask-app",
        img: FlaskReact.src
    },
    {
        title: "Add User Information to JWT Response Using Descope Flows",
        link: "https://www.descope.com/blog/post/add-user-information-jwt-response",
        img: JWT.src
    },
]