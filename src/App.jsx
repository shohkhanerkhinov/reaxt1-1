import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "./redux/modalSlice";
import Modal from "./components/Modal";
import Product from "./components/Product";

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
    </div>
  );
}

export default App;
