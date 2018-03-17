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

export const albumReducer = (state = {albumId: undefined, images: [] }, action) => {
  switch (action.type) {
    case 'SELECT_ALBUM':
      return {
        ...state,
        albumId: action.id
      }
    case 'LOAD_ALBUM':
      return {
        ...state,
        images: action.images
      }
    default:
      return state;
  }
}

export const lightboxReducer = (state = { image: {}, isOpen: false }, action) => {
  switch (action.type) {
    case 'CLOSE_LIGHTBOX':
      return {
        image: {},
        isOpen: false
      }
    case 'OPEN_LIGHTBOX':
      return {
        image: action.image,
        isOpen: true
      }
    default:
      return state;
  }
}