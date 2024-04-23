import React from 'react'
import { merchandise } from './data'
import { baseImgUrl, merchandiseImgUrl } from '../../helpers/functions-general'

const MenuMerchandise = ({setModalShow, setsubItem}) => {
  const handleShowModal = (item) => {
    setsubItem(item)
    setModalShow(true)
  }
  

  return (
    <div className='mb-10'>
      <h4 className='text-xl font-bold mb-10 border-b border-gray-200 py-5'>Merchandise</h4>
                <div className="grid grid-cols-2 gap-5">

                    {merchandise.map((item, key) => (
                        <div className='flex gap-6 items-center mb-10 cursor-pointer' key={key} onClick={() => handleShowModal(item)}>
                            <img src={`${merchandiseImgUrl}/${item.img}`} className='rounded-full w-[25%]' alt="" />
                            <h5 className='text-base font-bold'>{item.title}</h5>
                        </div> 
                    )
                    
                    )}

                </div>
    </div>
  )
}

export default MenuMerchandise