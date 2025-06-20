const root = ReactDOM.createRoot(document.getElementById('root'));

// const heading = React.createElement('h1', {id:"heading"}, 'Hello, World!');

// root.render(heading);

const parent = React.createElement('div', {id: 'parent'}, 
    React.createElement('div', {id: 'child'},
       [React.createElement('h1',{id:'heading'}, 'Hello, World!'),
        React.createElement('h2',{id:'heading'}, 'Hello, World!')
       ]
));

console.log(parent);
//React Element is object while rendering on to the DOM it converts itself to div and h1 tags
// React Element is a plain object, not a DOM element
// React Element is immutable, once created it cannot be changed
// React Element is a lightweight description of what the DOM should look like
// React Element is used to create React components

// Render the React Element to the DOM
// ReactDOM.createRoot is used to create a root for the React application
// root.render is used to render the React Element to the DOM
// ReactDOM.createRoot is used to create a root for the React application

root.render(parent);