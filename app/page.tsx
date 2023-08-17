import ProjectPage from "@/components/projects/ProjectPage";
import type { Metadata } from "next";
import { promises as fs } from "fs";
import { projects } from "./projects";
import path from "path";

export const metadata: Metadata = {
  title: "Ignas Andriuškevičius Portfolio",
  description:
    "Audiovizualinio menininko Igno Andriuškevičiaus portfolio puslapis",
};

export default async function Home() {
  // <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  const baseDirectory = path.join(process.cwd(), `/public/images/`);
  const imageDirectory = await fs.readdir(baseDirectory);
  const projectImages = await Promise.all(
    imageDirectory.map(async (project) => {
      const projectDirectory = path.join(baseDirectory, project);
      const images = await fs.readdir(projectDirectory);
      return { project, images };
    })
  );

  return <ProjectPage projects={projects} projectImages={projectImages} />;
}
