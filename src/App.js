import React, { useState, Fragment } from 'react';
import DynamicFieldBuilder from 'rolling-fields';

import './App.css';
import { mappings } from './mappings';
import { coreFields, hotDrinkFields, coldDrinkFields, submitFields, initialCoreValues } from './field-schemas/fieldSchemas';
import useForm from './useFormHook';

function App() {
  const [ message, setMessage ] = useState('No drink selected');

  const isHot = () => !!(inputs['drink'] === 'tea' || inputs['drink'] === 'coffee');
  const isCold = () => !!(inputs['drink'] === 'soda' || inputs['drink'] === 'water');

  const submitAction = () => {
    setMessage(`Preparing ${inputs['drink']} for ${inputs['employeeName']}`);
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(initialCoreValues, submitAction);

  return (
    <div className="App">
      <header className="App-header">
        <p>Demo for <a className="App-link" href="https://github.com/tes/rolling-fields">rolling-fields</a></p>
      </header>
      <form className="App-form" onSubmit={handleSubmit} >
        <DynamicFieldBuilder fields={coreFields} mappings={mappings} onChange={handleInputChange}/>
        { isHot() ? <DynamicFieldBuilder fields={hotDrinkFields} mappings={mappings} /> : <Fragment /> }
        { isCold() ? <DynamicFieldBuilder fields={coldDrinkFields} mappings={mappings} /> : <Fragment /> }
        <DynamicFieldBuilder fields={submitFields} mappings={mappings} />
      </form>
      <p>{message}</p>
    </div>
  );
}

export default App;
