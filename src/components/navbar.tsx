import Link from "next/link"

const links = {
  "home": "/",
  "projects": "/projects",
  "contact": "/contact"
}

export function Navbar() {
  return <nav className="flex items-start space-x-4">
    {Object.entries(links).map(([name, url]) => {
      return <Link href={url} key={name}>{
        <p className="text-sm relative inline-block hover:text-neutral-300 group">
          {name}
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-neutral-300 transform origin-bottom-left scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out"></span>
        </p>

      }</Link>
    })}
  </nav>
}
