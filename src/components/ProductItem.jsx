import React, {useState} from 'react';
import '@styles/ProductItem.scss';
import icon from '@icons/bt_add_to_cart.svg';


const ProductItem = () => {
    const[cart, setCart] = useState([]);

    const handleClick = () => {
        setCart([]);
    }
    return (
        <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""/>
                <div class="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure onClick = {handleClick}>
                        <img src={icon} alt=""/>
                    </figure>
                </div>
        </div>
    );
};

export default ProductItem;