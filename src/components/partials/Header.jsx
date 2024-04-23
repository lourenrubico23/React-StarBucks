import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './svg/Logo';
import { CiShoppingCart } from "react-icons/ci";



const Header = ({setCartShow, cartItem}) => {
const handleShowCart = () => setCartShow(true)

  return (
    <div>
      <header >
        <div className="py-5 border-b border-gray-200 shadow-sm">
            <div className="px-10 flex justify-between items-center">
                <ul className='flex gap-5 items-center'>
                    <li>
                        <Link to="/home">
                            <Logo size="50px"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/menu" className='font-bold uppercase hover:text-accent'>Menu</Link>
                    </li>
                    <li>
                        <Link to="/menu" className='font-bold uppercase hover:text-accent'>Reward</Link>
                    </li>
                    <li>
                        <Link to="/menu" className='font-bold uppercase hover:text-accent'>Gift Cards</Link>
                    </li>
                </ul>

                <button className='text-4xl relative' onClick={handleShowCart}><CiShoppingCart />
                {cartItem.length !== 0 && (<span className='size-4 rounded-full bg-red-600 text-white absolute -top-1 -left-[5px] text-[10px] grid place-content-center' >{cartItem.length}</span>)}
                </button>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
