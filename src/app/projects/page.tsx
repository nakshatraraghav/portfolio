import { Metadata } from "next"

import { allDocs } from "../../../.contentlayer/generated"
import { Card } from "@/components/card"
import { Article } from "@/components/article"

export const metadata: Metadata = {
  title: "Projects | Nakshatra Raghav",
  description: "Some of the projects that i have built"
}

export default function ProjectsPage() {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <div className="text-lg font-semibold tracking-tight underline underline-offset-4">Projects</div>
        <p>Some of the projects that i have built.</p>
      </div>
      <div className="w-full h-px bg-zinc-800" />
      <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2">
        {
          allDocs.map((doc) => {
            return <Card key={doc.slug}>
              <Article doc={doc} />
            </Card>
          })
        }
      </div>
    </div>
  )
}
