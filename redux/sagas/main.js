import { fork, take } from 'redux-saga/effects';

import {
  increment,
} from '../actions/main';

function* waitForIncrement() {
  while (yield take(increment)) {
    console.log('looks like counter incremented')
  }
}

export default function* root() {
  yield fork(waitForIncrement);
}
