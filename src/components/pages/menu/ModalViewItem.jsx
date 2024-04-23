import React from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import { drinksImgUrl, subDrinksImgUrl, subFoodsImgUrl } from '../../helpers/functions-general';
import { SiCoffeescript } from "react-icons/si";


const ModalViewItem = ({setModalShow, subItem, setCartItem, cartItem, setSuccess}) => {
    const handleClose = () => setModalShow(false);

    const handleAddToCart = (item) => {
        setCartItem([...cartItem, item]);
        setSuccess(true);
    }

  return (
    <div className='modal fixed inset-0 flex justify-center items-center isolate'>
      <div className="backdrop h-screen w-full bg-black/40 absolute top-0 left-0 z-[-1]"></div>
        <div className="modal__main max-w-[900px] w-full bg-white rounded-md">
            <div className='p-4 flex justify-between items-center border-b border-gray-300'>
                <h4 className='mb-0 flex gap-2 font-bold'><SiCoffeescript className='text-xl' />{subItem.title}</h4>
                <button className='text-2xl' onClick={handleClose}><LiaTimesSolid/></button>
            </div>

            <div className="grid grid-cols-4 gap-5 p-4 py-10 max-h-[580px] h-full overflow-auto ">
                {subItem.subItem.map((item, key) => (
                    <button onClick={() => handleAddToCart(item)} key={key}>
                        <div className='item__card flex flex-col items-center' key={key}>
                            <img src={`${item.url}/${item.img}`}  alt="" className='size-[110px] rounded-full'/>
                            <h4 className='font-bold'>{item.title}</h4>
                            <small>{item.category}</small>
                        </div>
                    </button>
                
                ))}

                
            </div>

        </div>
    </div>
  )
}

export default ModalViewItem
