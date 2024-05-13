// This is a static page mocking an "About Us" section for our fake user data
import milind from "../assets/images/Milind.jpg";
export default function AboutPage() {
  return (
    <div className="container pt-4">
      <h2>About Me</h2>
      <p>
      Full stack developer with 5 years experience in MERN stack: Mongo, Express, React, and Node.
      <br/>     
      <br/>     
      Enjoy working in fast paced collaborative environments with emphasis on team work. 
      I grew up in Maryland and am now living in Florida. 
      I am a huge Dallas Cowboys fan and love the Dallas and Austin Texas area.  
      <br/>
      <br/>
      Take a look at my work samples at the portfolio link. 
      </p>
      <br/>
      <br/>
      <img src={milind}/>
    </div>
  );
}
