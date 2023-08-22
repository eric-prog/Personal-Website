import Link from "next/link";
import { BlogListType } from "../_template_data/Blog";


export default function Blog({ blogs }: { blogs: BlogListType[] }) {
    return (
        <div className="col page">
            <p className='title'><span className="text-[3.4vh]">&#9814;</span> / Blogs</p>
            <div className="row flex-wrap w-full">
                {blogs.map((blog, i) => (
                    <Link key={i} className="w-full mt-4" target="_blank" href={blog.link}>
                        <img className="w-full object-cover h-[25vh] mb-2 rounded-sm" src={blog.img} alt="blog-img" />
                        <p className="text-lg underline w-full decoration-gray-500">{blog.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
  }
  