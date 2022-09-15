import {evaluate} from 'mathjs'

/** buttons as object in grid 6x4 shape (except '=') */
export const arrayButtons = require("./arrayButtons.json")
/** Map symbols (values) to button displayed text */
export const buttonMap = require("./buttonMap.json")

//const characters = Object.keys(buttonMap).slice(0, 17);
const numbers = Object.keys(buttonMap).slice(0, 10);
/** Expressions must starts with number or separator or minus sign */
const startOrEnd = Object.keys(buttonMap).slice(0, 12);
const operators = Object.keys(buttonMap).slice(13, 17).concat([Object.keys(buttonMap)[10]]);
const action = Object.keys(buttonMap).slice(18,);

const syntaxError = 'Syntax Error';

export class Expression {
    /**
     * class Expression
     * 
     * Implement instances that acumulate expressions, act on and
     * validate them, and pass them to 'mathjs.evaluate'.
     * 
     * Data:
     *      - "./buttonMap.json": matrix shape 6x4 of buttons map
     *      - "./arrayButtons.json": mapping symbols for displayed text
     */
    constructor() {
        this.cache = '';  // Text expression to display
        this.toParser = '';  // Valid expression to pass to 'evaluate'
        this.result = '';  // Single character to display
    }

    input(button) {
        /**
         *  One character at a time, only character from "./arrayButtons.json"
         * 
         *  Updates this.cache
         */
        if (this.cache.length === 0) {  // First entry to display
            if (startOrEnd.includes(button)) {
                this.cache = button;
            }
        }
        else {
            if (action.includes(button)) {
                if (button === action[0]) {
                    this.cache = '';           
                }
                else if (button === action[1]){
                    this.cache = this.cache.slice(0, -1);
                }
                else if (button === action[2]) {
                    this.cache = String(this.result);
                    this.result = '';
                    return;
                }
            }
            else if (operators.includes(button)) {
                if (operators.includes(this.cache.slice(-1))) {
                    this.cache = this.cache.slice(0, -1) + button;
                }
                else {
                    this.appendInput(button);
                }
            }
            else if (numbers.includes(button)) {
                if(this.result === '') {
                    this.cache = button;
                } else {
                    this.appendInput(button);
                }
            }
            else {
                this.appendInput(button);
            }
        }
        this.parseResult();
    }
    appendInput(button) {
        // acumulate input
        if (this.result !== syntaxError) this.cache += button;
    }
    parseResult(toParser=true) {
        /**
         *  Validate and parse expression via 'acumulate'
         */
        if(typeof this.cache === 'string') {
            if (!/\d/.test(this.cache.slice(-1))) {  // ends not in number
                if (/\d/.test(this.cache)) {
                    let revCache = this.cache.split('').reverse().join('');
                    let i = /\d/.exec(revCache).index
                    this.toParser = this.cache.slice(0, -i);
                } else {
                    this.toParser = '';
                }
            }
            else {
                this.toParser = this.cache;
            }
            this.matchParenthesis();
            // Parsing only happens here
            try {
                if(toParser) this.result = evaluate(this.toParser);
            } catch (exception) {
                if (exception !== null) {
                    if (exception instanceof SyntaxError) {
                        this.result = syntaxError;
                    }
                }
            }
        }
    }
    matchParenthesis() {
        /**
         * Check and match missing right parenthesis
         */
        const leftPar = this.toParser.match(/\(/g);  // find "("
        if (leftPar) {
            const matchRight = this.toParser.match(/\)/g)
            const rightParLength = matchRight ? matchRight.length : 0; // number of ")"
            const diff = leftPar.length - rightParLength;
            this.toParser += ")".repeat(diff);  // complete with ")"
        }
    }
    decodeCache() {
        /**
         * Decode this.cache to sent to display.
         * 
         * Return displayable expression
         */
        if(typeof this.cache === 'string') {
            let cache = '';
            if(this.cache.length > 0) {
                for (let digit of this.cache) {
                    cache += buttonMap[digit];
                }
            }
            else {
                cache = buttonMap[String(this.cache)];
            }
            return cache;
        } else {
            return String(this.cache);
        }
    }
}
