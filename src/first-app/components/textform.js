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
    const HandleClickCopy = ()=>{  //on production build this method will work only for https sites, as some api's of JS donot work without https
        // console.log(`Copy Button clicked, HandleclickCopy called`);
        //using navigator api of js
        navigator.clipboard.writeText(text.value);  //this code will update the clipboard
        // document.getSelection().removeAllRanges(); //this code will remove selection once done (deselection) no need to use if using navigator api method/selection above ordinary selection
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
                <button disabled={text.length===0} className="txtform-btn btn btn-primary mt-3 mb-3 mx-2" onClick={HandleClickClear}>Clear</button>
                <button disabled={text.length===0} className="txtform-btn btn btn-primary mt-3 mb-3 mx-2" onClick={HandleClickUppercase}>Convert to UpperCase</button> 
                <button disabled={text.length===0} className="txtform-btn btn btn-primary mt-3 mb-3 mx-2" onClick={HandleClickLowercase}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="txtform-btn btn btn-primary mt-3 mb-3 mx-2" onClick={HandleClickCapitalize}>Capitalize</button>
                <button disabled={text.length===0} className="txtform-btn btn btn-primary mt-3 mb-3 mx-2" onClick={HandleClickCopy}>Copy Text</button>
                <button disabled={text.length===0} className="txtform-btn btn btn-primary mt-3 mb-3 mx-2" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
                {/* buttons will get disabled if text length 0 */}
            </div>
        </div>
        <div className="container mt-4">
            <h2 className={`mb-2 mt-3 text-${props.mode==="light"?"black":"white"}`}><b>Text Summary</b></h2>
            <p className={`text-${props.mode==="light"?"black":"white"}`}>
                {text.split(/\s+/).filter((element)=>{return element.length!==0;}).length} Words {"& "} 
                {text.length} Characters</p>
         {/*split funct returns array by spliting paased var with entered string, and using regular expression in it funct, \s+ more than one whitespaces newline tabspaces*/}
            <h2 className={`mb-2 mt-3 text-${props.mode==="light"?"black":"white"}`}><b>Preview</b></h2>
            <p className={`text-${props.mode==="light"?"black":"white"}`}> {text.length>0?text:"Nothing to Preview!!"}</p>
        </div>
    </>
  )
}

Textform.defaultProps= {brief: "Enter Brief", heading: "Enter Some Heading"}