import {useState} from "react";

export default function EvidenceUpload(){

const [files,setFiles] = useState([])

function upload(e){

const newFiles = Array.from(e.target.files)

setFiles([...files,...newFiles])

}

return(

<div className="card">

<h3>Evidence Upload</h3>

<input type="file" multiple onChange={upload}/>

<ul>

{files.map((f,i)=>(
<li key={i}>{f.name}</li>
))}

</ul>

</div>

)

}
