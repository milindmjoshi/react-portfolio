import worksamplemain from '../assets/images/worksamplemain.png';
import bebetter from '../assets/images/be-better.png';
import weatherforecast from '../assets/images/weatherforecast.png'
import workday from '../assets/images/workday.png'
import password from '../assets/images/password.png'

import Project from '../components/Project';


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
     <Project link={worksamplelink} img={worksamplemain} imgText="main sample" text="508 compliant website" class="mainsample"/>
    <Project link={weatherlink} img={weatherforecast} imgText="Weather Forecast Image" text="Weather Forecast" class="sample1"/>
    <Project link={workdaylink} img={workday} imgText="Workday Image" text="Workday Scheduler" class="sample2"/>
    <Project link={bebetterlink} img={bebetter} imgText="Bebetter Image" text="Be-Better" class="sample3"/>
    <Project link={passwordlink} img={password} imgText="Password Generator Image" text="Password Generator" class="sample4"/>
    </div>
  );
}
