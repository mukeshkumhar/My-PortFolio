import React, { useState, useEffect } from "react";

const DemoImageBanner = [
  {
    id: 0,
    src: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1734107981/BannerImages/wallpaperflare.com_wallpaper_9_o9uqfd.jpg",
  },
  {
    id: 1,
    src: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1734107981/BannerImages/wallpaperflare.com_wallpaper_11_r4cffj.jpg",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1734107980/BannerImages/wallpaperflare.com_wallpaper_10_ee7q2b.jpg",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1734107979/BannerImages/wallpaperflare.com_wallpaper_wn5mvq.jpg",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1734107980/BannerImages/wallpaperflare.com_wallpaper_1_rndw8x.jpg",
  },
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === DemoImageBanner.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? DemoImageBanner.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-full mx-auto overflow-hidden rounded-lg mb-20">
      <div
        className="transition-transform duration-500 ease-in-out flex items-top object-center"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {DemoImageBanner.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Slide ${image.id}`}
            className="w-full object-center"
          />
        ))}
      </div>
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8249;
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8250;
      </button>
    </div>
  );
};
export default BannerSlider;