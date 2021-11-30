import React from "react";
import { Component } from "react";
import "./Header.css";
import CartIcon from "../image/cart-70-128.gif";
import {Link} from "react-router-dom";
import {DataContext} from "../common/Context"

export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return(
<header>
    
    <div className="logo" >
        <h2><Link to="/">APPLE STORE</Link></h2>
    </div>
    <nav>
        <ul className={toggle ? "toggle" : ""}>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/">Product</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li> <div className="nav-cart">
                    <span>{cart.length}</span>
                     <Link to="/Cart"> <img src={CartIcon} alt="" width="30" />Cart</Link></div>
            </li>
        </ul>
       
    </nav>
    
</header>
        )
        }
        }


export default Header;