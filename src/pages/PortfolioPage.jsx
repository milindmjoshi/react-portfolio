import worksamplemain from '../assets/images/worksamplemain.png';
import bebetter from '../assets/images/be-better.png';
import weatherforecast from '../assets/images/weatherforecast.png'
import workday from '../assets/images/workday.png'
import password from '../assets/images/password.png'
import coding from '../assets/images/coding.png';

import Project from '../components/Project';

const worksamplegit = "https://github.com/milindmjoshi/week1HTMLCSS";
const bebettergit = "https://github.com/milindmjoshi/be-better";
const weathergit = "https://github.com/milindmjoshi/weather-forecast";
const workdaygit = "https://github.com/milindmjoshi/workday-scheduler"
const passwordgit = "https://github.com/milindmjoshi/password-generator"
const codinggit = "https://github.com/milindmjoshi/coding-assessment";

const worksamplelink = 'https://milindmjoshi.github.io/week1HTMLCSS/';
const codinglink = 'https://milindmjoshi.github.io/coding-assessment/';
const bebetterlink = 'https://milindmjoshi.github.io/be-better/';
const weatherlink = 'https://milindmjoshi.github.io/weather-forecast/';
const workdaylink = 'https://milindmjoshi.github.io/workday-scheduler/';
const passwordlink = 'https://milindmjoshi.github.io/password-generator/';
 
// Portfolio page. Use Project component for each of the projects. 
export default function PortfolioPage() {

  return (
    <div className="worksample">
    <Project link={weatherlink} gitlink={weathergit} img={weatherforecast} imgText="Weather Forecast Image" text="Weather Forecast" class="sample1"/>
    <Project link={passwordlink} gitlink={passwordgit} img={password} imgText="Password Generator Image" text="Password Generator" class="sample2"/>
    <Project link={codinglink} gitlink={codinggit} img={coding} imgText="Coding Assessment" text="Coding Assessment" class="sample3"/>
    <Project link={worksamplelink} gitlink={worksamplegit} img={worksamplemain} imgText="main sample" text="508 compliant website" class="sample4"/>
    <Project link={workdaylink} gitlink={workdaygit} img={workday} imgText="Workday Image" text="Workday Scheduler" class="sample5"/>
    <Project link={bebetterlink} gitlink={bebettergit} img={bebetter} imgText="Bebetter Image" text="Be-Better" class="sample6"/>
   
    </div>
  );
}
