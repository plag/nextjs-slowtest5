import { fork } from 'redux-saga/effects';

import main from './main';

export default function* () {
  yield fork(main);
}
