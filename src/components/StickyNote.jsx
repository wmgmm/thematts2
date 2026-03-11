import Draggable from "react-draggable";

export default function StickyNote({id,title,text,x,y}){

return(

<Draggable defaultPosition={{x,y}}>

<div id={id} className="sticky">

<h4>{title}</h4>

<p>{text}</p>

</div>

</Draggable>

)

}
