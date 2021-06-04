import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { rootReducer } from './_reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

export const store = createStore(
      rootReducer,
      composeWithDevTools(
          applyMiddleware(
              thunkMiddleware,
              loggerMiddleware
          )
      )
);
