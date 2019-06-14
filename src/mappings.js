import React from 'react';

export  const mappings = {
  string: ({name, label, key, onChange, onBlur, ...additionalProps}) =>
      (<label className="Form__label">{label}
        <input name={name} key={key} onChange={onChange} onBlur={onBlur} {...additionalProps} className="Form__string-field" />
    </label>),
  boolean: ({ name, label, key }) =>
    (<label className="Form__label">{label}
      <input name={name} key={key} type="checkbox" />
    </label>),
  number: ({ name, label, key }) =>
    (<label className="Form__label">{label}
      <input name={name} key={key} type="number" />
    </label>),
    select: ({name, label, key, options, onChange, onBlur, ...additionalProps}) =>
        (<label className="Form__label">
            {label}
            <select name={name} key={key} onChange={onChange} onBlur={onBlur} {...additionalProps}>
            {options.map(
                ({ value, text, ...optionProps }) => (
                    <option key={`${value}${text}`} value={value} {...optionProps}>
                        {text || value}
                    </option>
                ),
            )
            }
            </select>
        </label>),
};
