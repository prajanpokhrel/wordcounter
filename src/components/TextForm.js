import React,{useState} from 'react'


export default function TextForm(props) {
    const[text,setText]=useState(null);
    const uppercase=()=>{
        var newText=text.toUpperCase();
        setText(newText);     
    }
    const lowercase=()=>{
        var newText=text.toLowerCase();
        setText(newText);     
    }
    const copy=()=>{
     navigator.clipboard.writeText(text);
     
    }
    const Removespace=()=>{
       let newtext= text.split(/[ ]+/);
       setText(newtext.join(" "))
        
       }
    const textChanges=(val)=>{
      console.log(val.target.value)
      setText(val.target.value)
    }
    return (
     
       <div>
            <div className='container'>
            <h1 className='my-4'>{props.tittle} </h1>
            <textarea class="form-control my-2 " value={text} onChange={textChanges} id="mybox" ></textarea>
            <button type="button" class="btn btn-primary mx-2" onClick={uppercase}>Click here to make uppercase</button>
            <button type="button" class="btn btn-primary mx-2" onClick={lowercase}>Click here to make Lowerrcase</button>
            <button type="button" class="btn btn-primary mx-2" onClick={copy}>Click here to make copy text</button>
            <button type="button" class="btn btn-primary mx-2" onClick={Removespace}>Click here to RemoveSpace</button>
        </div>
       </div>
    )
}
