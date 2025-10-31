export default function Skill() {
  return (
    <main>
      <div className="container">
        <h1 className="glitch" data-text="Skills">Skills</h1>
        <div className="skills-container">
          <div className="skills-category">
            <h2>Languages</h2>
            <div className="skill">
              <p>DART</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill">
              <p>C#</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill">
              <p>Python</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
          <div className="skills-category">
            <h2>Frameworks</h2>
            <div className="skill">
              <p>Flutter</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="skill">
              <p>Django</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
          <div className="skills-category">
            <h2>Others</h2>
            <div className="skill">
              <p>Figma</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className="skill">
              <p>MS Office</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
