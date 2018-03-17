import { createStore, combineReducers, compose } from 'redux';
import { dataReducer, albumReducer } from '../reducers';

const configureStore = ({ initialState } = {}) => {
  const rootReducer = combineReducers({
    data: dataReducer,
    album: albumReducer
  });

  const store = createStore(rootReducer, initialState, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  ));

  return store;
}

export default configureStore;
