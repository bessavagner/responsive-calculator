import React from 'react';

import './Keypad.css';
import Button from './Button.js'
import {generateKey} from './generators';
/** buttons as object in grid 6x4 shape (except '=') */
import {arrayButtons} from './validator.js'
        

/** buttons as object in flatten shape (except '=')*/
//const keys = require("./buttons.json")


/** Delete icon */
// const delIcon = (
//     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-backspace" viewBox="0 0 16 16">
//         <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
//         <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
//     </svg>
// )

/** Set icon to delete button */
// When set, return 'undefined' as value to Keypad
// arrayButtons[4][2].text = delIcon;

export class Keypad extends React.Component {
    render() {
        return (
            <div className="keypad bg-dark d-flex flex-column justify-content-start"  id={generateKey("keypad")}>
                {
                    arrayButtons.map((row, index) => (
                        <div key={generateKey("row"+index)} className="row bg-dark d-flex flex-row justify-content-between">
                            {
                                row.map(btn => {
                                    return (
                                        <Button
                                            value={btn.value}
                                            text={btn.text}
                                            id={btn.id}
                                            key={generateKey(btn.key)}
                                            handleClick={this.props.handleChange}
                                        />
                                    );
                                })
                            }
                        </div>
                    ))
                }
                <div key="equal" className="row d-flex flex-row justify-content-between">
                    <Button
                        value={"="}
                        text={"="}
                        id={"equal"}
                        key={generateKey("equal-button")}
                        handleClick={this.props.handleChange}
                        style={{ width: '100%' }}
                    />
                </div>
            </div>
        );
    }
}
