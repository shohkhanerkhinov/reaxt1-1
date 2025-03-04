import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct, updateProduct } from '../redux/productsSlice ';

function Product() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [editProductId, setEditProductId] = useState(null);

    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        const newProduct = {
            id: Date.now(),
            name: productName,
            price: parseFloat(productPrice),
            quantity: parseInt(productQuantity),
        };
        dispatch(addProduct(newProduct));
        setProductName('');
        setProductPrice('');
        setProductQuantity('');
    };

    const handleRemoveProduct = (id) => {
        dispatch(removeProduct(id));
    };

    const handleUpdateProduct = () => {
        const updatedProduct = {
            id: editProductId,
            name: productName,
            price: parseFloat(productPrice),
            quantity: parseInt(productQuantity),
        };
        dispatch(updateProduct(updatedProduct));
        setEditProductId(null);
        setProductName('');
        setProductPrice('');
        setProductQuantity('');
    };

    const handleEditProduct = (product) => {
        setEditProductId(product.id);
        setProductName(product.name);
        setProductPrice(product.price);
        setProductQuantity(product.quantity);
    };

    return (
        <div>
            <div className="space-y-4 max-w-[400px] mt-10">
                <input
                    type="text"
                    placeholder="Mahsulot nomi"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                    type="number"
                    placeholder="Narxi"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                    type="number"
                    placeholder="Miqdori"
                    value={productQuantity}
                    onChange={(e) => setProductQuantity(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                {editProductId ? (
                    <button
                        onClick={handleUpdateProduct}
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Yangilash
                    </button>
                ) : (
                    <button
                        onClick={handleAddProduct}
                        className="w-full bg-green-500 text-white px-4 py-2 rounded-md"
                    >
                        Qo'shish
                    </button>
                )}
            </div>
            <ul>
                {products.length > 0 && products.map(function (product, index) {
                    return (<li className="border border-gray-300 max-w-[400px] p-4 rounded-lg shadow-md mt-5" key={product.id}>
                        <div className="flex justify-between items-center">
                            <span className="font-semibold">{product.name}</span>
                            <span className="text-gray-600">{product.price} so'm</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">{product.quantity} ta</span>
                            <div className="space-x-2">
                                <button
                                    onClick={() => handleEditProduct(product)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer"
                                >
                                    Tahrirlash
                                </button>
                                <button
                                    onClick={() => handleRemoveProduct(product.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer"
                                >
                                    O'chirish
                                </button>
                            </div>
                        </div>
                    </li>)

                })}
            </ul>
        </div>
    );
};

export default Product;