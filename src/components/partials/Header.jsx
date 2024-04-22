import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './svg/Logo';



const Header = () => {
  return (
    <div>
      <header>
        <div className="py-5 border-b border-gray-200 shadow-sm">
            <div className="px-10">
                <ul className='flex gap-5 items-center'>
                    <li>
                        <Link to="/home">
                            <Logo size="50px"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/menu" className='font-bold  uppercase'>Menu</Link>
                    </li>
                    <li>
                        <Link to="/menu" className='font-bold  uppercase'>Reward</Link>
                    </li>
                    <li>
                        <Link to="/menu" className='font-bold  uppercase'>Gift Cards</Link>
                    </li>
                </ul>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
