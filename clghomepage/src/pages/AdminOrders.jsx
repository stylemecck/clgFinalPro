import React, { useState } from 'react';
import { 
  Search, Filter, ChevronDown, ChevronUp, 
  Check, X, Truck, CreditCard, RefreshCw,
  ChevronLeft, ChevronRight, MoreVertical, Clock,
} from 'lucide-react';
import Sidebar from './Sidebar';
// import Clock from './Clock';  // Adjust the path as needed


const AdminOrders = () => {
  // Sample order data
  const initialOrders = [
    { 
      id: '#ORD-1001', 
      customer: 'John Doe', 
      date: '2023-05-15', 
      status: 'completed', 
      total: 125.99, 
      payment: 'Credit Card', 
      items: 3,
      shipping: 'Express'
    },
    { 
      id: '#ORD-1002', 
      customer: 'Jane Smith', 
      date: '2023-05-14', 
      status: 'processing', 
      total: 89.50, 
      payment: 'PayPal', 
      items: 2,
      shipping: 'Standard'
    },
    { 
      id: '#ORD-1003', 
      customer: 'Robert Johnson', 
      date: '2023-05-13', 
      status: 'shipped', 
      total: 245.75, 
      payment: 'Credit Card', 
      items: 5,
      shipping: 'Express'
    },
    { 
      id: '#ORD-1004', 
      customer: 'Emily Davis', 
      date: '2023-05-12', 
      status: 'pending', 
      total: 67.30, 
      payment: 'Bank Transfer', 
      items: 1,
      shipping: 'Standard'
    },
    { 
      id: '#ORD-1005', 
      customer: 'Michael Wilson', 
      date: '2023-05-11', 
      status: 'cancelled', 
      total: 199.99, 
      payment: 'Credit Card', 
      items: 4,
      shipping: 'Express'
    },
    { 
      id: '#ORD-1006', 
      customer: 'Sarah Brown', 
      date: '2023-05-10', 
      status: 'completed', 
      total: 154.25, 
      payment: 'PayPal', 
      items: 3,
      shipping: 'Standard'
    },
    { 
      id: '#ORD-1007', 
      customer: 'David Lee', 
      date: '2023-05-09', 
      status: 'shipped', 
      total: 87.99, 
      payment: 'Credit Card', 
      items: 2,
      shipping: 'Express'
    },
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState('');

  // Filter orders based on search and filters
  const filteredOrders = orders.filter(order => {
    const matchesSearch = (
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    const matchesDate = dateFilter === 'all' || (
      dateFilter === 'today' && order.date === new Date().toISOString().split('T')[0]
    );
    return matchesSearch && matchesStatus && matchesDate;
  });

  // Pagination
  const ordersPerPage = 5;
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Status options
  const statusOptions = ['all', 'pending', 'processing', 'shipped', 'completed', 'cancelled'];
  const dateOptions = ['all', 'today'];

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Toggle order details
  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  // Open status update modal
  const openUpdateModal = (order) => {
    setSelectedOrder(order);
    setNewStatus(order.status);
    setIsUpdateModalOpen(true);
  };

  // Update order status
  const updateOrderStatus = () => {
    setOrders(orders.map(order => 
      order.id === selectedOrder.id ? { ...order, status: newStatus } : order
    ));
    setIsUpdateModalOpen(false);
  };

  // Get status icon and color
  const getStatusInfo = (status) => {
    switch (status) {
      case 'completed':
        return { icon: <Check className="h-4 w-4" />, color: 'bg-green-100 text-green-800' };
      case 'processing':
        return { icon: <RefreshCw className="h-4 w-4" />, color: 'bg-blue-100 text-blue-800' };
      case 'shipped':
        return { icon: <Truck className="h-4 w-4" />, color: 'bg-purple-100 text-purple-800' };
      case 'pending':
        return { icon: <Clock className="h-4 w-4" />, color: 'bg-yellow-100 text-yellow-800' };
      case 'cancelled':
        return { icon: <X className="h-4 w-4" />, color: 'bg-red-100 text-red-800' };
      default:
        return { icon: null, color: 'bg-gray-100 text-gray-800' };
    }
  };

  // Sample order items
  const orderItems = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, quantity: 1, image: '' },
    { id: 2, name: 'Phone Case', price: 19.99, quantity: 2, image: '' },
  ];

  return (
    <div className='flex'>
      <Sidebar />
    <div className="p-6 bg-gray-50 min-h-screen w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Order Management</h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <RefreshCw className="h-5 w-5 mr-2 text-gray-600" />
            Refresh
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative md:col-span-2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search orders by ID or customer..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {statusOptions.map(status => (
                <option key={status} value={status}>
                  {status === 'all' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            >
              {dateOptions.map(date => (
                <option key={date} value={date}>
                  {date === 'all' ? 'All Dates' : 'Today'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentOrders.length > 0 ? (
                currentOrders.map(order => (
                  <React.Fragment key={order.id}>
                    <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => toggleOrderDetails(order.id)}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-indigo-600">{order.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{order.customer}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{order.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusInfo(order.status).color}`}>
                            {getStatusInfo(order.status).icon}
                            <span className="ml-1">{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">${order.total.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end items-center space-x-2">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              openUpdateModal(order);
                            }}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <RefreshCw className="h-5 w-5" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            <MoreVertical className="h-5 w-5" />
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleOrderDetails(order.id);
                            }}
                            className="text-gray-600 hover:text-gray-900"
                          >
                            {expandedOrder === order.id ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                    {expandedOrder === order.id && (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 bg-gray-50">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Order Items */}
                            <div className="md:col-span-2">
                              <h3 className="text-lg font-medium text-gray-900 mb-4">Order Items ({order.items})</h3>
                              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                <ul className="divide-y divide-gray-200">
                                  {orderItems.map(item => (
                                    <li key={item.id} className="p-4">
                                      <div className="flex items-center">
                                        <div className="flex-shrink-0 h-16 w-16 bg-gray-200 rounded-lg"></div>
                                        <div className="ml-4 flex-1">
                                          <div className="flex items-center justify-between">
                                            <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                                            <p className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                                          </div>
                                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                          <p className="text-sm font-medium text-gray-900 mt-1">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            
                            {/* Order Summary */}
                            <div>
                              <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
                              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                                <div className="space-y-3">
                                  <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Subtotal</span>
                                    <span className="text-sm text-gray-900">${order.total.toFixed(2)}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Shipping ({order.shipping})</span>
                                    <span className="text-sm text-gray-900">
                                      {order.shipping === 'Express' ? '$15.00' : '$5.00'}
                                    </span>
                                  </div>
                                  <div className="flex justify-between border-t border-gray-200 pt-3">
                                    <span className="text-base font-medium text-gray-900">Total</span>
                                    <span className="text-base font-medium text-gray-900">
                                      ${(order.total + (order.shipping === 'Express' ? 15 : 5)).toFixed(2)}
                                    </span>
                                  </div>
                                </div>
                                
                                <div className="mt-6">
                                  <h4 className="text-sm font-medium text-gray-900 mb-2">Payment Method</h4>
                                  <div className="flex items-center">
                                    <CreditCard className="h-5 w-5 text-gray-500 mr-2" />
                                    <span className="text-sm text-gray-600">{order.payment}</span>
                                  </div>
                                </div>
                                
                                <div className="mt-6">
                                  <h4 className="text-sm font-medium text-gray-900 mb-2">Shipping Address</h4>
                                  <div className="text-sm text-gray-600">
                                    <p>John Doe</p>
                                    <p>123 Main St</p>
                                    <p>New York, NY 10001</p>
                                    <p>United States</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                    No orders found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <button 
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`flex items-center px-3 py-1 rounded-lg ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Previous
          </button>
          
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-3 py-1 rounded-lg ${currentPage === number ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {number}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`flex items-center px-3 py-1 rounded-lg ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Next
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>
      )}

      {/* Update Status Modal */}
      {isUpdateModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Update Order Status</h2>
              <div className="mb-6">
                <p className="text-gray-600 mb-1">Order ID: <span className="font-medium">{selectedOrder.id}</span></p>
                <p className="text-gray-600">Customer: <span className="font-medium">{selectedOrder.customer}</span></p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Status</label>
                  <div className={`px-3 py-2 rounded-lg ${getStatusInfo(selectedOrder.status).color} inline-flex items-center`}>
                    {getStatusInfo(selectedOrder.status).icon}
                    <span className="ml-1">{selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">New Status</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                  >
                    {statusOptions.filter(s => s !== 'all').map(status => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setIsUpdateModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={updateOrderStatus}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Update Status
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default AdminOrders;