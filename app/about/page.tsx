import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div>
        <div className="text-muted-foreground text-lg py-4 space-y-4">
          <p>Hello! I’m Minsung Kim, a passionate software developer with a Master&apos;s degree in Informatics from the University of Edinburgh.</p>

          <p>
          During my academic and professional career, I’ve worked on diverse projects, from developing a drone pathfinding program using the A* algorithm to designing a gardening robot powered by machine learning and computer vision. My experience spans creating search engines with Python and Flask, building statistical models with R, and leveraging PyTorch and Google Cloud for action recognition applications.
          </p>
          <p>
          Before diving into software development, I honed my technical skills with a Diploma in Electronics Engineering from Centennial College, where I designed circuits, built motor-controlled systems, and explored IoT solutions.
          </p>
          <p>
          Outside of work, I enjoy cooking new recipes and hitting the gym to stay active and energized.
          </p>
          <p>
          Thanks for stopping by! Feel free to connect with me via the footer links.
          </p>

        </div>
      </div>
    </div>
  );
}
