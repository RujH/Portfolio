import { experience } from "@/data/experienceData";
import Card from "./card";

export default function Experience() {
    return (
      <div className="grid gap-4 max-w-4xl text-left pb-8">
        <div>
          <h1 className="text-6xl font-black text-white">
            5 YEARS OF
          </h1>
          <h1 className="text-6xl font-black text-gray-800 mt-2">
            EXPERIENCE
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4">
            {experience.map((experience) => (
            <Card
                key={experience.name}
                name={experience.name}
                description={experience.description}
                date={experience.date}
                link={experience.link}
            />
            ))}
        </div>

      </div>
    );
  }