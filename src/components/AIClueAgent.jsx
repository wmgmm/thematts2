import {useState,useEffect} from "react";
import {motion} from "framer-motion";

export default function AIClueAgent(){

const clues = [

"New eyewitness claims disturbance started near arcade.",
"Security guard confirms evacuation began 8:30 PM.",
"Police scanner mentions possible fight before crowd panic.",
"Video shows group running before police arrived."

]

const [visible,setVisible] = useState([])

useEffect(()=>{

let i=0

const timer=setInterval(()=>{

setVisible(v=>[...v,clues[i]])

i++

if(i===clues.length) clearInterval(timer)

},7000)

return()=>clearInterval(timer)

},[])

return(

<div className="ai-agent">

<h2>AI Investigation Assistant</h2>

{visible.map((c,i)=>(
<motion.div
key={i}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
className="clue"
>

🧠 {c}

</motion.div>
))}

</div>

)

}
