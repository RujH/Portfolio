import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';

interface CardProps {
  name: string;
  description: string | string[];
  date: string;
  link?: string;
  onClick?: () => void;
}

export default function Card({ name, description, date, link, onClick }: CardProps) {
  // Format description to handle both string and string[] types
  const formattedDescription = typeof description === 'string' 
    ? description 
    : description[0]; // Just show the first item in the array for the card preview
  
  const cardContent = (
    <div className="rounded-lg shadow-md p-4 hover:shadow-lg hover:bg-gray-700 hover:-translate-y-1 transition duration-200 block bg-transparent w-full relative">
      <div className="flex flex-col">
        <div>
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="text-lg text-gray-400 mt-2">{formattedDescription}</p>
          <p className="text-sm text-gray-500 mt-4">{date}</p>
        </div>
      </div>
      <div className="absolute top-4 right-4 text-gray-400">
        <MoveUpRight size={25} color="orange"/>
      </div>
    </div>
  );

  // If onClick is provided, make the card clickable with the onClick handler
  if (onClick) {
    return (
      <div onClick={onClick} className="cursor-pointer">
        {cardContent}
      </div>
    );
  }

  // Otherwise, use the Link component if a link is provided
  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </Link>
    );
  }

  // Fallback for when neither onClick nor link is provided
  return cardContent;
}
