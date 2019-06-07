import React, { useState } from 'react';
import DynamicFieldBuilder from 'rolling-fields';

import './App.css';
import { mappings } from './mappings';
import { coreFields, initialCoreValues } from './field-schemas/fieldSchemas';
import useForm from './useFormHook';


function App() {
  const [ message, setMessage ] = useState('No drink selected');

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
      </form>
      <p>{message}</p>
    </div>
  );
}

export default App;
