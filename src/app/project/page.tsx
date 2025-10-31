import ProjectCard from '../../components/ProjectCard';

export default function Project() {
  return (
    <main>
      <div className="container">
        <h1 className="glitch" data-text="Projects">Projects</h1>
        <div className="projects-container">
          <ProjectCard
            title="Cyber-Security Initiative"
            description="A project focused on developing next-generation cybersecurity solutions using AI and machine learning to predict and neutralize threats in real-time."
            link="#"
            image="https://picsum.photos/seed/project1/600/400"
          />
          <ProjectCard
            title="Project Phoenix"
            description="An ambitious venture to create a decentralized, AI-driven platform for managing and distributing digital assets with a focus on security and user privacy."
            link="#"
            image="https://picsum.photos/seed/project2/600/400"
          />
          <ProjectCard
            title="Neural-Net Interfaces"
            description="Exploring the future of human-computer interaction by developing brain-computer interfaces (BCIs) that allow for seamless control of digital devices."
            link="#"
            image="https://picsum.photos/seed/project3/600/400"
          />
        </div>
      </div>
    </main>
  );
}
