import React from 'react';

const Gallery = ({ data }) => {
  const renderImages = () => {
    return data.map((image) => (
      <div key={image.id} className="col-md-4 mb-4">
        <img
          src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
          height="200"
          width="400"
          alt={image.title}
        />
      </div>
    ));
  };

  return <div className="row">{renderImages()}</div>;
};

export default Gallery;
