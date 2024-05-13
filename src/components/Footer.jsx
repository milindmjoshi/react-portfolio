// Bringing in the required import from 'react-router-dom
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';

export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
   
  return (
    <div className="ulContainer"> 
      <ul className="ul-nobullet">
        <li className="ul-li">
          <a href="https://github.com/milindmjoshi/">
            <img width="30px" height="30px" src={github}></img>
            </a>
        </li>
        <li className="ul-li">
        <a href="https://linkedin.com/in/milindmjoshi/">
            <img width="30px" height="30px" src={linkedin}></img>
            </a>
        </li>
      </ul>
      
    </div>
  );
}
