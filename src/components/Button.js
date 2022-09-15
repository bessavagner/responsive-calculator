import React from 'react';

import {generateKey} from './generators';


class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: generateKey("key"),
        };
    }
    render() {
        return (
            <button className="btn btn-dark btn-square-md"
                id={this.props.id}
                value={this.props.value}
                style={this.props.style}
                onClick={this.props.handleClick}
            >
                {this.props.text}
            </button>
        );
    }

}

export default Button;