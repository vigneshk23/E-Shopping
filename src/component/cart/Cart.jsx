import React from "react";
import { Component } from "react";
import { DataContext } from "../common/Context";
import "../cart/Cart.css"


export class Cart extends Component {
    

static contextType = DataContext;

    render() {
        const {cart, increase, reduction, removeProduct} = this.context;
        return(
            <>
            {
                cart.map(item =>(
                <div className='mainCart'>
                    <div className="cardCart" key={item._id}>
                        <div className='leftboxCart' >
                        <img src={item.src} alt="" className="imagesize"/></div>
                        <div className="rightboxCart">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>₹{item.price}</span>
                            </div>
                            <p>{item.description}</p>
                            <p>{item.content}</p>
                            <div className="amount">
                                <button className="count" onClick={() => reduction(item._id)}><i className="fa fa-minus" aria-hidden="true"></i></button>
                                &nbsp;&nbsp;
                                <span>{item.count}</span>
                                &nbsp;&nbsp;
                                <button className="count" onClick={() => increase(item._id)}><i className="fa fa-plus"></i></button>
                            </div>
                            <br></br>
                                <p>Subtotal : ₹ {item.total}</p>
                            
                            <div className="delete" onClick={()=>removeProduct(item._id)}>
                            <button className='buttonCart'>Remove</button></div>
                        </div>
                        
                    </div>
                    
                </div>
            

                ))
            }
            
       </>
        )
}
}

export default Cart;