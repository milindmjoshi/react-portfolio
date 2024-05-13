import worksamplemain from '../assets/images/worksamplemain.png';
import calculator from '../assets/images/calculator.webp';
import asteroids from '../assets/images/asteroids.webp';
import bebetter from '../assets/images/be-better.png';
import petcare from '../assets/images/petcare.webp';

const worksamplelink = 'https://milindmjoshi.github.io/week1HTMLCSS/';
const bebetterlink = 'https://milindmjoshi.github.io/be-better/';
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
//import { useParams, Link } from 'react-router-dom';
 

export default function PortfolioPage() {

  return (
    <div className="worksample">
    <div className="mainsample">
         <a href={worksamplelink}> 
            <img src={worksamplemain} alt="Sample Image"/> 
        </a> 
        <div className="overlaytext">508 compliant website <div className="overlay-text-tech"> HTML/CSS</div></div>
    </div>
    <div className="sample1">
        <a href={worksamplelink}> 
        <img src={calculator} alt="Calculator Image"/> 
        </a> 
        <div className="overlaytext-mini">JS Calculator <div className="overlay-text-tech"> HTML/CSS/JS</div></div>

    </div>
    <div className="sample2">
        <a href={worksamplelink}> 
        <img src={asteroids} alt="Asteroids Image"/> 
        </a> 
        <div className="overlaytext-mini">Asteroids <div className="overlay-text-tech"> HTML/CSS/JS</div></div>
       
    </div>  
    <div className="sample3">
        <a href={bebetterlink}> 
        <img src={bebetter} alt="Bebetter Image"/> 
        </a> 
        <div className="overlaytext-mini">Be-Better <div className="overlay-text-tech"> HTML/CSS/JS</div></div>
       
    </div>
    <div className="sample4">
        <a href={worksamplelink}> 
        <img src={petcare} alt="Petcare Image"/>
        </a> 
        <div className="overlaytext-mini">Pet Care <div className="overlay-text-tech"> HTML/CSS/JS</div></div>
       
    </div>
</div>
  );
}
