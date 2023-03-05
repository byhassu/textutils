import { useState } from "react"
import React  from 'react'

function TextForm(props) {
    const textUpper=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper Case")
        document.title='TextUtlis-Capital'
    }
    const textLower=()=>{
      let newText=text.toLowerCase()
      setText(newText)
  }
  const textClear=()=>{
    let newText=""
    setText(newText)
}
const textCopy=()=>{
  console.log("Copy")
  let newText=document.getElementById('mybox')
  newText.select()
  navigator.clipboard.writeText(newText.value);
}
const removeSpace=()=>{
  console.log("Remove Extra Space")
  let newText=text.split(/[ ]+/)
  setText(newText.join(" "))
}

    const textHandle = (event) =>{
        console.log('on change')
        setText(event.target.value)
    } 
    const [text,setText]=useState("")

  return (
    <>
    <div>
    <h1>{props.heading}</h1>
    <textarea value={text} onChange={textHandle} name="" id="mybox" cols="120" rows="8"></textarea> <br />
    <button className='btn btn-primary mx-2'  onClick={textUpper}>Click For Upper case</button>
    <button className='btn btn-primary mx-2'  onClick={textLower}>Click For Lower case</button>
    <button className='btn btn-primary mx-2'  onClick={textClear}>Click For Clear</button>
    <button className='btn btn-primary mx-2'  onClick={textCopy}>Click For Copy</button>
    <button className='btn btn-primary my-2'  onClick={removeSpace}>Remove Extra Soace</button>
    </div>
    <div className='container' >
    <h1>Your Texr Summary </h1>
    <p>text {text.split(" ").length}and characters {text.length}</p>
    <p>{.008 * text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>

    </div>
    </>
  )
}

export default TextForm