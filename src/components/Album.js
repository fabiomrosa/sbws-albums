import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadAlbumAction, openLightboxAction, closeLightboxAction } from '../actions';
import Lightbox from './Lightbox';

export class Album extends Component {
  componentDidMount() {
    this.props.dispatch(loadAlbumAction(
      this.props.data.filter(image => image.albumId === this.props.albumId)
    ));
  }

  handleThumbClick(imageId) {
    this.props.dispatch(openLightboxAction(
      this.props.images.find(image => image.id === imageId)
    ));
  }

  handleCloseClick() {
    this.props.dispatch(closeLightboxAction());
  }

  render() {
    const { albumId, images, image, isOpen } = this.props;

    return (
      <div className="container">
        <h1 className="title">Album {albumId}</h1>
        <Link to="/">Back to Albums</Link>
        <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3">
            <div className="album">
              <img className="photo"
                src={image.thumbnailUrl}
                alt={image.title}
                onClick={this.handleThumbClick.bind(this, image.id)} />
              <span className="id">{image.id}</span>
            </div>
          </div>
        ))}
        </div>
        {isOpen && <Lightbox
          image={image.thumbnailUrl}
          title={image.title}
          onClose={this.handleCloseClick.bind(this)} />}
      </div>
    );
  }
}

export default connect(state => ({
  data: state.data.images,
  albumId: state.album.albumId,
  images: state.album.images,
  image: state.lightbox.image,
  isOpen: state.lightbox.isOpen
}))(Album);