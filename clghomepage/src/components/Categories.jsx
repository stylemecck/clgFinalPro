import React from 'react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Women's Fashion",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      subcategories: ["Dresses", "Tops", "Jeans", "Activewear"]
    },
    {
      id: 2,
      name: "Men's Fashion",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
      subcategories: ["Shirts", "Pants", "Suits", "Activewear"]
    },
    // {
    //   id: 3,
    //   name: "Kids & Baby",
    //   image: "https://images.unsplash.com/photo-1604917018610-3849a54b4e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    //   subcategories: ["Boys", "Girls", "Baby", "Accessories"]
    // },
    // {
    //   id: 4,
    //   name: "Accessories",
    //   image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    //   subcategories: ["Bags", "Watches", "Jewelry", "Sunglasses"]
    // },
    // {
    //   id: 5,
    //   name: "Footwear",
    //   image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    //   subcategories: ["Sneakers", "Sandals", "Boots", "Formal"]
    // },
    {
      id: 6,
      name: "Activewear",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      subcategories: ["Gym Wear", "Yoga", "Running", "Swimwear"]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Discover our wide range of clothing categories</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 sm:h-56 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-semibold text-white group-hover:-translate-y-3 transition-transform duration-300">
                  {category.name}
                </h3>
                
                <div className="max-h-0 overflow-hidden group-hover:max-h-48 transition-all duration-500 ease-in-out">
                  <div className="pt-3">
                    <ul className="flex flex-wrap gap-2">
                      {category.subcategories.map((subcategory, index) => (
                        <li key={index}>
                          <a 
                            href="#" 
                            className="text-xs font-medium text-white hover:text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full hover:bg-black/60 transition-all duration-200"
                          >
                            {subcategory}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <a 
                      href="#" 
                      className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-black hover:bg-gray-900 px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-md"
                    >
                      Shop Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a 
            href="#" 
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-md"
          >
            View All Collections
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;