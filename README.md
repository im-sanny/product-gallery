# Product Gallery React Application

A modern, responsive product gallery built with React and Tailwind CSS, featuring dynamic filtering, sorting, and search capabilities.

## 🚀 Features

- **Product Display**: Clean, grid-based layout showcasing product cards with essential information
- **Search Functionality**: Real-time product search
- **Advanced Filtering**: Filter products by:
  - Category
  - Price range
  - Sorting options (price, popularity, rating)
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Product Details**: Modal view for detailed product information
- **State Persistence**: Saves filter preferences to local storage

## 🛠️ Technologies Used

- React.js
- Tailwind CSS
- JavaScript (ES6+)
- Local Storage API

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/product-gallery.git
```

2. Navigate to the project directory:

```bash
cd product-gallery
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## 🔧 Usage

1. Browse products in the gallery grid
2. Use the search bar to find specific products
3. Filter products by category and price range
4. Sort products by different criteria
5. Click "View Details" on any product card to see more information

## 📁 Project Structure

```
product-gallery/
├── src/
│   ├── components/
│   │   └── Products.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── main.jsx
│   └── index.css
├── public/
│   └── images/
├── tailwind.config.js
└── package.json
```

## 🎨 Customization

### Adding New Products

Add new products to `mockData.js`:

```javascript
{
  id: uniqueId,
  name: "Product Name",
  price: 99.99,
  category: "Category",
  image: "image-url",
  rating: 4.5,
  popularity: 85,
  description: "Product description"
}
```

### Modifying Categories

Edit the category options in `Products.jsx`:

```javascript
<select value={selectedCategory}>
  <option value="all">All Categories</option>
  <option value="your-category">Your Category</option>
  // Add more categories
</select>
```

## 📱 Responsive Breakpoints

- Mobile: 0-640px
- Tablet: 641px-1024px
- Desktop: 1025px+

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👏 Acknowledgments

- Product images provided by [placeholder service]
- Icons from [Hero Icons]
- Design inspiration from various e-commerce platforms

## 📞 Support

For support, please email email@example.com

---

Made with ❤️ by Rasel Parvez Sanny
