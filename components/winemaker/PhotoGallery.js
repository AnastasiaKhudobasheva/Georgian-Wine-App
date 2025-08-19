import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

const PhotoGallery = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <GalleryContainer>
      <SectionTitle>Gallery</SectionTitle>

      <PhotoGrid>
        {photos.map((photo, index) => (
          <PhotoCard key={index} onClick={() => setSelectedPhoto(photo)}>
            <PhotoImage
              src={photo.url}
              alt={photo.caption || `Winemaker photo ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            {photo.caption && <PhotoCaption>{photo.caption}</PhotoCaption>}
          </PhotoCard>
        ))}
      </PhotoGrid>

      {/* simple modal for enlarged photos */}
      {selectedPhoto && (
        <PhotoModal onClick={() => setSelectedPhoto(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedPhoto(null)}>×</CloseButton>
            <ModalImage
              src={selectedPhoto.url}
              alt={selectedPhoto.caption || "Enlarged photo"}
              fill
              sizes="90vw"
            />
            {selectedPhoto.caption && (
              <ModalCaption>{selectedPhoto.caption}</ModalCaption>
            )}
          </ModalContent>
        </PhotoModal>
      )}
    </GalleryContainer>
  );
};

const GalleryContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto 4rem auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 2.5rem;
  color: #8b4513;
  text-align: center;
  margin: 0 0 2rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const PhotoCard = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  width: 100%;
  min-height: 200px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.15);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(139, 69, 19, 0.25);
  }
`;

const PhotoImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PhotoCard}:hover & {
    transform: scale(1.05);
  }
`;

const PhotoCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const PhotoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 800px;
  height: 600px;
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
`;

const CloseButton = styled.button`
  font-family: "League Spartan", sans-serif;
  font-weight: 100;
  text-transform: uppercase;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const ModalImage = styled(Image)`
  object-fit: contain;
`;

const ModalCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
`;

export default PhotoGallery;
