import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, image }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <Image src={image} alt={title} className="project-image" width={500} height={300} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
