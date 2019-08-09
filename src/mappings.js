import React from 'react';

export  const mappings = {
  string: ({name, label, key, onChange, onBlur, setFieldValue, ...additionalProps}) =>
      (<label className="simple-form__label">{label}
        <input name={name} key={key} onChange={onChange} onBlur={onBlur} {...additionalProps} className="simple-form__string-field" />
    </label>),
  number: ({ name, label, min, max, key, onChange, onBlur, setFieldValue, ...additionalProps}) =>
    (<label className="simple-form__label">{`${label} (${min}-${max})`}
      <input name={name} key={key} type="number" min={min} max={max} onChange={onChange} onBlur={onBlur} {...additionalProps} />
    </label>),
  range: ({ name, label, min, max, key, onChange, onBlur, setFieldValue, ...additionalProps}) =>
    (<label className="simple-form__label">{label}
      <input name={name} key={key} type="range" min={min} max={max} onChange={onChange} onBlur={onBlur} {...additionalProps} />
    </label>),
  boolean: ({ name, label, key }) =>
    (<label className="simple-form__label">{label}
      <input name={name} key={key} type="checkbox" />
    </label>),
  select: ({name, label, key, options, onChange, onBlur, setFieldValue, ...additionalProps}) =>
    (<label className="simple-form__label">
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
