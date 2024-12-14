// components/ProjectCard.js
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  imgSrc,
  link,
}: {
  title: string;
  imgSrc: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
    >
      <div className="relative w-full h-48">
        <Image
          src={imgSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </Link>
  );
}
