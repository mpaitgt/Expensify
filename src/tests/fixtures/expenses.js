import moment from 'moment';

export default [
  {
    id: '1',
    description: 'gum',
    note: '',
    amount: 195, 
    createdAt: 0
  },
  {
    id: '2',
    description: 'cookies',
    note: 'snickerdoodle',
    amount: 400, 
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'book',
    note: 'Before the Storm',
    amount: 2500, 
    createdAt: moment(0).add(4, 'days').valueOf()
  },
];