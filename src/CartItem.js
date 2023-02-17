import React from 'react';

const CartItem=(props)=>{
        const { price, title, qty}=props.product;
        const {product,
            onIncreaseQuantity,
            decreaseQuantity,
            deleteQuantity}=props
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image} src={product.img}/>
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price} </div>
                    <div style={{ color: '#777' }}>Qty: {qty} </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/70/70310.png"
                            onClick={() =>onIncreaseQuantity(product)}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/9684/9684927.png"
                            onClick={() => decreaseQuantity(product)}
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/3221/3221897.png"
                            onClick={()=>deleteQuantity(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;