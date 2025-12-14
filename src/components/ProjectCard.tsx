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
        <p className="description">{description}</p>
        <Link href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </Link>
      </div>
      <style>{`
        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #1a1a1a;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          color: #fff;
        }
        .project-image-container {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .project-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        h3 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }
        .description {
          height: 100px;
          overflow-y: auto;
          margin-bottom: 1rem;
          padding-right: 5px;
          color: #ccc;
          line-height: 1.5;
        }
        .description::-webkit-scrollbar {
          width: 5px;
        }
        .description::-webkit-scrollbar-thumb {
          background: #555;
          border-radius: 3px;
        }
        .project-link {
          margin-top: auto;
          display: block;
          text-align: center;
          background: #0070f3;
          padding: 10px;
          border-radius: 5px;
          text-decoration: none;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
