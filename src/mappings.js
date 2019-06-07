import React from 'react';

export  const mappings = {
  string: ({name, label}) => (
    <label className="App-label">
      {label}
      <input name={name} className="App-string-field" />
    </label>),
  boolean: ({ name, label }) =>
    (<label className="App-label">
      {label}
      <input name={name} type="checkbox" />
    </label>),
  number: ({ name, label }) =>
    (<label className="App-label">
      {label}
      <input name={name} type="number" />
    </label>),
  submit: ({ name, text }) =>
    (<button className="App-submit" type="submit" >{text}</button>),

};
