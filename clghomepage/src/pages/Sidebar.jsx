import React from 'react';
import {
  BarChart2, ShoppingBag, Users, CreditCard, Activity,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-shrink-0 ">
      <div className="flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="flex items-center justify-center h-16 px-4 bg-indigo-600">
          <h1 className="text-white font-bold text-xl">AdminPanel</h1>
        </div>
        <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto">
          <nav className="flex-1 space-y-2">
            <a 
              href="/admindashboard" 
              className="flex items-center px-4 py-3 text-sm font-medium bg-indigo-100 rounded-lg text-indigo-700 hover:bg-indigo-200 active:bg-indigo-300"
            >
              <BarChart2 className="h-5 w-5 mr-3" />
              Dashboard
            </a>
            <a 
              href="/adminproducts" 
              className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-200 active:bg-gray-300 rounded-lg"
            >
              <ShoppingBag className="h-5 w-5 mr-3" />
              Products
            </a>
            <a 
              href="#" 
              className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-200 active:bg-gray-300 rounded-lg"
            >
              <Users className="h-5 w-5 mr-3" />
              Customers
            </a>
            <a 
              href="/adminorders" 
              className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-200 active:bg-gray-300 rounded-lg"
            >
              <CreditCard className="h-5 w-5 mr-3" />
              Orders
            </a>
            <a 
              href="#" 
              className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-200 active:bg-gray-300 rounded-lg"
            >
              <Activity className="h-5 w-5 mr-3" />
              Analytics
            </a>
          </nav>
          <div className="mt-auto space-y-2">
            <a 
              href="#" 
              className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-200 active:bg-gray-300 rounded-lg"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
