import type { Project } from "@/app/types";
import ProjectMenuItem from "./ProjectMenuItem";

const ProjectMenu = ({
  projects,
  current,
  onClick,
}: {
  projects: Project[];
  current: number;
  onClick: (current: number) => void;
}) => {
  return (
    <div className="md:w-1/2 border-b-4 border-solid border-gray-600 bg-gray-600 h-fit transform select-none">
      {projects.map((project: Project, index) => (
        <ProjectMenuItem
          project={project}
          active={project.id === current}
          onClick={onClick}
          id={project.id}
          key={project.id}
        />
      ))}
    </div>
  );
};

export default ProjectMenu;
