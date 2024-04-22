import React from 'react'
import { merchandise } from './data'

const MenuMerchandise = () => {
  return (
    <div className='mb-10'>
      <h4 className='text-xl font-bold mb-10 border-b border-gray-200 py-5'>Merchandise</h4>
                <div className="grid grid-cols-2 gap-5">
                {merchandise.map((item, key) => (
                        <div className='flex gap-6 items-center' key={key}>
                            <img src="https://via.placeholder.com/150x150" className='rounded-full' alt="" />
                            <h5 className='text-base font-bold'>{item.title}</h5>
                        </div> 
                    )
                    
                    )}
                </div>
    </div>
  )
}

export default MenuMerchandise