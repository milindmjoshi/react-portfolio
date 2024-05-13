import worksamplemain from '../assets/images/worksamplemain.png';
import bebetter from '../assets/images/be-better.png';
import weatherforecast from '../assets/images/weatherforecast.png'
import workday from '../assets/images/workday.png'
import password from '../assets/images/password.png'


const worksamplelink = 'https://milindmjoshi.github.io/week1HTMLCSS/';
const bebetterlink = 'https://milindmjoshi.github.io/be-better/';
const weatherlink = 'https://milindmjoshi.github.io/weather-forecast/';
const workdaylink = 'https://milindmjoshi.github.io/workday-scheduler/';
const passwordlink = 'https://milindmjoshi.github.io/password-generator/';
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
        <a href={weatherlink}> 
        <img src={weatherforecast} alt="Weather Forecast Image"/> 
        </a> 
        <div className="overlaytext-mini">Weather Forecast <div className="overlay-text-tech"> HTML/CSS/JS</div></div>

    </div>
    <div className="sample2">
        <a href={workdaylink}> 
        <img src={workday} alt="Workday Image"/> 
        </a> 
        <div className="overlaytext-mini">Workday Scheduler <div className="overlay-text-tech"> HTML/CSS/JS</div></div>
       
    </div>  
    <div className="sample3">
        <a href={bebetterlink}> 
        <img src={bebetter} alt="Bebetter Image"/> 
        </a> 
        <div className="overlaytext-mini">Be-Better <div className="overlay-text-tech"> HTML/CSS/JS</div></div>
       
    </div>
    <div className="sample4">
        <a href={passwordlink}> 
        <img src={password} alt="Password Generator Image"/>
        </a> 
        <div className="overlaytext-mini">Password Generator <div className="overlay-text-tech"> HTML/CSS/JS</div></div>
       
    </div>
</div>
  );
}
