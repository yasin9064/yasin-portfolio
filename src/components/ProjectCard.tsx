import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={link} legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
