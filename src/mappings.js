import React from 'react';

export  const mappings = {
  string: ({name, label, key, onChange, onBlur, ...additionalProps}) => (
    <label className="App-label">{label}
    <input name={name} key={key} onChange={onChange} onBlur={onBlur} {...additionalProps} className="App-string-field" />
    </label>),
  boolean: ({ name, label, key }) =>
    (<label className="App-label">
      {label}
      <input name={name} key={key} type="checkbox" />
    </label>),
  number: ({ name, label, key }) =>
    (<label className="App-label">
      {label}
      <input name={name} key={key} type="number" />
    </label>),
};
