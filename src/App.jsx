import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "./redux/modalSlice";
import Modal from "./components/Modal";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Auth from "./components/Auth"

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 mt-5">1. Redux Toolkit Modal</h1>
      <button onClick={() => dispatch(openModal())} className="bg-blue-500 text-white px-4 py-2 rounded">
        Modalni Oching
      </button>
      <Modal />
      <h1 className="text-2xl font-bold mb-4 mt-5">2.</h1>
      <Product />
      <h1 className="text-2xl font-bold mb-4 mt-5">3.</h1>
      <Cart />
      <h1 className="text-2xl font-bold mb-4 mt-5">4. ni redux-persist ornatdim lekin ishlata olmadim</h1>
      <h1 className="text-2xl font-bold mb-4 mt-5">5.</h1>
      <Auth></Auth>
    </div>
  );
}

export default App;
