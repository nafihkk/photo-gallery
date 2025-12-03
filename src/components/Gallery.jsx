import { importOriginalPhotos, importHDPhotos } from "../utils/importPhotos";
import ImageCard from "./ImageCard";
import React from 'react';

const Gallery = () => {
  const originals = importOriginalPhotos();
  const hd = importHDPhotos();

  return (
    <div className="gallery">
      {originals.map((orig, i) => (
        // <ImageCard 
        //   key={i}
        //   original={orig}
        //   hd={hd[i]}       // same file name works automatically
        // />
        <ImageCard 
  key={i}
  original={originals[i]} 
  hd={hd[i]} // displayed only
/>
      ))}
    </div>
  );
};

export default Gallery;
