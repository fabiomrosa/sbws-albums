import React from 'react';

const Lightbox = ({ image, title, onClose }) => (
  <div className="lightbox">
    <div className="box">
      <span className="close" onClick={onClose}>&#215;</span>
      <img src={image} width="350" height="350" alt={title} />
      <p className="desc">{title}</p>
    </div>
  </div>
)

export default Lightbox;