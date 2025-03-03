import Contact from "./contact";
import Experience from "./experience";
import Projects from "./projects";
import Tools from "./tools";

export default function Right() {
  return (
    <div className="grid gap-4 max-w-2xl text-left pb-8 overflow-y-auto">
      <div>
        <h1 className="text-6xl font-black text-white">
          SOFTWARE
        </h1>
        <h1 className="text-6xl font-black text-gray-800 mt-2">
          ENGINEER
        </h1>
      </div>
      
      <p className="text-gray-300 mb-16">
        I&apos;m a software engineer who enjoys both the technical and creative sides of development. Whether designing intuitive user experiences or architecting backend systems, I see software as a tool for bringing ideas to life. Beyond tech, I explore creativity through drawing, design, and cooking, always driven by a curiosity to build, refine, and create meaningful experiences.
      </p>

      <Projects/>
      <Experience/>
      <Tools/>
      <Contact/>
    
    
     
    </div>
  );
}
