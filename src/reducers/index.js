export const dataReducer = (state = { images: [], isFetching: false }, action) =>  {
  switch (action.type) {
    case 'START_DATA_FETCH':
      return {
        ...state,
        isFetching: true
      };
    case 'COMPLETE_DATA_FETCH':
      return {
        images: action.data,
        isFetching: false
      };
    default:
      return state;
  }
}

export const albumReducer = (state = {albumId: undefined, images: [], isFetching: false }, action) => {
  switch (action.type) {
    case 'SELECT_ALBUM':
      return {
        ...state,
        albumId: action.id
      }
    case 'START_ALBUM_FETCH':
      return {
        ...state,
        isFetching: true
      };
    case 'COMPLETE_ALBUM_FETCH':
      return {
        ...state,
        images: action.images,
        isFetching: false
      }
    default:
      return state;
  }
}