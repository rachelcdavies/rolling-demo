import React from 'react';

export  const mappings = {
  string: ({name, label, key, onChange, onBlur, setFieldValue, ...additionalProps}) =>
      (<label className="simple-form__label">{label}
        <input
          name={name}
          key={key}
          className="simple-form__string-field"
          onChange={onChange}
          onBlur={onBlur}
          {...additionalProps}
        />
    </label>),
  number: ({ name, label, min, max, key, onChange, onBlur, setFieldValue, ...additionalProps}) =>
    (<label className="simple-form__label">{`${label} (${min}-${max})`}
      <input
        name={name}
        key={key}
        type="number"
        min={min}
        max={max}
        className="simple-form__input"
        onChange={onChange}
        onBlur={onBlur}
        {...additionalProps}
      />
    </label>),
  range: ({ name, label, min, max, key, onChange, onBlur, setFieldValue, ...additionalProps}) =>
    (<label className="simple-form__label">{label}
      <input
        name={name}
        key={key}
        type="range"
        min={min}
        max={max}
        className="simple-form__input"
        onChange={onChange}
        onBlur={onBlur}
        {...additionalProps}
      />
    </label>),
  boolean: ({ name, label, key }) =>
    (<label className="simple-form__label">{label}
      <input
        name={name}
        key={key}
        type="checkbox"
        className="simple-form__input"/>
    </label>),
  select: ({name, label, key, options, onChange, onBlur, setFieldValue, ...additionalProps}) =>
    (<label className="simple-form__label">
      {label}
      <select
        name={name}
        key={key}
        onChange={onChange}
        onBlur={onBlur}
        className="simple-form__input"
        {...additionalProps}
      >
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
