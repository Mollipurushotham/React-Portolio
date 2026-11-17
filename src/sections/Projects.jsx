
import React from "react";
import { ArrowUpRight, Code2 } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Q-Shop E-commerce",
    type: "React · CSS · React Router",
    description:
      "An e-commerce website where users can browse products, add items to their cart, manage quantities and view cart details.",
    tags: ["React", "Hooks", "Responsive UI"],
    link: "https://github.com/Mollipurushotham/Shopkart"
  },
  {
    number: "02",
    title: "Bite Box - Food Ordering App",
    type: "Food Delivery Application",
    description:
      "A food ordering application inspired by Swiggy. Users can explore restaurants, browse food menus, add items to their cart and place orders.",
    tags: ["Food Delivery", "Restaurant Listing", "Online Ordering"],
    link: "https://github.com/Mollipurushotham/BiteBox"
  },
  {
    number: "03",
    title: "ChaloChale - Travel App",
    type: "Travel & Tourism Application",
    description:
      "A responsive travel application developed using HTML, CSS and Bootstrap. Users can explore travel destinations, discover tourist attractions and plan trips.",
    tags: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
    link: "https://github.com/Mollipurushotham/Bootstrap-Travel-App"
  }
];

export default function Projects() {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.number}>
          <div className="project-top">
            <span>{project.number} / PROJECT</span>
            <Code2 size={20} />
          </div>

          <h3>{project.title}</h3>
          <p className="project-type">{project.type}</p>
          <p className="body-copy">{project.description}</p>

          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <a
            className="project-link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            View project <ArrowUpRight size={16} />
          </a>
        </article>
      ))}
    </div>
  );
}
