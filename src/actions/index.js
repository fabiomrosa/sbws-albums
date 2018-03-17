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

export const loadAlbumAction = images => ({
  type: 'LOAD_ALBUM',
  images
});

export const openLightboxAction = image => ({
  type: 'OPEN_LIGHTBOX',
  image
});

export const closeLightboxAction = () => ({
  type: 'CLOSE_LIGHTBOX'
});
