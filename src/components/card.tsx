import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';

interface CardProps {
  name: string;
  description: string;
  date: string;
  link: string;
}

export default function Card({ name, description, date, link }: CardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="rounded-lg shadow-md p-4 hover:shadow-lg hover:bg-gray-700 hover:-translate-y-1 transition duration-200 block bg-transparent w-full relative">
        <div className="flex flex-col">
          <div>
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-lg text-gray-400 mt-2">{description}</p>
            <p className="text-sm text-gray-500 mt-4">{date}</p>
          </div>
        </div>
        <div className="absolute top-4 right-4 text-gray-400">
          <MoveUpRight size={25}  color="orange"/>
        </div>
      </div>
    </Link>
  );
}
