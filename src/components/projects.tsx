"use client"

import { useState } from "react";
import { projects, Project } from "@/data/projectData";
import Card from "./card";
import Modal from "./modal";
import ImageSlideshow from "./ImageSlideshow";
import { MoveUpRight } from 'lucide-react';
import React from "react";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
      <div id="projects" className="grid gap-4 max-w-4xl text-left pb-8">
        <div>
          <h1 className="text-6xl font-black text-white">
            RECENT
          </h1>
          <h1 className="text-6xl font-black text-orange-800 mt-2">
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
                gitHubLink={project.gitHubLink}
                figmaLink={project.figmaLink}
                onClick={() => openModal(project)}
            />
            ))}
        </div>

        {isModalOpen && selectedProject && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={
              <div className="flex items-center">
                <span>{selectedProject.name}</span>
                {selectedProject.webLink && (
                  <a 
                    href={selectedProject.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-orange-500 hover:text-orange-400 transition-colors"
                    title="Visit Website"
                  >
                    <MoveUpRight size={20} />
                  </a>
                )}
              </div>
            }
            content={
              <div className="flex flex-col md:flex-row gap-6">
                {/* Project details */}
                <div className="md:w-1/2 flex flex-col justify-start">
                  <div className="flex flex-col mb-4">
                    <p className="text-gray-400 text-lg">{selectedProject.date}</p>
                  </div>
                  <div className="text-gray-300 text-lg mb-6 flex-grow max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {selectedProject.description.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                
                {/* Image slideshow */}
                <div className="md:w-1/2 flex flex-col">
                  <div className="pt-10">
                    {selectedProject.img && selectedProject.img.length > 0 && (
                      <ImageSlideshow images={selectedProject.img} />
                    )}
                  </div>
                  
                  {/* Links moved below the image */}
                  <div className="flex gap-4 mt-4 justify-center">
                    {selectedProject.gitHubLink && (
                      <a 
                        href={selectedProject.gitHubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                        title="GitHub Repository"
                      >
                        <img src="/github.svg" alt="GitHub" className="w-9 h-9" />
                      </a>
                    )}
                    {selectedProject.figmaLink && (
                      <a 
                        href={selectedProject.figmaLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                        title="Figma Design"
                      >
                        <img src="/figma.svg" alt="Figma" className="w-6 h-6" />
                        <span>Figma</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            }
          />
        )}
      </div>
    );
  }