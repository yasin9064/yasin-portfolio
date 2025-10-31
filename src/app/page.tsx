import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="main-container">
      <div className="left-column">
        <div className="biography">
          <h3>Biography</h3>
          <p>Skilled Developer & AI Tool Expert with expertise in building intelligent solutions using AI, automation, and advanced software development.</p>
        </div>
        
        <div className="connect">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="center-column">
      <div className="main-heading glitch" data-text="Md Yasin">Md Yasin</div>
        <div className="profile-image"></div>
      </div>
      <div className="right-column">
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>App Development</li>
            <li>AI Tools Expert</li>
            <li>UI & UX Design</li>
          </ul>
        </div>
        <div className="stat">
          <h4>Years of Experience</h4>
          <p>3+</p>
        </div>
      </div>
    </main>
  );
}
