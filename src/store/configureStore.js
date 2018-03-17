import { createStore, combineReducers, compose } from 'redux';
import { dataReducer, albumReducer, lightboxReducer } from '../reducers';

const configureStore = ({ initialState } = {}) => {
  const rootReducer = combineReducers({
    data: dataReducer,
    album: albumReducer,
    lightbox: lightboxReducer
  });

  const store = createStore(rootReducer, initialState, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  ));

  return store;
}

export default configureStore;
