export default function Achievements() {
  return (
    <main>
      <div className="container">
        <h1 className="glitch" data-text="Achievements">Achievements</h1>
        <ul className="achievements-list">
          <li>
            <span className="achievement-title">Code Jam Finalist</span>
            <span className="achievement-year">2023</span>
          </li>
          <li>
            <span className="achievement-title">Top Developer Award</span>
            <span className="achievement-year">2022</span>
          </li>
          <li>
            <span className="achievement-title">Open Source Contributor</span>
            <span className="achievement-year">2021</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
