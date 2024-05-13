// This is a static page mocking an "About Us" section for our fake user data
export default function ResumePage() {
  return (
    <div className="container pt-4">
      <h2>RESUME</h2>
      <h3>Education</h3>
      <p>
        <ul>
          <li>MSIS American University, Washington DC</li>
          <li>BSEE University of Maryland, College Park , Cum Laude</li>
        </ul>
      </p>
      <h3>Front End Technologies</h3>
      <p>
        <ul>
          <li>HTML 5</li>
          <li>CSS 4</li>
          <li>JS</li>
          <li>BootStrap</li>
          <li>React JS</li>
        </ul>
      </p>
      <h3>Backend Technologies</h3>
      <p>
        <ul>
          <li>Node JS</li>
          <li>Mongo DB</li>
          <li>MySQL DB </li>
          <li>Express </li>
        </ul>
      </p>
     
    </div>
  );
}
