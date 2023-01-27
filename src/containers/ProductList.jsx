import React from 'react';
import '@styles/ProductList.scss';
import icon from '@icons/bt_add_to_cart.svg';
const ProductList = () => {
    return (
        <section className="main-container">
            <div className="cards-container">
                <div className="product-card">
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="" />
                    <div className="product-info">
                        <div>
                            <p>$120,00</p>
                            <p>Bike</p>
                        </div>
                        <figure>
                            <img src={icon} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductList;