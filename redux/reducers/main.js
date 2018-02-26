import { createReducer } from 'redux-act';

import {
  increment,
} from '../actions/main';

const defaultState = {
  counter: 1,
};

export default createReducer({
  [increment]: (state) => ({
    ...state,
    counter: state.counter + 1,
  }),
}, defaultState);
