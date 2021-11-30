import React from "react";
import { Component } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { DataContext } from "../common/Context";


export class Products extends Component {

    static contextType = DataContext;
    
    render() {
        
       
        const {products} = this.context;
        return(
            <div id="product">
                {
                    products.map(product =>(
                        <div className="card" key={product._id}>
                            <div  className="leftbox">
                                    <img src={product.src} alt=""/>
                            </div>
                            <div className="rightbox">
                                <h3>
                                    <Link to={"/product/₹{ ._id}"}>{product.title}</Link>
                                </h3>
                                <span className="price">₹{product.price}</span>
                                <ul>
                                <li className="description">{product.description1}</li>
                                <li className="description">{product.description2}</li>
                                <li className="description">{product.description3}</li>
                                </ul>
                                <span >{product.rating} <i className="fa fa-star" aria-hidden="true"> rating</i></span>
                                <br></br>
                                <button className="leftboxbtn" onClick={()=> this.context.addCart(product._id)}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            )
    }
}
export default Products;