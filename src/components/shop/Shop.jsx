import React from 'react'
import Cake1 from '../../assets/images/cake-1.jpeg';
import Cake2 from '../../assets/images/cake-2.jpeg';
import Cake3 from '../../assets/images/cake-3.jpeg';
import Cake4 from '../../assets/images/cake.jpg';
import Cake5 from '../../assets/images/cake-5.jpeg';
import Cake6 from '../../assets/images/cake-6.jpeg';
const Shop = () => {
    const shopItems = [
        {
            id:1,
            image: Cake1,
            name: "Chocolate Cake",
            price: 20
        },
        {
            id:2,
            image: Cake2,
            name: "Chocolate Cake",
            price: 20
        },
        {
            id:3,
            image: Cake3,
            name: "Chocolate Cake",
            price: 20
        },
        {
            id:4,
            image: Cake4,
            name: "Chocolate Cake",
            price: 20
        },
        {
            id:5,
            image: Cake5,
            name: "Chocolate Cake",
            price: 20
        },
        {
            id:6,
            image: Cake6,
            name: "Chocolate Cake",
            price: 20
        }
    ]
  return (
    <section className='shop-section section-padding'>
      <div className="section-title drop-shadow">Shop</div>
      <div className="shop-items">
       {
        shopItems.map((item) => {
            return  <div key={item.id} className="shop-item drop-shadow">
            <img src={item.image} alt="cake" />
            <div className='cake-data'>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
            </div>
        </div>
        })
       }
      </div>
    </section>
  )
}

export default Shop
