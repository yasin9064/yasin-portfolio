import ProjectCard from '../../components/ProjectCard';

export default function Project() {
  return (
    <main>
      <div className="container">
        <style>{`
          .projects-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
          }
        `}</style>
        <h1 className="glitch" data-text="Projects">Projects</h1>
        <div className="projects-container">
          <ProjectCard
            title="Todo-App"
            description="A simple and elegant Flutter-based To-Do app for managing daily tasks with an intuitive interface and task completion tracking."
            link="https://github.com/yasin9064/Todo-App.git"
            image="/assets/Todo/Todo-1.png"
          />
          <ProjectCard
            title="BMI Calculator Pro"
            description="A Flutter-based BMI Calculator app that computes Body Mass Index using metric or imperial units. It features a clean, responsive UI with gender selection and instant result display."
            link="https://github.com/yasin9064/BMI_Calculator_Pro.git"
            image="/assets/BMI/BMI-1.png"
          />
          <ProjectCard
            title="Login-Page"
            description="A Flutter-based authentication interface for Paradox, featuring a vibrant and responsive design with cloud-themed visuals. The layout emphasizes usability and aesthetics, providing an engaging experience for both new and returning users."
            link="https://github.com/yasin9064/Login-Page-Project.git"
            image="/assets/Login/Login-1.png"
          />
          <ProjectCard
            title="Imagin-AI"
            description="ImaginAI is a smart AI-powered image generation app built with Flutter that transforms text prompts into stunning visuals. Simply describe your idea, choose an art style like Anime, and let AI create beautiful, high-quality images in seconds. Designed with a clean UI and smooth experience, ImaginAI makes creativity fast, easy, and accessible for everyone"
            link="https://github.com/yasin9064/imagin_ai.git"
            image="/assets/Imagin-AI/ImaginAI.png"
          />
        </div>
      </div>
    </main>
  );
}
