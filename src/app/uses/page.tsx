import { allPages } from "../../../.contentlayer/generated";
import { Mdx } from "@/components/mdx/mdx-components";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses | Nakshatra Raghav",
  description: "i like to use this"
}

export default function UsesPage() {

  const uses = allPages[0];

  return <Mdx code={uses.body.code} />
}
