import React, {useState} from 'react'  //useState is a hook

export default function Textform(props){  //direct exporting (default export)
    const HandleClickUppercase = ()=>{  //creating a function
        // console.log(`UpperCase Button clicked, HandleclickUppercase called`);
        let newTxt= text.toUpperCase();
        setText(newTxt);
        props.alert("Text Converted to Uppercase","Success!!!","success")
    }
    const HandleClickLowercase = ()=>{
        // console.log(`LowerCase Button clicked, HandleclickLowercase called`);
        let newTxt= text.toLowerCase();
        setText(newTxt);
        props.alert("Text Converted to Lowercase","Success!!!","success")
    }
    const HandleClickCapitalize = ()=>{
        // console.log(`Capitalize Button clicked, HandleclickCapitalize called`);
        let newTxt= text[0].toUpperCase() + text.slice(1);
        setText(newTxt);
        props.alert("String Capitalize","Success!!!","success")
    }
    const HandleClickCopy = ()=>{
        // console.log(`Copy Button clicked, HandleclickCopy called`);
        let Txt=document.getElementById("Textarea1");
        console.log(Txt.value);
        Txt.select();
        navigator.clipboard.writeText(Txt.value);  //this code will update the clipboard
        props.alert("Text Copied to clipboard","Success!!!","success")
    }
    const HandleExtraSpaces = ()=>{
        // console.log(`Removespace Button clicked, HandleExtraSpaces called`);
        let newTxt= text.split(/[ ]+/);  //splitting for more than 1 spaces
        setText(newTxt.join(" "));  //joining splitted text with single space
        props.alert("Removed Extra spaces","Success!!!","success")
    }
    const HandleClickClear = ()=>{
        // console.log(`Clear Button clicked, HandleClickClear called`);
        setText("");
        props.alert("Textarea Cleared","Success!!!","success")
    }
    const HandleOnChange = (event)=>{
        // console.log(`On change function called`); 
        setText(event.target.value);
    }
    // Declare a new state variable, which we'll call "text", this declaration should be inside our function component
    const [text, setText] = useState("");   //setText is the function used for updating the text, setting default value empty
    // text="new text";  //wrong way to change the state
    // setText("new text");  //correct way to change the state, but do not use directly, use it inside function else error will be raised
  return (
    <>
        <div className='container'>
            <h1 className={`mb-3 mt-3 text-${props.mode==="light"?"black":"white"}`}><b>{props.heading}</b></h1>
            <div className="mb-3 mx-5 mt-2">
                <label htmlFor="Textarea1" className={`form-label text-${props.mode==="light"?"black":"white"}`}><b>{props.brief}</b></label>
                <textarea className="form-control" id="Textarea1" rows="2" placeholder="Enter text here" value={text} 
                    onChange={HandleOnChange}></textarea>
                <button className="btn btn-primary mt-3 mb-3 mx-2" onClick={HandleClickClear}>Clear</button>
                <button className="btn btn-primary mt-3 mb-3 mx-2" onClick={HandleClickUppercase}>Convert to UpperCase</button> 
                <button className="btn btn-primary mt-3 mb-3 mx-2" onClick={HandleClickLowercase}>Convert to LowerCase</button>
                <button className="btn btn-primary mt-3 mb-3 mx-2" onClick={HandleClickCapitalize}>Capitalize</button>
                <button className="btn btn-primary mt-3 mb-3 mx-2" onClick={HandleClickCopy}>Copy Text</button>
                <button className="btn btn-primary mt-3 mb-3 mx-2" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container mt-4">
            <h2 className={`mb-2 mt-3 text-${props.mode==="light"?"black":"white"}`}><b>Text Summary</b></h2>
            <p className={`text-${props.mode==="light"?"black":"white"}`}>
                {text.length===0?0:(text.charAt(text.length-1)===" "?text.split(" ").length-1:text.split(" ").length)} Words {"& "} 
                {text.charAt(text.length-1)===" "?text.length-1:text.length} Characters</p> {/*split funct returns array by spliting paased var with entered string*/}
            <h2 className={`mb-2 mt-3 text-${props.mode==="light"?"black":"white"}`}><b>Preview</b></h2>
            <p className={`text-${props.mode==="light"?"black":"white"}`}> {text.length>0?text:"Enter some text to preview"}</p>
        </div>
    </>
  )
}

Textform.defaultProps= {brief: "Enter Brief", heading: "Enter Some Heading"}