import { useState, useEffect } from 'react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bannerData = [
    {
      title: "New Collection 2024",
      subtitle: "Discover trendsetting designs",
      description: "Explore our latest arrivals with up to 40% off",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-900"
    },
    {
      title: "Premium Quality",
      subtitle: "Handcrafted Excellence",
      description: "Free shipping on orders over $100",
      bgColor: "bg-amber-100",
      textColor: "text-amber-900"
    },
    {
      title: "Special Edition",
      subtitle: "Limited Time Offer",
      description: "Get exclusive deals before they're gone",
      bgColor: "bg-rose-100",
      textColor: "text-rose-900"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Main Banner Content */}
      <div className={`relative ${bannerData[currentSlide].bgColor} transition-colors duration-500`}>
        <div className="container mx-auto px-4">
          <div className="flex min-h-[400px] items-center justify-between py-16">
            {/* Text Content */}
            <div className="max-w-2xl animate-fadeIn">
              <h1 className={`mb-4 text-5xl font-bold ${bannerData[currentSlide].textColor}`}>
                {bannerData[currentSlide].title}
              </h1>
              <h2 className={`mb-6 text-2xl ${bannerData[currentSlide].textColor}`}>
                {bannerData[currentSlide].subtitle}
              </h2>
              <p className={`mb-8 text-lg ${bannerData[currentSlide].textColor}`}>
                {bannerData[currentSlide].description}
              </p>
              <button className="rounded-full bg-white px-8 py-3 font-semibold text-gray-900 shadow-lg transition-transform hover:scale-105">
                Shop Now
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="relative hidden md:block">
              <div className="absolute -right-4 top-1/2 h-64 w-64 -translate-y-1/2 transform rounded-full border-8 border-white/20"></div>
              <div className="absolute -right-8 top-1/2 h-48 w-48 -translate-y-1/2 transform rounded-full border-8 border-white/20"></div>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-8 rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-gray-900 w-12' 
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;