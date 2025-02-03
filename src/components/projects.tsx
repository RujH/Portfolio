import { projects } from "@/data/projectData";
import Card from "./card";

export default function Projects() {
    return (
      <div id="projects" className="grid gap-4 max-w-4xl text-left pb-8">
        <div>
          <h1 className="text-6xl font-black text-white">
            RECENT
          </h1>
          <h1 className="text-6xl font-black text-gray-800 mt-2">
            PROJECTS
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4">
            {projects.map((project) => (
            <Card
                key={project.name}
                name={project.name}
                description={project.description}
                date={project.date}
                link={project.link}
            />
            ))}
        </div>
      </div>
    );
  }