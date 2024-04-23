import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/footer/Footer'
import MenuDrinks from './MenuDrinks'
import MenuCoffee from './MenuCoffee'
import MenuFoods from './MenuFoods'
import MenuMerchandise from './MenuMerchandise'
import ModalViewItem from './ModalViewItem'
import ModalCart from './ModalCart'
import Toast from '../../partials/Toast'


/* State */
const Menu = () => {
    const [menuTab, setMenuTab] = React.useState('drinks');
    const [isModalShow, setModalShow] = React.useState(false);
    const [subItem, setsubItem] = React.useState([]);
    const [isCartShow, setCartShow] = React.useState(false);
    const [cartItem, setCartItem] = React.useState([]);
    const [success, setSuccess] = React.useState();

    const handleChangeMenu = (menu) => {
        setMenuTab(menu)
    }


  return (
    <div>
      <Header setCartShow={setCartShow} cartItem={cartItem}/>
    <div className="container">
        <div className="grid grid-cols-[20%_1fr] gap-5 my-20">
            <aside>
                <ul className='text-lg font-semibold '>
                    <li><button className={`font-bold ${menuTab==="drinks" ? "text-accent" : "" }`} onClick={() => handleChangeMenu("drinks")}>Drinks</button></li>
                    <li><button className={`font-bold ${menuTab==="foods" ? "text-accent" : "" }`} onClick={() => handleChangeMenu("foods")}>Food</button></li>
                    <li><button className={`font-bold ${menuTab==="coffee" ? "text-accent" : "" }`} onClick={() => handleChangeMenu("coffee")}>Coffee</button></li>
                    <li><button className={`font-bold ${menuTab==="merchandise" ? "text-accent" : "" }`} onClick={() => handleChangeMenu("merchandise")}>Merchandise</button></li>
                </ul>
            </aside>

            <main>
                <h2>Menu</h2>
                {menuTab === "drinks" && <MenuDrinks setModalShow={setModalShow} setsubItem={setsubItem} />}
                {menuTab === "coffee" && <MenuCoffee setModalShow={setModalShow} setsubItem={setsubItem}/>}
                {menuTab === "foods" && <MenuFoods setModalShow={setModalShow} setsubItem={setsubItem}/>}
                {menuTab === "merchandise" && <MenuMerchandise setModalShow={setModalShow} setsubItem={setsubItem}/>}
                
                
                
                
            </main>
        </div>
    </div>
        

      <Footer/>
      
      {isModalShow && <ModalViewItem setModalShow={setModalShow} subItem={subItem} setCartItem={setCartItem} cartItem={cartItem} setSuccess={setSuccess}/>}
      {isCartShow && <ModalCart setCartShow={setCartShow} cartItem={cartItem} setCartItem={setCartItem}/>}

      {success && <Toast setSuccess={setSuccess}/>}


    </div>
  )
}

export default Menu
