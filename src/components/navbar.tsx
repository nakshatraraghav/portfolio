import Link from "next/link"

const links = {
  "home": "/",
  "projects": "/projects",
  "uses": "/uses",
}

export function Navbar() {
  return <div className="flex items-center justify-between mx-8">
    <nav className="flex items-start space-x-4">
      {Object.entries(links).map(([name, url]) => {
        return <Link href={url} key={name}>{
          <p className="text-sm relative text-neutral-100 inline-block hover:text-neutral-300 group">
            {name}
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-neutral-300 transform origin-bottom-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </p>

        }</Link>
      })}
    </nav>
    <div className="flex items-center justify-between space-x-4">
      <a href="https://github.com/nakshatraraghav/">
        <p className="text-sm relative inline-block hover:text-neutral-300 group">
          github
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-neutral-300 transform origin-bottom-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
        </p>
      </a>
      <a href="https://www.linkedin.com/in/nakshatraraghav/">
        <p className="text-sm relative inline-block hover:text-neutral-300 group">
          linkedin
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-neutral-300 transform origin-bottom-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
        </p>
      </a>
    </div>
  </div>
}
