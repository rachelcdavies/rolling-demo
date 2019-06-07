// For demo purposes these field schemas are hard-coded in the demo app.
// You would probably want to read these in from a file or database.

export const coreFields = [
  {
    name: 'employeeName',
    label: 'Employee name',
    type: 'string'
  },
  { name: 'drink',
    label: 'Drink',
    type: 'select', options: [
      { value: 'coffee', text: 'Coffee' },
      { value: 'tea', text: 'Tea' },
      { value: 'soda', text: 'Soda' },
      { value: 'water', text: 'Water' },
    ]
  },
];

export const hotDrinkFields = [
  {
    name: 'sugar',
    label: 'Sugar?',
    type: 'number'
  },
  {
    name: 'milk',
    label: 'Milk?',
    type: 'number'
  },
];

export const softDrinkFields = [
  {
    name: 'ice',
    label: 'Ice?',
    type: 'boolean'
  },
  {
    name: 'lemon',
    label: 'Slice?',
    type: 'boolean'
  },
];

export const submitFields = [
  {
    type: 'submit',
    text: 'Clear' },
  {
    type: 'submit',
    text: 'Serve' },
];

export const initialValues = {
  sugar: 0,
  milk: 0,
  ice: false,
  slice: false,
};

