import React, { useState } from 'react'
import PropTypes from 'prop-types'
import HighlightedParagraph from './HighlightedParagraph';

export default function Textform(prop) {

    // let [text, prop.setText] = useState('Enter text here...'); Passed in App.js

    const handleUpClick = (id) => {
        if(id === "upper")
            prop.setText(prop.text.toUpperCase());
        else if(id === "lower")
            prop.setText(prop.text.toLowerCase()); 
        else if(id === "clear")
            prop.setText(prop.text="")
    }

    const handleOnChange = (event) => {
        prop.setText(event.target.value);
    }
    return (
        <div className="mb-3" 
         style={{color: prop.mode==='light'?'black':'white'}}
        >
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{prop.heading}</label>
            <textarea className="form-control"
                id="formcontrol"
                rows="8"
                value={prop.text}
                onChange={handleOnChange}
                style={{backgroundColor: prop.mode==='dark'?'black':'white', color :prop.mode==='dark'?'white':'black'}}
                placeholder='Type here...'
            ></textarea>

            <div className='d-flex gap-2 mt-3'>
                <button className=" btn btn-primary"
                    id="upper"
                    onClick={() => handleUpClick("upper")}
                > Convet to UpperCase </button>

                <button className=" btn btn-primary"
                    id="lower"
                    onClick={() => handleUpClick("lower")}
                > Convet to LowerCase </button>

                <button className=" btn btn-primary"
                    id="bold"
                    onClick={() => handleUpClick("bold")}
                > Convet to Bold </button>

                <button className=" btn btn-primary"
                    id="italics"
                    onClick={() => handleUpClick("italics")}
                > Convet to Italics </button>

                <button className=" btn btn-primary"
                    id="clear"
                    onClick={() => handleUpClick("clear")}
                > Clear </button>
            </div>

            <div className = "container mt-3">
                <h1>Text Summary</h1>
                <p> Words:{prop.text.split(" ").length}  Characters:{prop.text.length}</p>
                <h3>Live Preview (with Search Highlights):</h3>
                {/* ✅ This is how you correctly render your component in React! */}
                <HighlightedParagraph paragraph={prop.text} searchTerm={prop.searchQuery} />
            </div>

        </div>
    )
}