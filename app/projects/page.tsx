import GalleryPage from "@/components/projects/GalleryPage";
import { promises as fs } from "fs";
import { projects } from "./projects";
import path from "path";

const Projects = async () => {
  const baseDirectory = path.join(process.cwd(), `/public/images/`);
  const imageDirectory = await fs.readdir(baseDirectory);
  const projectImages = await Promise.all(
    imageDirectory.map(async (project) => {
      const projectDirectory = path.join(baseDirectory, project);
      const images = await fs.readdir(projectDirectory);
      return { project, images };
    })
  );

  return <GalleryPage projects={projects} projectImages={projectImages} />;
};

export default Projects;
