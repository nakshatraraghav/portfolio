import { allPages } from "../../../.contentlayer/generated";
import { Mdx } from "@/components/mdx/mdx-components";

export default function UsesPage() {

  const uses = allPages[0];

  return <Mdx code={uses.body.code} />
}
