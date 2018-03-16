import { createStore, combineReducers, compose } from 'redux';

const configureStore = ({ initialState } = {}) => {
  const reducer = combineReducers({
    example: (state = {name: 'Anonymous'}, action) => {
      switch (action.type) {
        case 'CHANGE_NAME':
          return {
            ...state,
            name: action.name
          }
        default:
          return state;
      }
    }
  });
  
  const store = createStore(reducer, initialState, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  ));

  return store;
}

export default configureStore;
