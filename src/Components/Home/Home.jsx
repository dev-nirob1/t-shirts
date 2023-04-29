import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirts from '../tShirts/tShirts';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleBuyNowBtn = tShirt => {
        const exists = cart.find(pd => pd._id === tShirt._id);
        if(exists){
            toast('Already added');
        }
        else{
            const newCart = [...cart, tShirt];
            setCart(newCart)
        }
    }

    const handleRemoveBtn = id => {
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining)
    }
    return (
        <div className='flex m-10 gap-5'>
            <div className='w-3/4 grid grid-cols-2 gap-5'>
                {
                    tShirts.map(tShirt => <TShirts key={tShirt._id} tShirt={tShirt} handleBuyNowBtn={handleBuyNowBtn}></TShirts>)
                }

            </div>
            <div className="w-1/4">
                <Cart cart={cart} handleRemoveBtn={handleRemoveBtn}></Cart>
            </div>
            <Toaster />
        </div>

    );
};

export default Home;