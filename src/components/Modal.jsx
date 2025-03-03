import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/modalSlice";

const Modal = () => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 w-[400px]">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Modal Oynasi</h2>
        <p>Oynani yopish uchun 'yopish' tugmasini bosing</p>
        <button onClick={() => dispatch(closeModal())} className="mt-4 bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
          Yopish
        </button>
      </div>
    </div>
  );
};

export default Modal;
