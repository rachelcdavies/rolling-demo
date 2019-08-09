This project provides a tiny demo of how you can build a dynamic form using [rolling-fields](https://github.com/tes/rolling-fields).

These screenshots give the basic idea. The initial form looks like:

![initial form](/src/screenshots/emptyForm.png)

but the form changes dynamically based on selection to show different options:

![updated form](/src/screenshots/formChangesBasedOnValues.png)

For simplicity, the demo form field schemas is hard-coded in ```fieldSchemas.js```.

In a practial application for a larger form, you would probably want to read these in from a file or data store.

###### Getting Started

Clone this project and install ```npm i```

You can run locally using:


```npm start```

This should opens [http://localhost:3000](http://localhost:3000) in your browser.

###### Tests

If you'd like to run unit tests then use:

```npm t```

###### Acknowledgements

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses a custom hook for form input based on [hooks-form](https://github.com/rajatk16/hooks-form).
