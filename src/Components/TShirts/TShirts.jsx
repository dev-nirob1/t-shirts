import React from 'react';

const TShirts = ({ tShirt, handleBuyNowBtn }) => {
    const { _id, picture, name, price } = tShirt;
    return (
        <div className='border p-5 rounded-md'>
            <img className='w-[350px] h-[400px] rounded-md' src={picture} alt="image" />
            <h3 className='text-3xl font-semibold'>Name : {name}</h3>
            <p className='text-3xl my-2'>Price : {price}</p>
            <button onClick={()=>handleBuyNowBtn(tShirt)} className='px-5 py-3 bg-blue-500 rounded-md text-white'>Buy Now</button>
        </div>
    );
};

export default TShirts;