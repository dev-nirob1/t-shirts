import React from 'react';
const Cart = ({cart, handleRemoveBtn}) => {
   
    return (
        <div className='border'>
            <h2 className="text-4xl font-bold">Order Summary</h2>
            <h3 className='text-3xl font-semibold my-3'>Added : {cart.length}</h3>
            {
                cart.map(tShirt => <p className='my-2' key={tShirt._id} > product : {tShirt.name} <button className='px-4 py-2 bg-red-500 text-white font-medium rounded-md' onClick={()=>handleRemoveBtn(tShirt._id)}>Remove</button></p>)
            }            
            
        </div>
    );
};

export default Cart;