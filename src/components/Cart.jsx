import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../redux/cartSlice';

function Cart(){
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Savatcha</h1>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="border p-4 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>{item.price} so'm x {item.quantity}</p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Olib tashlash
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Umumiy Narx: {totalPrice} so'm</h2>
      </div>
      <div className="mt-4">
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          Savatchani Tozalash
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Mahsulotlar</h2>
        <div className="space-y-2">
          <button
            onClick={() => dispatch(addToCart({ id: 1, name: 'Mahsulot 1', price: 10000 }))}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Mahsulot 1 qo'shish
          </button>
          <button
            onClick={() => dispatch(addToCart({ id: 2, name: 'Mahsulot 2', price: 15000 }))}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Mahsulot 2 qo'shish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;