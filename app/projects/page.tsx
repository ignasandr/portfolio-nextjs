import GalleryPage from "@/components/projects/GalleryPage";
import { promises as fs } from "fs";
import { projects } from "./projects";
import path from "path";

// projects sorted by level of participation, love for the project. The level of red on hover depends on that. `text-red-${8 - id}00`

//on mobile the project side menu is on top but the tabs are stacked one on top of the other, saving space

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
