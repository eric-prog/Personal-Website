import Link from "next/link";


export default function BottomNav() {
    return (
        <div className="row justify-between my-8 max-md:flex-wrap">
            <p>© 2023 Eric Sheen</p>
            <div className="max-md:mt-4">
                <Link target="_blank" href="https://github.com/eric-prog/" className="mr-4">&#9824; GitHub</Link>
                <Link target="_blank" href="https://www.linkedin.com/in/eric-sheen/" className="mr-4">&#9827; LinkedIn</Link>
                <Link target="_blank" href="https://www.youtube.com/channel/UC2fjk5zFsrMCjOMASR7N-fw" className="mr-4">&#9830; YouTube</Link>
                <Link target="_blank" href="https://twitter.com/eric_sheen0" className="mr-4">&#9829; Twitter</Link>
                <Link target="_blank" href="https://twitter.com/eric_sheen0"><span className="text-xl">∞</span> infinit3e</Link>
            </div>
        </div>
    )
  }
  