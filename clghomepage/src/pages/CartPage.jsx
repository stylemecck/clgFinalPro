import React, { useState } from 'react';
import { XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      quantity: 1,
      color: 'Black',
      size: 'One Size'
    },
    {
      id: 2,
      name: 'Ergonomic Office Chair',
      price: 499.99,
      image: 'https://images.unsplash.com/photo-1518792528501-352f829886dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      quantity: 2,
      color: 'Charcoal',
      size: 'Standard'
    }
  ]);

  const calculateShipping = (subtotal) => {
    if (subtotal === 0) return 0;
    if (subtotal > 500) return 0;
    if (subtotal > 200) return 9.99;
    return 14.99;
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = calculateShipping(subtotal);
  const tax = (subtotal * 0.08).toFixed(2);
  const total = (subtotal + shipping + parseFloat(tax)).toFixed(2);

  // const handleQuantityChange = (id, newQuantity) => {
  //   if (newQuantity < 1) return;
  //   setCartItems(cartItems.map(item => 
  //     item.id === id ? { ...item, quantity: newQuantity } : item
  //   ));
  // };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-2">Your Shopping Cart</h1>
          <p className="text-gray-600">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Cart Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-gray-100 bg-gray-50">
                <div className="col-span-5 font-medium text-gray-500 uppercase text-sm">Product</div>
                <div className="col-span-2 font-medium text-gray-500 uppercase text-sm text-center">Price</div>
                <div className="col-span-2 font-medium text-gray-500 uppercase text-sm text-center">Quantity</div>
                <div className="col-span-2 font-medium text-gray-500 uppercase text-sm text-center">Total</div>
                <div className="col-span-1"></div>
              </div>

              {/* Cart Items */}
              {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b border-gray-100 last:border-0">
                  {/* Product Info */}
                  <div className="md:col-span-5 flex items-start space-x-4">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <p className="text-gray-500 mt-1 text-sm">{item.color}</p>
                      <p className="text-gray-500 text-sm">{item.size}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="md:col-span-2 flex md:items-center justify-between md:justify-center">
                    <span className="md:hidden text-gray-500">Price</span>
                    <span className="font-medium text-gray-900">${item.price.toFixed(2)}</span>
                  </div>

                  {/* Quantity */}
                  <div className="md:col-span-2 flex md:items-center justify-between md:justify-center">
                    <span className="md:hidden text-gray-500">Quantity</span>
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                      >
                        <MinusIcon className="h-4 w-4" />
                      </button>
                      <span className="px-3 text-gray-900">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                      >
                        <PlusIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="md:col-span-2 flex md:items-center justify-between md:justify-center">
                    <span className="md:hidden text-gray-500">Total</span>
                    <span className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>

                  {/* Remove */}
                  <div className="md:col-span-1 flex md:items-center justify-end">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-playfair font-bold text-gray-900 mb-4">Order Summary</h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? <span className="text-green-600">Free</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (8%)</span>
                  <span className="font-medium">${tax}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3 mt-3">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-gray-900">${total}</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3.5 px-6 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md">
                Proceed to Checkout
              </button>

              <p className="mt-4 text-center text-sm text-gray-500">
                Free returns · Secure payment · Satisfaction guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
