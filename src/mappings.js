import React from 'react';

export  const mappings = {
  string: ({name, label, key, onChange, onBlur, setFieldValue, ...additionalProps}) =>
      (<label className="Form__label">{label}
        <input name={name} key={key} onChange={onChange} onBlur={onBlur} {...additionalProps} className="Form__string-field" />
    </label>),
  number: ({ name, label, key, onChange, onBlur, setFieldValue, ...additionalProps}) =>
    (<label className="Form__label">{label}
      <input name={name} key={key} type="number" onChange={onChange} onBlur={onBlur} {...additionalProps} />
    </label>),
  boolean: ({ name, label, key, onChange, onBlur, setFieldValue, ...additionalProps }) =>
    (<label className="Form__label">{label}
      <input name={name} key={key} type="checkbox" onChange={onChange} onBlur={onBlur} {...additionalProps}/>
    </label>),
  select: ({name, label, key, options, onChange, onBlur, setFieldValue, ...additionalProps}) =>
    (<label className="Form__label">
      {label}
      <select name={name} key={key} onChange={onChange} onBlur={onBlur} {...additionalProps}>
        {options.map(
          ({ value, text, ...optionProps }) => (
            <option key={`${value}${text}`} value={value} {...optionProps}>
              {text || value}
            </option>
          ),
        )}
      </select>
    </label>),
};
