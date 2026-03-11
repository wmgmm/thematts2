import StickyNote from "./StickyNote";
import Xarrow from "react-xarrows";
import {useState} from "react";

export default function Board(){

const [connections,setConnections] = useState([])

function connect(a,b){

setConnections([...connections,{start:a,end:b}])

}

return(

<div className="board">

<h2>Conspiracy Board</h2>

<div className="board-area">

<StickyNote id="clue1" title="Timeline" text="Incident begins" x={50} y={80}/>
<StickyNote id="clue2" title="Police" text="Heavy police presence" x={350} y={200}/>
<StickyNote id="clue3" title="Video Evidence" text="Footage circulating" x={200} y={350}/>
<StickyNote id="clue4" title="Witness Joshua" text="Potential interview" x={550} y={120}/>

{connections.map((c,i)=>(
<Xarrow key={i} start={c.start} end={c.end} color="red" strokeWidth={3}/>
))}

</div>

<div className="connect-panel">

<button onClick={()=>connect("clue1","clue2")}>Connect Timeline → Police</button>
<button onClick={()=>connect("clue3","clue4")}>Connect Video → Joshua</button>

</div>

</div>

)
}
