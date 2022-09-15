import React from 'react';
import { Textfit } from 'react-textfit';

import './Display.css';

export class Display extends React.Component {

    render(){
        return (
            <div className="screen bg-dark d-flex flex-column justify-content-center">
                <Textfit id={"subscreen-top"} className={"subscreen bg-dark align-self-center border-0"}
                         mode="multi"
                >
                {this.props.input}
                </Textfit>
                <Textfit id={"subscreen-bottom"} className={"subscreen bg-dark align-self-center border-0"}
                         mode="single"
                         min={16}
                         max={64}
                >
                    {this.props.outputValue}
                </Textfit>
            </div> 
        );
    }
}
