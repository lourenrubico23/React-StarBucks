import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/footer/Footer'
import MenuDrinks from './MenuDrinks'
import MenuCoffee from './MenuCoffee'
import MenuFoods from './MenuFoods'
import MenuMerchandise from './MenuMerchandise'

/* State */
const Menu = () => {
    const [menuTab, setMenuTab] = React.useState('drinks')

    const handleChangeMenu = (menu) => {
        setMenuTab(menu)
    }

  return (
    <div>
      <Header/>
    <div className="container">
        <div className="grid grid-cols-[20%_1fr] gap-5 my-20">
            <aside>
                <ul>
                    <li><button onClick={() => handleChangeMenu("drinks")}>Drinks</button></li>
                    <li><button onClick={() => handleChangeMenu("foods")}>Food</button></li>
                    <li><button onClick={() => handleChangeMenu("coffee")}>Coffee</button></li>
                    <li><button onClick={() => handleChangeMenu("merchandise")}>Merchandise</button></li>
                </ul>
            </aside>

            <main>
                <h2>Menu</h2>
                {menuTab === "drinks" && <MenuDrinks/>}
                {menuTab === "coffee" && <MenuCoffee/>}
                {menuTab === "foods" && <MenuFoods/>}
                {menuTab === "merchandise" && <MenuMerchandise/>}
                
                
                
                
            </main>
        </div>
    </div>
        

      <Footer/>
    </div>
  )
}

export default Menu
