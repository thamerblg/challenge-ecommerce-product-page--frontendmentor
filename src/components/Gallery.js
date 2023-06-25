import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

const images = [
  {
    source: {
      regular: "/images/image-product-1.jpg",
      thumbnail: "/images/image-product-1-thumbnail.jpg",
    },
  },
  {
    source: {
      regular: "/images/image-product-2.jpg",
      thumbnail: "/images/image-product-2-thumbnail.jpg",
    },
  },
  {
    source: {
      regular: "/images/image-product-3.jpg",
      thumbnail: "/images/image-product-3-thumbnail.jpg",
    },
  },
  {
    source: {
      regular: "/images/image-product-4.jpg",
      thumbnail: "/images/image-product-4-thumbnail.jpg",
    },
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const toggleLightbox = () => {
    setLightboxIsOpen(!lightboxIsOpen);
  };
  const openLightbox = () => {
    if (window.innerWidth >= 768) {
      toggleLightbox();
    }
  };
  return (
    <div>
      <Carousel
        views={images}
        currentIndex={currentIndex}
        components={{
          FooterCount: () => null, // Hide the count of images at the bottom
        }}
        onClickThumb={setCurrentIndex}
        trackProps={{ onClick: openLightbox }}
        styles={{
          view: (base) => ({
            ...base,
            borderRadius: "12px",
            overflow: "hidden",
          }),
        }}
      />

      <div className="md:flex md:justify-between hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`xl:w-[90px] w-[75px] rounded-lg cursor-pointer ${
              index === currentIndex
                ? "border-2 border-[color:var(--orange)]"
                : ""
            }`}
            onClick={() => {
              setCurrentIndex(index);
            }}
          >
            <img
              src={image.source.thumbnail}
              alt={`Thumbnail ${index}`}
              className={`w-full h-full rounded-lg hover:opacity-50 ${
                index === currentIndex ? "opacity-50" : ""
              }`}
            />
          </div>
        ))}
      </div>
      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal onClose={toggleLightbox}>
            <Carousel
              views={images}
              currentIndex={currentIndex}
              isFullscreen={{ isFullscreen: false }}
              components={{
                HeaderFullscreen: () => null,
                HeaderClose: () => (
                  <img
                    src="/images/icon-close.svg"
                    alt="icon close"
                    className="cursor-pointer"
                    onClick={toggleLightbox}
                  />
                ),
                FooterCount: () => null, // Hide the count of images at the bottom
                Footer: ({ currentIndex }) => (
                  <div className="flex justify-center gap-7 mt-9">
                    {images.map((image, index) => (
                      <div
                        className={`w-[90px] h-[90px] bg-[color:var(--white)] rounded-md overflow-hidden ${
                          index === currentIndex
                            ? "border-2 border-[color:var(--orange)]"
                            : ""
                        }`}
                        key={index}
                      >
                        <img
                          src={image.source.thumbnail}
                          alt={`Thumbnail ${index}`}
                          className={`w-full h-full cursor-pointer ${
                            index === currentIndex
                              ? "opacity-40"
                              : "hover:opacity-50"
                          }`}
                          onClick={() => {
                            setCurrentIndex(index);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ),
              }}
              trackProps={{ onClick: toggleLightbox }}
              styles={{
                view: (base) => ({
                  ...base,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto",
                  width: "550px",
                  height: "550px",
                  borderRadius: "0.375rem",
                  overflow: "hidden",
                }),
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default Gallery;
