import React from 'react';

const ImageViewer = ({ src, onClose }) => {
  return (
    <div className="viewer-overlay" onClick={onClose}>
      <img src={src} alt="Fullscreen" className="viewer-image" />
    </div>
  );
};

export default ImageViewer;
