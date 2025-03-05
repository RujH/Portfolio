"use client"

import { useState } from "react";
import { experiences, ExperienceInterface } from "@/data/experienceData";
import Card from "./card";
import Modal from "./modal";

export default function Experience() {
    const [selectedExperience, setSelectedExperience] = useState<ExperienceInterface | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (exp: ExperienceInterface) => {
        setSelectedExperience(exp);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
      <div id="experience" className="grid gap-4 max-w-4xl text-left pb-8">
        <div>
          <h1 className="text-6xl font-black text-white">
            5 YEARS OF
          </h1>
          <h1 className="text-6xl font-black text-orange-800 mt-2">
            EXPERIENCE
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {experiences.map((exp) => (
          <Card
            key={exp.name}
            name={exp.name}
            description={exp.description}
            date={exp.date}
            onClick={() => openModal(exp)}
          />
          ))}
        </div>

        {isModalOpen && selectedExperience && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={
              selectedExperience.link ? (
                <a 
                  href={selectedExperience.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 hover:underline"
                >
                  {selectedExperience.name}
                </a>
              ) : (
                selectedExperience.name
              )
            }
            content={
              <div>
                <div className="flex flex-col mb-6">
                  <p className="text-orange-500 font-semibold text-lg">{selectedExperience.role}</p>
                  <p className="text-gray-400 text-lg">{selectedExperience.date}</p>
                </div>
                {Array.isArray(selectedExperience.description) ? (
                  <ul className="list-disc pl-6 space-y-3">
                    {selectedExperience.description.map((desc: string, index: number) => (
                      <li key={index} className="text-gray-300 text-lg">{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 text-lg">{selectedExperience.description}</p>
                )}
                {selectedExperience.link && (
                  <a 
                    href={selectedExperience.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mt-4 inline-block"
                  >
                    Learn more
                  </a>
                )}
              </div>
            }
          />
        )}
      </div>
    );
  }