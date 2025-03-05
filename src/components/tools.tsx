import Link from 'next/link';
import Image from 'next/image';
import { tools } from '../data/toolsData';

export default function Tools() {
    return (
      <div id="tools" className="grid gap-4 max-w-4xl text-left pb-8">
        <div>
          <h1 className="text-6xl font-black text-white">
            TOOLS
          </h1>
          <h1 className="text-6xl font-black text-orange-800 mt-2">
            USED
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {tools.map((tool) => (
            <Link key={tool.name} href={tool.link} target="_blank" rel="noopener noreferrer">
              <div className="rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 block">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-white rounded-lg p-2" style={{ backgroundColor: 'white' }}>
                    <Image src={tool.image} alt={tool.name} width={50} height={50} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                    <p className="text-sm text-gray-400">{tool.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
}
