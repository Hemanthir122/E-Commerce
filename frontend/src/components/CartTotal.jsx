import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title'; // Adjust this import based on your actual file structure

const CartTotal = () => {
  const{ currency, delivery_fees, getCartAmount } = useContext(ShopContext);  // Move useContext here

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTAL'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency}{delivery_fees}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fees}.00</b>
        </div>
      </div>
      
      </div>
    
  );
}

export default CartTotal;
