import AchievementCard from "../../components/AchievementCard";

export default function Achievements() {
  const achievements = [
    {
      title: "Code Jam Finalist",
      year: 2023,
      description: "Competed against the best programmers in the world at the Google Code Jam finals."
    },
    {
      title: "Top Developer Award",
      year: 2022,
      description: "Recognized as a top developer for outstanding contributions to open source projects."
    },
    {
      title: "Open Source Contributor",
      year: 2021,
      description: "Contributed to several major open source projects, including React and Next.js."
    },
    {
      title: "Hackathon Winner",
      year: 2020,
      description: "Won first place in a local hackathon with a team of three developers."
    }
  ];

  return (
    <main>
      <div className="container">
        <h1 className="glitch" data-text="Achievements">Achievements</h1>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </main>
  );
}