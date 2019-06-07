import React, { useState, Fragment } from 'react';
import DynamicFieldBuilder from 'rolling-fields';
import './App.css';
import { mappings } from './mappings.js'
import { coreFields, hotDrinkFields, softDrinkFields, submitFields, initialValues } from './field-schemas/fieldSchemas.js'

function App() {
  const [ drinkSelection, setDrinkSelection ] = useState(null);
  const isHot = () => drinkSelection && (drinkSelection === 'tea' || drinkSelection === 'coffee');
  const isCold = () => drinkSelection && (drinkSelection === 'soda' || drinkSelection === 'water');
  // TODO setDrinkSelection using select input
  // TODO implement submit - possibly show animation
  // TODO improve styling
  return (
    <div className="App">
      <header className="App-header">
        <p>Demo for <a className="App-link" href="https://github.com/tes/rolling-fields"> rolling-fields</a></p>
      </header>
      <form className="App-form">
        <DynamicFieldBuilder fields={coreFields} mappings={mappings} initialValues={initialValues}/>
        {isHot(drinkSelection) ? <DynamicFieldBuilder fields={hotDrinkFields} mappings={mappings} /> : <Fragment />}
        {isCold(drinkSelection) ? <DynamicFieldBuilder fields={hotDrinkFields} mappings={mappings} /> : <Fragment />}
        <DynamicFieldBuilder fields={submitFields} mappings={mappings} />
      </form>
    </div>
  );
}

export default App;
