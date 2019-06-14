import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import SimpleForm from '../SimpleForm';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});

describe('Simple Form', () => {
  it('renders no drink selected', () => {
    act(() => {
      ReactDOM.render(<SimpleForm />, container);
    });
    const responseMessage = (container.querySelector('p'));
    expect(responseMessage.textContent).toBe('No drink selected');
  });
  it('submit with default input', () => {
    act(() => {
      ReactDOM.render(<SimpleForm />, container);
    });
    const submitButton = (container.querySelector('button'));
    act(() => {
      submitButton.dispatchEvent(new MouseEvent('click'));
    });
    const responseMessage = (container.querySelector('p'));

    expect(responseMessage.textContent).toBe('Preparing water for you');
  });
});
