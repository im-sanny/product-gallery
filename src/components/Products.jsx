import { useState } from "react";
import { fakeProducts } from "../Data/mockData";
import { BiTrendingUp } from "react-icons/bi";
import { FaFilter, FaSearch, FaShoppingCart, FaStar } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { BsArrowDownUp } from "react-icons/bs";

const Products = () => {
  const [products] = useState(fakeProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [priceRange, setPriceRange] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchProduct = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCategory = searchProduct.filter(
    (product) =>
      selectedCategory === "all" ||
      product.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const filterByPrice = filteredCategory.filter((product) => {
    if (priceRange === "all") return true;
    if (priceRange === "0-50") return product.price >= 0 && product.price <= 50;
    if (priceRange === "51-100")
      return product.price > 50 && product.price <= 100;
    if (priceRange === "101-plus") return product.price > 101;
  });

  const sortedProducts = filterByPrice.sort((a, b) => {
    switch (sortBy) {
      case "popularity":
        return b.popularity - a.popularity;
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Enhanced Filter and Search Section */}
      <div className="mb-12 space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Enhanced Search Bar */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 border-2 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Enhanced Filter Controls */}
          <div className="flex flex-wrap gap-4">
            {/* Category Filter */}
            <div className="relative">
              <select
                className="appearance-none w-full pl-4 pr-10 py-3 border-2 rounded-xl bg-white shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="sports">Sports</option>
                <option value="clothing">Clothing</option>
              </select>
              <FaFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Price Range Filter */}
            <div className="relative">
              <select
                className="appearance-none w-full pl-4 pr-10 py-3 border-2 rounded-xl bg-white shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="0-50">$0 - $50</option>
                <option value="51-100">$51 - $100</option>
                <option value="101-plus">$101+</option>
              </select>
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                $
              </span>
            </div>

            {/* Sort Options */}
            <div className="relative">
              <select
                className="appearance-none w-full pl-4 pr-10 py-3 border-2 rounded-xl bg-white shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popularity">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <BsArrowDownUp className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl relative flex flex-col"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/80 rounded-full px-3 py-1 text-sm">
                {product.category}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 space-y-4 flex-grow flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h3>

              <div className="flex justify-between items-center flex-grow">
                <p className="text-2xl font-bold text-indigo-600">
                  ${product.price}
                </p>
                <div className="flex items-center gap-1">
                  <FaStar className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{product.rating}/5</span>
                </div>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => {
                  setSelectedProduct(product);
                  setIsModalOpen(true);
                }}
                className="mt-4 w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transform hover:scale-[1.02] active:scale-[0.98]          transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaShoppingCart className="w-5 h-5" />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-8 relative transform transition-all duration-300 scale-100 opacity-100 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <FaX className="w-6 h-6 text-gray-500" />
            </button>

            {/* Modal Content */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  {selectedProduct.name}
                </h2>

                <p className="text-4xl font-bold text-indigo-600">
                  ${selectedProduct.price}
                </p>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <FaStar className="w-6 h-6 text-yellow-400 fill-current" />
                    <span className="text-lg font-medium">
                      Rating: {selectedProduct.rating}/5
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BiTrendingUp className="w-6 h-6 text-indigo-600" />
                    <span className="text-lg font-medium">
                      Popularity: {selectedProduct.popularity}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
