import React from "react";
import ReactDOM from "react-dom/client";

// ReactDOM is used to render React elements to the DOM
// React is used to create React elements

/** const root = ReactDOM.createRoot(document.getElementById('root'));

// const heading = React.createElement('h1', {id:"heading"}, 'Hello, World!');
// root.render(heading);

const parent = React.createElement('div', {id: 'parent'}, 
    React.createElement('div', {id: 'child'},
        // Even if you're not looping with .map(), any array of React elements needs keys, because React uses them to track which element changed on re-renders.
       [React.createElement('h1',{id:'heading', key:'h1'}, 'Hello, World!'),
        React.createElement('h2',{id:'heading', key:'h2'}, 'Hello, World!')
       ]
));

console.log(parent);
root.render(parent); **/

//React Element is object while rendering on to the DOM it converts itself to div and h1 tags
// React Element is a plain object, not a DOM element
// React Element is immutable, once created it cannot be changed
// React Element is a lightweight description of what the DOM should look like
// React Element is used to create React components

// Render the React Element to the DOM
// ReactDOM.createRoot is used to create a root for the React application
// root.render is used to render the React Element to the DOM
// ReactDOM.createRoot is used to create a root for the React application

//JSX is not html inside javascript, but rather a syntax that allows you to write HTML-like code inside JavaScript.
//JSX is transpiled to React.createElement calls by parcel => Babel or other transpilers before being rendered to the DOM.
//JSX(Babel) => React.createElement(React) => React Element-JS Object(ReactDOM.render)=> DOM Element(HTML Element)
//attributes in JSX are camelCased, like className
//wrap by () if jsx is multiline

const root = ReactDOM.createRoot(document.getElementById("root"));

//React Element
const title = <span>Course</span>;

//JSX does sanitize the input to prevent XSS attacks, so you can safely use user input in JSX.
// Cross-site scripting (XSS) attacks are mitigated by React's built-in sanitization process.
const headingJsx = (
  <h1 id="heading" className="heading">
    Namaste React 🚀
    {title} {/*JSX can contain other JSX elements*/}
    {/*JSX can contain javascript expressions inside curly brackets*/}
    {/*JSX can contain variables, functions, and other expressions*/}
    {/*JSX can contain comments inside curly brackets*/}
    {/*JSX can contain HTML tags, but they must be valid HTML tags*/}
  </h1>
);
console.log(headingJsx);

root.render(headingJsx);

//React Component (1.Class based Component, 2.Functional Component)
//React Component is a function that returns a JSX element/React Element
//React Component is a reusable piece of code that can be used to create React elements
//React Component name should be capitalized

const HeadingComponentNormal = function () {
  return <h1>This is React Normal Functional Component.</h1>;
};

const HeadingComponent = () => {
  return <h1>This is React Functional Embedded Component.</h1>;
};

//or
const HeadingComponentShortHand = () => (
  <div id="container">
    {HeadingComponentNormal()} {/*This is function call*/}
    <div>{headingJsx}</div>
    <HeadingComponent /> {/*This is component composition*/}
    <HeadingComponent></HeadingComponent> {/*This is component composition*/}
    {/*Curly bracket to write javascript inside jsx*/}
    <h2>{100 + 200}</h2>
    <h1>This is React Functional Component.</h1>
  </div>
);

root.render(<HeadingComponentShortHand />);
