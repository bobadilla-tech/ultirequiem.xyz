export interface Project {
  name: string;
  description: string;
  github: string;
  tags: Tags[];
  website?: string;
}

//TODO Add moreeee
export type Tags =
  | "typescript"
  | "react"
  | "node"
  | "express"
  | "mongodb"
  | "graphql"
  | "apollo"
  | "prisma"
  | "docker"
  | "hackathon"
  | "netlify"
  | "vercel"
  | "images"
  | "tailwind"
  | "kumeru";

// I have more than 234 repos 😩
export const projects: Project[] = [
  {
    name: "Sergif",
    description:
      "Record GIFs with your Webcam and share them with your friends",
    github: "https://github.com/UltiRequiem/sergif",
    website: "https://sergif.ultirequiem.com",
    tags: [
      "typescript",
      "hackathon",
      "netlify",
      "images",
      "tailwind",
      "kumeru",
    ],
  },
];
