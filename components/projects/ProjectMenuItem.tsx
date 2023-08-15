import type { Project } from "@/app/types";
import { MouseEventHandler } from "react";

const ProjectMenuItem = ({
  project,
  active,
  onClick,
  id,
}: {
  project: Project;
  active: boolean;
  onClick: (current: number) => void;
  id: number;
}) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`border-double border-0 border-gray-400 bg-gray-100 hover:border-l-4 w-full text-left ${
        active ? "border-l-4" : ""
      }`}
    >
      <div
        className={`border-solid border-2 border-b-0 border-gray-500 bg-gray-100 ${
          active ? "border-gray-200" : ""
        }`}
      >
        <div
          className={`border-double border-0 border-gray-400 bg-red-600 ${
            active ? "border-l-4" : ""
          }`}
        >
          <h1
            className={`p-2 text-2xl bg-white cursor-pointer ${
              active ? "text-red-600" : "hover:text-red-500"
            }`}
          >
            {project.title}
          </h1>
        </div>
      </div>
    </button>
  );
};

export default ProjectMenuItem;
