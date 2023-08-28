import Link from "next/link";
import { BlogListType } from "../_template_data/Blog";


export default function Blog({ blogs }: { blogs: BlogListType[] }) {
    return (
        <div className="col page">
            <p className='title'><span className="text-[3.4vh]">&#9814;</span> / Blogs</p>
            <div className="col w-full">
                {blogs.map((blog, i) => (
                    <Link key={i} className="row w-full mt-4 max-md:col" target="_blank" href={blog.link}>
                        <img className="w-[50%] max-md:w-full object-cover h-[20vh] mb-2 rounded-sm border-[1px] border-[#434343]" src={blog.img} alt="blog-img" />
                        <p className="pl-4 w-[50%] max-md:w-full max-md:pl-0 text-lg underline decoration-gray-500">{blog.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
  }
  