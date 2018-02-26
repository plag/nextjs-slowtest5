import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

// const sagaMiddleware = createSagaMiddleware()

export function configureStore(initialState = {}) {
  const isProduction = process.env.NODE_ENV === 'production';

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    applyMiddleware(sagaMiddleware),
  ];

  if (!isProduction && typeof window !== 'undefined' && window.devToolsExtension) {
    middlewares.push(window.devToolsExtension());
  }

  const store = createStore(
    combineReducers(rootReducer),
    initialState,
    compose.apply(null, middlewares)
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;
      return store.replaceReducer(combineReducers(reducers));
    });

    module.hot.accept('./sagas', () => {
      const newSagas = require('./sagas').default;
      store.sagaTask.cancel()
      store.sagaTask.done.then(() => {
        store.sagaTask = sagaMiddleware.run(newSagas);
      })
    })
  }

  return store
}

export function withReduxSaga(BaseComponent) {
  return withRedux(configureStore, state => state)(nextReduxSaga(BaseComponent))
}

