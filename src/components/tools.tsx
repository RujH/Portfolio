import Link from 'next/link';
import Image from 'next/image';
export default function Tools() {
    return (
      <div className="grid gap-4 max-w-sm text-left pb-8">
        <div>
          <h1 className="text-6xl font-black text-white">
            TOOLS
          </h1>
          <h1 className="text-6xl font-black text-gray-800 mt-2">
            USED
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Link href="https://www.figma.com/" passHref>
            <div className="rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 block">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                    <Image src="/figma.svg" alt="Figma" width={40} height={40} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">Figma</h3>
                  <p className="text-sm text-gray-400">Design tool</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
}
