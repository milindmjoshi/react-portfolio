// Component used to display each project in the portfolio
import github from '../assets/images/github.png';
export default function Project(props) {
  
   
  return (
    <div className={props.class}>
        <a href={props.link}> 
        <img src={props.img} alt={props.imgText}/>
        </a> 
        <div className="overlaytext-mini">
          <a href={props.gitlink}>{props.text}</a>
          <div className="overlay-text-tech"> HTML/CSS/JS</div>
        </div>
       
    </div>
  );
}
