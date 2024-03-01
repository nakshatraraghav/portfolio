import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Callout } from "@/components/mdx/callout";
import { MdxCard } from "@/components/mdx/mdx-card";

const components = {
  h1: ({ ...props }: { [key: string]: any }) => (
    <h1
      className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight"
      {...props}
    />
  ),
  h2: ({ ...props }: { [key: string]: any }) => (
    <h2
      className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: ({ ...props }: { [key: string]: any }) => (
    <h3
      className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h4: ({ ...props }: { [key: string]: any }) => (
    <h4
      className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h5: ({ ...props }: { [key: string]: any }) => (
    <h5
      className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
      {...props}
    />
  ),
  h6: ({ ...props }: { [key: string]: any }) => (
    <h6
      className="mt-8 scroll-m-20 text-base font-semibold tracking-tight"
      {...props}
    />
  ),
  a: ({ ...props }: { [key: string]: any }) => (
    <a
      className="font-medium underline underline-offset-4"
      {...props}
    />
  ),
  p: ({ ...props }: { [key: string]: any }) => (
    <p
      className="leading-7 [&:not(:first-child)]:mt-6"
      {...props}
    />
  ),
  ul: ({ ...props }: { [key: string]: any }) => (
    <ul className="my-6 ml-6 list-disc" {...props} />
  ),
  ol: ({ ...props }: { [key: string]: any }) => (
    <ol className="my-6 ml-6 list-decimal" {...props} />
  ),
  li: ({ ...props }: { [key: string]: any }) => (
    <li className="mt-2" {...props} />
  ),
  blockquote: ({ ...props }: { [key: string]: any }) => (
    <blockquote
      className="mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground"
      {...props}
    />
  ),
  img: ({
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-md border" alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full" {...props} />
    </div>
  ),
  tr: ({ ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className="m-0 border-t p-0 even:bg-muted"
      {...props}
    />
  ),
  th: ({ ...props }: { [key: string]: any }) => (
    <th
      className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: ({ ...props }: { [key: string]: any }) => (
    <td
      className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  pre: ({ ...props }: { [key: string]: any }) => (
    <pre
      className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4"
      {...props}
    />
  ),
  code: ({ ...props }: { [key: string]: any }) => (
    <code
      className="relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm"
      {...props}
    />
  ),
  Image,
  Callout,
  Card: MdxCard,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}

