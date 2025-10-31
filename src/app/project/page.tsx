import ProjectCard from '../../components/ProjectCard';

export default function Project() {
  return (
    <main>
      <div className="container">
        <h1 className="glitch" data-text="Projects">Projects</h1>
        <div className="projects-container">
          <ProjectCard
            title="Project 1"
            description="A cool cyberpunk-themed project."
            link="#"
          />
          <ProjectCard
            title="Project 2"
            description="Another awesome project with a futuristic vibe."
            link="#"
          />
          <ProjectCard
            title="Project 3"
            description="A third project that pushes the boundaries of technology."
            link="#"
          />
        </div>
      </div>
    </main>
  );
}
