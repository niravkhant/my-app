import React, { useState } from 'react'


export default function Textarea(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if (text.length > 0) {
            props.showAlert("Converted to Uppercase", "success");
        }
        else {
            props.showAlert("Please Enter Anything to Convert Uppercase", "danger");
        }
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if (text.length > 0) {
            props.showAlert("Converted to Lowercase", "success");
        }
        else {
            props.showAlert("Please Enter Anything to Convert Lowercase", "danger");
        }

    }
    const handleReplaceClick = () => {
        let firstword = prompt("Please enter word to Replace:", "");
        let secondword = prompt("Please New word to Replace:", "");
        let newText = text.replaceAll(firstword, secondword);
        setText(newText);
        props.showAlert("Replaced All", "success")
    }
    const handleHtmlJsxClick = () => {
        let newText = text.replaceAll('for', 'htmlFor');
        setText(newText);
        newText = text.replaceAll('class', 'className');
        setText(newText);
    }
    const reset = () => {
        let newText = '';
        setText(newText);
        props.showAlert("All Clear", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h4>{props.text}</h4>
                <textarea
                    className="form-control"
                    id="myBox"
                    rows={8}
                    value={text}
                    onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#2b3035', color: props.mode === 'dark' ? 'white' : 'black' }}

                />
                <div className='my-3'>
                    <button className="btn btn-primary" onClick={handleUpClick}>Click To Uppercase</button>
                    <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Click To Lowercase</button>
                    <button className="btn btn-primary" onClick={handleReplaceClick}>Replace</button>
                    <button className="btn btn-primary mx-3" onClick={handleHtmlJsxClick}>HTML to JSX</button>
                    <button className="btn btn-danger" onClick={reset}>Reset</button>
                </div>
            </div >
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h5>You Text Summary</h5>
                <p>Total Characters Count: {text.length}, Total Words Count: {text.split(" ").length}</p>
                <p>Total Minuts to Read: {0.008 * text.split(" ").length} Minutes</p>
                <h5>Preview</h5>
                <p>{text.length > 0 ? text : "Enter Something in TextBox to Preview it Here..."}</p>
            </div>

        </>

    )
}
