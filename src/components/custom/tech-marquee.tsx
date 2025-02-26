import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const technologies = [
  {
    name: "Astro",
    image: "/images/astro-icon-dark.svg",
    site: "https://astro.build/",
  },
  {
    name: "Emberjs",
    image: "/images/e-rounded-icon-4c.svg",
    site: "https://emberjs.com/",
  },
  {
    name: "Javascript",
    image: "/images/logo-javascript.svg",
    site: "https://262.ecma-international.org/14.0/",
  },
  {
    name: "Typescript",
    image: "/images/typescript.svg",
    site: "https://www.typescriptlang.org/",
  },
  {
    name: "Python",
    image: "/images/python-5.svg",
    site: "https://www.python.org/",
  },
  {
    name: "SPARQL",
    image: "/images/sparql.svg",
    site: "https://www.w3.org/TR/sparql11-query/",
  },
  {
    name: "Docker",
    image: "/images/docker.svg",
    site: "https://www.docker.com/",
  },
  {
    name: "Git",
    image: "/images/git.svg",
    site: "https://git-scm.com/",
  },
  {
    name: "Arduino",
    image: "/images/arduino.svg",
    site: "https://www.arduino.cc/",
  },
];

const firstRow = technologies.slice(0, technologies.length / 2);
const secondRow = technologies.slice(technologies.length / 2);

const TechnologyCard = ({
  name,
  image,
  site,
}: {
  name: string;
  image: string;
  site: string;
}) => {
  return (
    <a href={site} target="_blank">
      <figure
        className={cn(
          "relative h-full w-55 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={image}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
          </div>
        </div>
      </figure>
    </a>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((tech) => (
          <TechnologyCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((tech) => (
          <TechnologyCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
