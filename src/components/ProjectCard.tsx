import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={link} legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">View Project</a>
      </Link>
    </div>
  );
};

export default ProjectCard;
