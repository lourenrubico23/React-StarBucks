import React from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import { SiCoffeescript } from "react-icons/si";
import { baseImgUrl, drinksImgUrl, subDrinksImgUrl } from '../../helpers/functions-general';
import { FaTrash } from 'react-icons/fa';
import { BsCartX } from "react-icons/bs";

const ModalCart = ({setCartShow, cartItem, setCartItem}) => {
    console.log(cartItem)
    const handleClose = () => setCartShow(false);
    const handleEmptyCart = () => setCartItem([]);

    const handleRemoveItem = (item) => {
        cartItem.filter(cart => cart.title !== item.title)
    } 

    
    const getSubTotal = cartItem.reduce(
        (a, c) => a + Number(c.price),
        0,
     );

     

  return (
    <div className='modal fixed inset-0 flex justify-end items-center isolate'>
      <div className="backdrop h-screen w-full bg-black/40 absolute top-0 left-0 z-[-1]"></div>
        <div className="modal__main max-w-[400px] w-full h-screen bg-white">
            <div className='p-4 flex justify-between items-center border-b border-gray-300'>
                <h4 className='mb-0 flex gap-2 font-bold'><SiCoffeescript className='text-xl' />Cart</h4>
                <div className='flex gap-4 '>
                    {cartItem.length !== 0 && (
                        <button className='text-xl' onClick={handleEmptyCart}><FaTrash/></button>
                    )}
                    
                    <button className='text-2xl' onClick={handleClose}><LiaTimesSolid/></button>
                </div>
            </div>
            

                <div className="p-4 py-10 max-h-[800px] h-full overflow-auto " >
                    {cartItem.map((item, key) => (
                    <div className="cartItem mb-5 flex gap-5 items-center" key={key}>
                        <img src={`${subDrinksImgUrl}/${item.img}`} alt="" className='rounded-full size-[70px]' />
                            <div>
                                <h4 className='font-bold'>{item.title}</h4>
                                <p>{item.price}</p>
                            </div>

                        <button onClick={() => handleRemoveItem(item)}>Remove</button>
                    </div>
                    ))}
            

                    {cartItem.length === 0 && (
                        <div className='empty__cart text-center flex flex-col items-center'>
                            <BsCartX className='text-[80px] opacity-50 '/>
                            <h3 className='font-bold opacity-25'>Cart Empty</h3>
                        </div> 
                    )}
            
                </div>

            
            <ul className='p-4 bg-accent text-white rounded-md flex justify-between text-xl mx-2'>
                <li className='font-bold '>Total</li>
                <li>Php {getSubTotal.toFixed(2)}</li>
            </ul>
    
        
        </div>
    </div>
  )
}

export default ModalCart
