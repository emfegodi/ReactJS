import React from 'react';
import '../styles/Checkout.scss';
const Checkout = () => {
    return (
        <aside className="product-detail">
            <div className="title-container">
                <img src="./icons/flechita.svg" alt="arrow" />
                <p className="title">
                    My order
                </p>
            </div>

            <div className="my-order-content">
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="bike" />
                    </figure>
                    <p>Bike</p>
                    <p>$30,00</p>
                    <img src="./icons/icon_close.png" alt="close" />
                </div>
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="bike" />
                    </figure>
                    <p>Bike</p>
                    <p>$30,00</p>
                    <img src="./icons/icon_close.png" alt="close" />
                </div>
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="bike" />
                    </figure>
                    <p>Bike</p>
                    <p>$30,00</p>
                    <img src="./icons/icon_close.png" alt="close" />
                </div>
                <div className="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="bike" />
                    </figure>
                    <p>Bike</p>
                    <p>$30,00</p>
                    <img src="./icons/icon_close.png" alt="close" />
                </div>

                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$560.00</p>
                </div>
                <button className="primary-button add-to-cart-button">
                    Checkout
                </button>
            </div>                
        </aside>
    );
};

export default Checkout;