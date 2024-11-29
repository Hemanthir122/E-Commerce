import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';


import Title from "../components/Title";

import { assets } from '../assets/assets'; // Make sure you have a placeholder image
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity ,navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              {/* Product Details */}
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.image[0]} alt={productData.name} />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{currency}{productData.price}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                  </div>
                </div>
              </div>

              {/* Quantity Input and Delete Icon */}
              <div className="flex items-center gap-3">
                <input
                  onChange={(e) =>e.target.value===''||e.target.value=='0' ? null :updateQuantity(item._id,item.size,Number(e.target.value))}
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-5 mr-4 cursor-pointer"
                  src={assets.bin_icon}
                  alt="Delete"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')} className='border m-5 p-2 pl-5 px-5 bg-black text-white font-sm'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;