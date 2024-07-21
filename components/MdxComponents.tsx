import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./Callout";
import { cn } from "@/lib/utils";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

// you can do styling here. Copy and paste codes from below
// https://github.com/shadcn-ui/taxonomy/blob/main/components/mdx-components.tsx
const components = {
  Image,
  Callout,
  // example
  // h1: ({ className, ...props }) => (
  //   <h1
  //     className={cn(
  //       "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
  //       className
  //     )}
  //     {...props}
  //   />
  // ),
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}