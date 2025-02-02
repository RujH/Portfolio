export default function Projects() {
    return (
      <div className="grid gap-4 max-w-sm text-left pb-8">
        <div>
          <h1 className="text-6xl font-black text-white">
            RECENT
          </h1>
          <h1 className="text-6xl font-black text-gray-800 mt-2">
            PROJECTS
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <a href="#" className="col-span-2 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-bold text-gray-800">Project 1</h3>
            <p className="text-gray-600 mt-2">A brief description of project 1 and its key features.</p>
          </a>

          <a href="#" className="col-span-2 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-bold text-gray-800">Project 2</h3>
            <p className="text-gray-600 mt-2">A brief description of project 2 and what makes it special.</p>
          </a>

          <a href="#" className="col-span-2 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-bold text-gray-800">Project 3</h3>
            <p className="text-gray-600 mt-2">An overview of project 3 and its main accomplishments.</p>
          </a>
        </div>
      </div>
    );
  }