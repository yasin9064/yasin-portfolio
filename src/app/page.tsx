import Link from 'next/link';
import ElectricBorder from '../components/ElectricBorder';

const HomePage = () => {
  return (
    <div className="main-container">
      <div className="left-column">
        <div className="biography">
          <h3>Biography</h3>
          <p>I am a creative developer with a passion for building beautiful and functional web applications. I specialize in front-end development and have a keen eye for design.</p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="connect">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="#">TW</a>
            <a href="#">GH</a>
            <a href="#">LI</a>
          </div>
        </div>
      </div>
      <div className="center-column">
        <h1 className="glitch" data-text="John Doe">John Doe</h1>
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: '50%' }}
        >
          <div className="profile-image"></div>
        </ElectricBorder>
        <p>Welcome to my corner of the internet. I'm a developer, designer, and creator. I'm passionate about building things for the web. I'm currently available for freelance work. If you have a project that you think I'd be a good fit for, please get in touch.</p>
      </div>
      <div className="right-column">
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div className="stat">
            <h4>Projects Completed</h4>
            <p>25</p>
          </div>
        </ElectricBorder>
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div className="stat">
            <h4>Years of Experience</h4>
            <p>5</p>
          </div>
        </ElectricBorder>
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div className="stat">
            <h4>Happy Clients</h4>
            <p>15</p>
          </div>
        </ElectricBorder>
      </div>
    </div>
  );
};

export default HomePage;
