// Bringing in the required import from 'react-router-dom

export default function Project(props) {
  
   
  return (
    <div className={props.class}>
        <a href={props.link}> 
        <img src={props.img} alt={props.imgText}/>
        </a> 
        <div className="overlaytext-mini">{props.text}<div className="overlay-text-tech"> HTML/CSS/JS</div></div>
       
    </div>
  );
}
