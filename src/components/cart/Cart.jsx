import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { loadStripe } from '@stripe/stripe-js';

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (!user) {
      alert('Please log in to proceed with checkout.');
      navigate('/login');
      return;
    }
    // Placeholder for Stripe checkout - requires backend to create session
    alert('Checkout functionality is not yet implemented. Please contact support.');
  };

  const handlePayWithCBE = () => {
    if (!user) {
      alert('Please log in to proceed with payment.');
      navigate('/login');
      return;
    }
    const userAccount = prompt('Enter your bank account number:');
    if (userAccount) {
      // Simulate payment to CBE account 1000147807418
      alert(`Payment initiated from your account ${userAccount} to CBE account 1000147807418. Payment sent!`);
    }
  };

  const handlePayWithTelebir = () => {
    if (!user) {
      alert('Please log in to proceed with payment.');
      navigate('/login');
      return;
    }
    const userPhone = prompt('Enter your Telebir account phone number:');
    if (userPhone) {
      // Simulate payment to Telebir number 0987023119
      alert(`Payment initiated from your phone ${userPhone} to Telebir number 0987023119. Payment sent!`);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
        <div className="text-center">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      <div className="max-w-4xl mx-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b py-4">
            <div className="flex items-center space-x-4">
              <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded bg-gray-200 hover:bg-gray-300"
                >
                  <FaMinus size={12} />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded bg-gray-200 hover:bg-gray-300"
                >
                  <FaPlus size={12} />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
        <div className="mt-8 flex flex-col items-end space-y-4">
          <div className="flex space-x-4">
            <button
              onClick={handlePayWithCBE}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Pay with CBE
            </button>
            <button
              onClick={handlePayWithTelebir}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Pay with Telebir
            </button>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold">Total: {getTotalPrice()} ETB</p>
            <button
              onClick={handleCheckout}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
