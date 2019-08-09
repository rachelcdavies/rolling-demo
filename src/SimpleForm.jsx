import React, { useState, Fragment } from 'react';
import DynamicFieldBuilder from 'rolling-fields';

import './styles/SimpleForm.css';

import { mappings } from './mappings';
import { coreFields, hotDrinkFields, coldDrinkFields, submitFields, initialCoreValues } from './field-schemas/fieldSchemas';
import useForm from './useFormHook';

export const SimpleForm = () => {
  const initialMessage = 'Make a drink selection';

  const [ message, setMessage ] = useState(initialMessage);

  const animateMessage = () => {
    let element = document.getElementById("deliveryMessage");
    element.classList.remove("simple-form-message--play");
    void element.offsetWidth;
    element.classList.add("simple-form-message--play", false);
  };

  const submitAction = () => {
    setMessage(`Preparing ${inputs['drink']} for ${inputs['employeeName']}`);
    animateMessage();
  //  TODO clear form
  };
  const {inputs, handleInputChange, handleSubmit} = useForm(initialCoreValues, submitAction);
  const isHot = Boolean(inputs['drink'] === 'tea' || inputs['drink'] === 'coffee');
  const isCold = Boolean(inputs['drink'] === 'soda' || inputs['drink'] === 'water');

  return (
    <div className="simple-form-container">
      <form className="simple-form" onSubmit={handleSubmit} >
        <DynamicFieldBuilder fields={coreFields} mappings={mappings} onChange={handleInputChange}/>
        { isHot ? <DynamicFieldBuilder fields={hotDrinkFields} mappings={mappings} /> : <Fragment /> }
        { isCold ? <DynamicFieldBuilder fields={coldDrinkFields} mappings={mappings} /> : <Fragment /> }
        <DynamicFieldBuilder fields={submitFields} mappings={mappings} />
      </form>
      <p id="deliveryMessage">{message}</p>
    </div>
  );
};
