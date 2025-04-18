import React from "react";

const TrendingProducts = () => {
  // Products data with Unsplash image links
  const products = [
    {
      id: 1,
      name: "Women's Summer Dress",
      color: "Floral Print",
      price: 89,
      image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Women's Fashion",
      type: "Dress"
    },
    {
      id: 2,
      name: "Men's Casual Shirt",
      color: "Navy Blue",
      price: 65,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80",
      category: "Men's Fashion",
      type: "Shirt"
    },
    {
      id: 3,
      name: "Women's Denim Jacket",
      color: "Light Wash",
      price: 120,
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      category: "Women's Fashion",
      type: "Jacket"
    },
    {
      id: 4,
      name: "Men's Slim Fit Jeans",
      color: "Black",
      price: 95,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Men's Fashion",
      type: "Pants"
    },
    {
      id: 5,
      name: "Women's Blouse",
      color: "White",
      price: 55,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
      category: "Women's Fashion",
      type: "Top"
    },
    {
      id: 6,
      name: "Men's Polo Shirt",
      color: "Burgundy",
      price: 45,
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Men's Fashion",
      type: "Shirt"
    },
    {
      id: 7,
      name: "Women's Midi Skirt",
      color: "Pink",
      price: 75,
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      category: "Women's Fashion",
      type: "Skirt"
    },
    {
      id: 8,
      name: "Men's Hoodie",
      color: "Charcoal Gray",
      price: 85,
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80",
      category: "Men's Fashion",
      type: "Sweatshirt"
    },
    {
      id: 9,
      name: "Women's Tailored Blazer",
      color: "Beige",
      price: 129,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
      category: "Women's Fashion",
      type: "Blazer",
      description: "Classic tailored blazer for office or casual wear",
      sizes: ["XS", "S", "M", "L"]
    },
    {
      id: 10,
      name: "Men's Insulated Parka",
      color: "Olive Green", 
      price: 199,
      image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Men's Fashion",
      type: "Outerwear",
      description: "Waterproof winter parka with thermal insulation",
      sizes: ["S", "M", "L", "XL"],
      features: ["Windproof", "Multiple pockets", "Detachable hood"]
    }
  ];

  const handleAddToCart = (productId) => {
    console.log(`Added product ${productId} to cart`);
    // Add your cart logic here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Trending Products
          </h1>
          <p className="text-gray-600 mt-2">
            Discover this week's most wanted items
          </p>
        </div>
        <a
          href="#"
          className="mt-4 md:mt-0 inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-colors"
        >
          View all products
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="relative h-72 bg-gray-50 rounded-xl mb-4 overflow-hidden">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span>Product Image</span>
                </div>
              )}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">
                {product.category}
              </div>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-black p-2 rounded-full shadow-sm hover:bg-white transition-all opacity-0 group-hover:opacity-100 duration-300"
                aria-label={`Add ${product.name} to cart`}
              >
                <svg
                  className="w-5 h-5 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>

            <div className="px-1">
              <h2 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors cursor-pointer">
                {product.name}
              </h2>
              <p className="text-gray-500 text-sm">{product.color}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="font-semibold text-gray-900">${product.price}</p>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="lg:hidden flex items-center justify-center gap-1 text-xs font-medium text-white px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
        >
          Load More Products
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default TrendingProducts;
