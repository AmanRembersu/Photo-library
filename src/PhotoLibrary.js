import React, { useState } from 'react';
import './App.css';
import ImageModal from './ImageModal';

// Import your images
import image1 from './img/img.jpg';
import image2 from './img/Anime1.jpg';
import image3 from './img/image1.jpg';
import image4 from './img/image3.png';
import image5 from './img/images (1).jpeg';
import image6 from './img/images (2).jpeg';
import image7 from './img/images.jpeg';
import image8 from './img/pic1.png';
import image9 from './img/picture.png';
import image10 from './img/picture4.jpg';

const imagesArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const PhotoLibrary = () => {
  const [images, setImages] = useState(imagesArray);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImages([...images, reader.result]);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="custom-file-input-wrapper">
        <input type="file" onChange={handleImageUpload} />
      </div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-item" onClick={() => handleImageClick(image)}>
            <img src={image} alt={`Image ${index + 1}`} />
            <button className="delete-button" onClick={() => handleDeleteImage(index)}>
              &#9249;
            </button>
          </div>
        ))}
      </div>
      {selectedImage && <ImageModal show={true} onHide={handleCloseModal} imageUrl={selectedImage} />}
    </div>
  );
};

export default PhotoLibrary;
