# Homework #2

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* arrow functions
		* Arrow functions are a shorter way of writing out function syntax. Also, when using `this` inside an arrow function, the `this` is bound to the function which the arrow function is within - contrasting with `this` inside regular functions.
	* state
		* The concept of state in React allows keeping track of how a page/component has been interacted with.
	* constructor
		* The constructor is the first method that gets called in a React class.
		* Package in with classes in ES6.
	* setState - setState with a callback function and setState with an object passed in
		* `.setState` is used in React class functions when you want to update the state object. However, if you are referencing the current state, a current state object should be passed in so that a new state object can be return - this will in turn let React know that the state has been updated and any affected components (and their children) have to be re-rendered.
		* If you are not referencing the current state to update the new state, you can simply use a callback function without passing the current state object in.
	* .bind
		* When using `this` inside a function in a React class, an object has to be bound to a user created function so that React knows which object to use when `this` called upon.
		* Using `.bind` explicitly sets what object `this` refers to inside a function.
	* functional components vs class components
		* For simple components, it's preferable to export a function instead of a class. Functional don't need to extend Component in the React library.
		* The `render()` function does not need to be called when using functional components.
  	* onClick
  		* When used on an element in JSX, `onClick` will execute its value when the elment is clicked on.


2. Fork and clone this repo.  When you need to commit use the following commands.
		
	* Run: `npm install -g create-react-app`
	* Create a boilerplate React app called clock. `create-react-app clock`
	* Navigate into /clock and run the command: `npm start`
	* Your `<App />` component will render a `<NavBar />` and a `<Clock />` component.
	* Create a file called `NavBar.js` and a file called `Clock.js`
	* `<NavBar />` and `<Clock />` will both be React components.  `<NavBar />` should display the title of your page in a larger font.
	* `<Clock />` will display a clock that updates every second.  (You will need to use the `Date` object.)
  	* `Date` example: `const now = new Date(); now.getHours(); now.getDay(); now.getMinutes(); now.getSeconds(); etc.`
	* Create a clock that updates every second. JavaScript's `setInterval(cb, miliseconds)` function allows you to specify code that runs after a set time.
	* Style `<Clock />` and try to make it look nice.



#### Congratulations on finishing Homework #2!

For more information about our other courses visit: https://www.lambdaschool.com
