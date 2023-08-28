import EzIntern from '../_assets/projects/ezintern.png'
import APIRequests from '../_assets/projects/apirequests.png'


export type ProjectType = {
    title: string,
    description: string,
    widget: string,
    link: string,
    link2: string,
}


export const ProjectsList: ProjectType[] = [
    {
        title: "Easy Intern",
        description: "I get a lot of messages on how I'm able to get these internships and the general processes of these interviews, so I created Easy Intern to help upcoming developers succeed in getting their first internship. If want to know anything more specific, feel free to message me on Discord or LinkedIn! If you find this helpful, give it a share!",
        widget: EzIntern.src,
        link: "",
        link2: "https://easyintern.netlify.app/"
    },
    {
        title: "api-request-js",
        description: "Fetching data in JavaScript can be quite annoying. You need to async-await data, handle errors, and then log that data. This can be a good 30 lines of code. In Python, you can fetch data with a simple 'request. get(URL)' and that's just one line (https://requests.readthedocs.io/en/latest/user/quickstart/). I built api-request-js to accomplish the exact same effect. Now you can 'npm install api-request-js' and do a 'request.getRequest(url, path).' It peaked at like 14 installs/week if I recall correctly.",
        widget: APIRequests.src,
        link: "https://requestjs.netlify.app/",
        link2: "https://www.npmjs.com/package/api-request-js"
    }
]