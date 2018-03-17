import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startAlbumFetchAction, completeAlbumFetchAction } from '../actions';

export class Album extends Component {
  componentDidMount() {
    this.props.dispatch(startAlbumFetchAction());
    this.props.dispatch(completeAlbumFetchAction(
      this.props.data.filter(image => image.albumId === this.props.albumId)
    ));
  }

  render() {
    const { albumId, images, isFetching } = this.props;

    return (
      <div className="container">
        <h1 className="title">Album {albumId}</h1>
        <Link to="/">Back to Albums</Link>
        {isFetching && <span className="loading">Loading ...</span>}
        <div className="row">
        {images && images.map((image, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3">
            <img className="photo" src={image.thumbnailUrl} alt={image.title} />
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  data: state.data.images,
  albumId: state.album.albumId,
  images: state.album.images,
  isFetching: state.album.isFetching,
}))(Album);