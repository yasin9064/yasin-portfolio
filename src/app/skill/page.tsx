export default function Skill() {
  return (
    <main>
      <div className="container">
        <h1 className="glitch" data-text="Skills">Skills</h1>
        <div className="skills-container">
          <div className="skill">
            <p>HTML</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill">
            <p>CSS</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill">
            <p>JavaScript</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill">
            <p>React</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="skill">
            <p>Next.js</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
