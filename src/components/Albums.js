import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from '../api';
import { startDataFetchAction, completeDataFetchAction, selectAlbumAction } from '../actions';

export class Albums extends Component {
  componentDidMount() {
    this.props.dispatch(startDataFetchAction());
    fetchData()
      .then(data => this.props.dispatch(completeDataFetchAction(data)));
  }

  render() {
    const { dispatch, images, isFetching } = this.props;
    
    let albumId = 0;

    return (
      <div className="container">
        <h1 className="title">Albums</h1>
        {isFetching && <span className="loading">Loading ...</span>}
        <div className="row">
        {images && images.map((image, index) => {
          if (image.albumId !== albumId) {
            albumId = image.albumId;
            return (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                <div className="album">
                  <Link
                    to={{ pathname: `/album/${image.albumId}` }}
                    onClick={() => dispatch(selectAlbumAction(image.albumId))}>
                    <img className="photo" src={image.thumbnailUrl} alt={image.title} />
                    <span className="name">Album {image.albumId}</span>
                  </Link>
                </div>
              </div>
            );
          }
          return false;
        })}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  images: state.data.images,
  isFetching: state.data.isFetching
}))(Albums);