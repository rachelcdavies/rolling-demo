// For demo purposes these field schemas are hard-coded in the demo app.
// You would probably want to read these in from a file or database.

export const coreFields = [
  {
    name: 'employeeName',
    label: 'Employee name',
    type: 'string',
  },
  { name: 'drink',
    label: 'Drink',
    type: 'select',
    options: [
      { value: 'water', text: 'Water' },
      { value: 'soda', text: 'Soda' },
      { value: 'coffee', text: 'Coffee' },
      { value: 'tea', text: 'Tea' },
    ]
  },
];

export const initialCoreValues = {
  employeeName: 'you',
  drink: 'water',
};

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

export const coldDrinkFields = [
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
    name: 'serve',
    type: 'submit',
    text: 'Serve' },
];

// export const initialValues = {
//   sugar: 0,
//   milk: 0,
//   ice: false,
//   slice: false,
// };

