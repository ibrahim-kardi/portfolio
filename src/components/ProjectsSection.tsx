// components/ProjectsSection.js
import ProjectCard from "./ProjectCard";
import ecomerce from "../../public/project3.png";
import project from "../../public/porject1.png";
import portfolio from "../../public/project4.png";
const projects = [
  {
    title: "E-commerce Store",
    imgSrc: ecomerce.src,
    link: "https://mouseonestore.myshopify.com/",
  },
  {
    title: "Project management system",
    imgSrc: project.src,
    link: "https://taskmanager-live.vercel.app/",
  },
  {
    title: "Company Website",
    imgSrc: portfolio.src,
    link: "https://www.buddyboss.com/pricing/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-10 bg-gray-100" id="projects">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              imgSrc={project.imgSrc}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
