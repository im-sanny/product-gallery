import { useState } from 'react';

// Sample product data structure
const sampleProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    category: "Electronics",
    image: "/api/placeholder/200/200",
    rating: 4.5,
    popularity: 85,
    description: "High-quality wireless headphones with noise cancellation."
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 79.99,
    category: "Sports",
    image: "/api/placeholder/200/200",
    rating: 4.2,
    popularity: 78,
    description: "Comfortable running shoes for everyday use."
  }
];

const Products = () => {
  // State management
  const [products] = useState(sampleProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filter and Search Section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap gap-2">
            {/* Category Filter */}
            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="sports">Sports</option>
              <option value="clothing">Clothing</option>
            </select>

            {/* Price Range Filter */}
            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="0-50">$0 - $50</option>
              <option value="51-100">$51 - $100</option>
              <option value="101-plus">$101+</option>
            </select>

            {/* Sort Options */}
            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popularity">Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            
            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-blue-600">${product.price}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
                <div className="flex items-center gap-1">
                  <span className="text-sm">Rating: {product.rating}/5</span>
                </div>
              </div>
              
              {/* View Details Button */}
              <button
                onClick={() => {
                  setSelectedProduct(product);
                  setIsModalOpen(true);
                }}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>

            {/* Modal Content */}
            <div className="space-y-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
              <p className="text-3xl font-bold text-blue-600">
                ${selectedProduct.price}
              </p>
              <p className="text-gray-600">{selectedProduct.description}</p>
              <div className="flex justify-between items-center">
                <span>Rating: {selectedProduct.rating}/5</span>
                <span>Popularity: {selectedProduct.popularity}%</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;