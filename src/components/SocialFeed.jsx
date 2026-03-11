import {useState,useEffect} from "react";

export default function SocialFeed(){

const posts=[

{user:"@MallWitness",text:"Police everywhere at Miami Mall."},
{user:"@Shopper21",text:"People running out of the food court."},
{user:"@VideoGuy",text:"Uploading video from inside."}

]

const [feed,setFeed]=useState([])

useEffect(()=>{

let i=0

const interval=setInterval(()=>{

setFeed(f=>[...f,posts[i]])

i++

if(i===posts.length) clearInterval(interval)

},3000)

return()=>clearInterval(interval)

},[])

return(

<div className="social">

<h2>Witness Social Feed</h2>

{feed.map((p,i)=>(

<div key={i} className="post">
<strong>{p.user}</strong>
<p>{p.text}</p>
</div>

))}

</div>

)

}
