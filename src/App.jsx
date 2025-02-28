import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "./redux/modalSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Redux Toolkit Modal</h1>
      <button onClick={() => dispatch(openModal())} className="bg-blue-500 text-white px-4 py-2 rounded">
        Modalni Oching
      </button>
      <Modal />
    </div>
  );
}

export default App;
