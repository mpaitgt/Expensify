import { createStore } from 'redux';

// Action generators - return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

// resetCount
const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})
// Reducers
// 1. Reducers are pure functions - the output is only determined by its input
//    Compute new state based off of the old state and the action
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state;
  }
}

// Data store
const store = createStore(countReducer);

// how to re-render every time state changes
store.subscribe(() => {
  console.log(store.getState());
})

// Actions - an object that gets sent to the store
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 6 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: -1101 }));

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });

// store.dispatch({
//   type: 'RESET'
// });

