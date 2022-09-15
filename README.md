# Simple Calculator Template

Simple responsive arithmetic operations calculator. It uses bootstrap and custom CSS styles for page responsiveness, and mathjs pack to parse expressions and evaluate them.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.

## Screenshot

![Simple calculator](https://github.com/bessavagner/responsive-calculator/blob/main/screenshot_iPhone12-13mini_iOS14.png?raw=true)

## Functionality

Most of its behavior mimic a smatphone calculator, however some are not implemented yet, like blocking second decimal symbol click; instead it throws 'Syntax Error' when '=' is pressed.

The evaluation occurrs everytime an acumulated expression is validated and passed to ```mathjs```'s ``` evaluate``` function.

## Packages used

- Mathjs: extensive math library for JavaScript and Node.js. Every inputed expression via keypad buttons are internally validated in other to parse to 'evaluate' function from mathjs. Run ```npm i mathjs``` to install.

- Textfit: Fit headlines and paragraphs into any element. Both displayed and outputed expression use this to fit expression on display. Run ```npm install react-textfit``` to install.

## TODO

Here are some proposed implementations.

- [ ] Add squareroot operation.  
- [ ] Merge separators in a single button, just like Android's native calculator.  
- [ ] Implement the unary '%' operator as a percentage of last term.  
- [ ] What else?
## Contributing

[E-mail me!](mailto:bessavagner@gmail.com?subject=[GitHub]%20Source%20Han%20Sans) or pull request.


## Authors

* **Vagner Bessa** - *Initial work* - [bessava](https://github.com/bessava)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/bessavagner/simple-calculator-template/blob/main/LICENSE) file for details

## Acknowledgments

The header style comes from [Bootstrap example - Album](https://getbootstrap.com/docs/5.2/examples/album/).

