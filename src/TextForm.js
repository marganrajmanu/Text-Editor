import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TextForm(props) {
    const { showAlert } = props;

    const [text, setText] = useState('');

    const upperCase = () => {
        setText(text.toUpperCase());
        showAlert("Converted to upper case", "success");
    }
    const lowerCase = () => {
        setText(text.toLowerCase());
        showAlert("Converted to lower case", "success");
    }
    const clearBox = () => {
        setText("");
        showAlert("Cleared text box", "success");
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        showAlert("Copied text", "success");
    }
    const pasteText = () => {
        navigator.clipboard.readText().then((clipText) => (setText(clipText)));
        showAlert("Pasted text successfully", "success");
    }
    const handleExtraSpaces = () => {
        setText(text.split(/[ ]+/).join(" "));
        showAlert("Romeved Extra Spaces", "success");
    }

    const handleChange = (event) => setText({ ...text, [event.target.name]: event.target.value });


    return (
        <>
            <div className={`container ${props.mode ? "text-white" : ""}`}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        <h2>Enter Text</h2>
                    </label>
                    <textarea className={`form-control bg-${props.mode ? "dark" : ""} ${props.mode ? "text-white" : ""} form-control`}
                        id="exampleFormControlTextarea1"
                        rows={7}
                        placeholder='Enter text here'
                        value={text}
                        onChange={handleChange}
                        name='textarea'
                    />
                </div>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-3" onClick={upperCase}>To Upper Case</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-3" onClick={lowerCase}>To Lower Case</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-3" onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-3" onClick={copyText}>Copy Text</button>
                <button type="button" className="btn btn-primary mx-2 my-3" onClick={pasteText}>Paste Text</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-3" onClick={clearBox}>Clear Box</button>
            </div>
            <div className={`container my-3 ${props.mode ? "text-white" : ""} `}>
                <h3>Text summary</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.8 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} min(s) to read</p>
                <h3>Preview</h3>
                {text ? text : "*No content*"}
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}

export default TextForm