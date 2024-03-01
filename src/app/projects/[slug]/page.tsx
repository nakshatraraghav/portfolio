import { Metadata } from "next";
import { notFound } from "next/navigation";

import { allDocs } from "contentlayer/generated";
import { Mdx } from "@/components/mdx/mdx-components";

function getMarkdown(slug: string) {

  const doc = allDocs.find((doc) => doc.slug == `/projects/${slug}`);

  if (!doc) {
    notFound();
  }

  return doc;
};

interface PageProps {
  params: {
    slug: string;
  }
}

export default async function Page({ params }: PageProps) {

  const slug = params.slug;

  const doc = getMarkdown(slug);

  return <Mdx code={doc.body.code} />
}
