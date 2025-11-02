const HomePage = () => {
  return (
    <div className="main-container">
      <div className="left-column">
        <div className="about">
          <h3>About</h3>
          <p>I am a creative developer with a passion for building beautiful and functional web applications. I specialize in front-end development and have a keen eye for design.</p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>Flutter</li>
            <li>Python</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
      <div className="center-column">
        <h1 className="glitch" data-text="MD YASIN">MD YASIN</h1>
        <div className="profile-image"></div>
      </div>
      <div className="right-column">
        <div className="stat">
          <h4>Projects Completed</h4>
          <p>4</p>
        </div>
        <div className="stat">
          <h4>Years of Experience</h4>
          <p>3</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
