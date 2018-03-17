export const startDataFetchAction = () => ({
  type: 'START_DATA_FETCH'
});

export const completeDataFetchAction = data => ({
  type: 'COMPLETE_DATA_FETCH',
  data
});

export const selectAlbumAction = id => ({
  type: 'SELECT_ALBUM',
  id
});

export const startAlbumFetchAction = () => ({
  type: 'START_ALBUM_FETCH'
});

export const completeAlbumFetchAction = images => ({
  type: 'COMPLETE_ALBUM_FETCH',
  images
});
