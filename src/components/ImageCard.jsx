import { useState } from "react";
import ImageViewer from "./ImageViewer";
import React from 'react';

const ImageCard = ({ original, hd }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card">
        <img src={hd} alt="photo" onClick={() => setOpen(true)} />

        <div className="download-box">

          <button className="download-btn" onClick={() => setOpen(true)}>
            👁 View
          </button>

          <a href={hd} download className="download-btn">HD Download</a>
          <a href={original} download className="download-btn">Original</a>
        </div>
      </div>

      {open && <ImageViewer src={original} onClose={() => setOpen(false)} />}
    </>
  );
};

export default ImageCard;
