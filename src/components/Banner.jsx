import { useState, useEffect } from "react";
// import { ArrowRight, ChevronRight } from 'lucide-react';
import { TiArrowRightOutline } from "react-icons/ti";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const bannerData = [
    {
      title: "New Collection 2024",
      subtitle: "Discover trendsetting designs",
      description: "Explore our latest arrivals with up to 40% off",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-900",
      accentColor: "bg-indigo-900",
    },
    {
      title: "Premium Quality",
      subtitle: "Handcrafted Excellence",
      description: "Free shipping on orders over $100",
      bgColor: "bg-amber-50",
      textColor: "text-amber-900",
      accentColor: "bg-amber-900",
    },
    {
      title: "Special Edition",
      subtitle: "Limited Time Offer",
      description: "Get exclusive deals before they're gone",
      bgColor: "bg-rose-50",
      textColor: "text-rose-900",
      accentColor: "bg-rose-900",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerData.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="relative h-[calc(100vh-64px)] overflow-hidden ">
      {/* Background */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
          bannerData[currentSlide].bgColor
        } ${isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-indigo-100 rounded-full mix-blend-multiply blur-xl opacity-70" />
          <div className="absolute top-0 right-0 w-64 h-64 translate-x-1/2 -translate-y-1/2 bg-rose-100 rounded-full mix-blend-multiply blur-xl opacity-70" />
          <div className="absolute bottom-0 left-1/2 w-64 h-64 -translate-x-1/2 translate-y-1/2 bg-amber-100 rounded-full mix-blend-multiply blur-xl opacity-70" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            {/* Title with floating elements */}
            <div className="relative mb-6">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${bannerData[currentSlide].accentColor} opacity-60`}
                  />
                ))}
              </div>
              <h1
                className={`text-6xl font-bold ${bannerData[currentSlide].textColor}`}
              >
                {bannerData[currentSlide].title}
              </h1>
            </div>

            <h2
              className={`text-3xl font-semibold mb-6 ${bannerData[currentSlide].textColor} opacity-90`}
            >
              {bannerData[currentSlide].subtitle}
            </h2>

            <p
              className={`text-xl mb-8 ${bannerData[currentSlide].textColor} opacity-80`}
            >
              {bannerData[currentSlide].description}
            </p>

            {/* Button with hover effect */}
            <button
              className={`group ${bannerData[currentSlide].textColor} 
              border-2 border-current px-8 py-3 rounded-full font-semibold 
              inline-flex items-center gap-2 transition-all duration-300
            `}
            >
              Shop Now
              <TiArrowRightOutline className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 group p-1`}
          >
            <div
              className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? bannerData[currentSlide].accentColor
                  : "bg-gray-300 group-hover:bg-gray-400"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Side indicators */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col space-y-4">
        {bannerData.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-8 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? bannerData[currentSlide].accentColor
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
