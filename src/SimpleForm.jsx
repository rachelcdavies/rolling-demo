import React, { useState, Fragment } from 'react';
import DynamicFieldBuilder from 'rolling-fields';

import './styles/Form.css';
import { mappings } from './mappings';
import { coreFields, hotDrinkFields, coldDrinkFields, submitFields, initialCoreValues } from './field-schemas/fieldSchemas';
import useForm from './useFormHook';

export const SimpleForm = () => {
  const [ message, setMessage ] = useState('No drink selected');
  const submitAction = () => {
    setMessage(`Preparing ${inputs['drink']} for ${inputs['employeeName']}`);
  };
  const {inputs, handleInputChange, handleSubmit} = useForm(initialCoreValues, submitAction);
  const isHot = Boolean(inputs['drink'] === 'tea' || inputs['drink'] === 'coffee');
  const isCold = Boolean(inputs['drink'] === 'soda' || inputs['drink'] === 'water');

  return (
    <Fragment>
      <form className="Form" onSubmit={handleSubmit} >
        <DynamicFieldBuilder fields={coreFields} mappings={mappings} onChange={handleInputChange}/>
        { isHot ? <DynamicFieldBuilder fields={hotDrinkFields} mappings={mappings} /> : <Fragment /> }
        { isCold ? <DynamicFieldBuilder fields={coldDrinkFields} mappings={mappings} /> : <Fragment /> }
        <DynamicFieldBuilder fields={submitFields} mappings={mappings} />
      </form>
      <p>{message}</p>
    </Fragment>
  );
};
