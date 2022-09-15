import React from 'react';

import './Wrapper.css';

import {generateKey} from './generators';
import { Expression} from './validator';

import {Display} from './Display.js';
import {Keypad} from './Keypad.js';

const expressionValidator = new Expression();

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            inputMapped: '',
            outputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        expressionValidator.input(event.target.value);
        this.setState({
            inputValue: expressionValidator.decodeCache(),
            outputValue: expressionValidator.result
        })
        
        console.log(`(${event.target.value}) was clicked`);
    }
    render() {
        return (
            <div className="calc-container d-flex flex-column justify-content-between" id={generateKey("wrapper")}>
                <Display input={this.state.inputValue}
                         outputValue={this.state.outputValue}
                         id="display"
                />
                <Keypad input={this.state.inputValue} handleChange={this.handleChange}/>
            </div>
        );
    }
}

export default Wrapper;