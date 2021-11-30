import React from "react";
import { Component } from "react";
import {Routes, Route } from "react-router-dom";
import Products from "../product/Product";
import Cart from "../cart/Cart";



export class Section extends Component {
    render() {
        return(
            <section>
                <Routes>
                    <Route path="/" element={<Products/>} exact />
                    <Route path="/cart" element={<Cart/>} />
                </Routes>
            </section>
        )
    }
}

export default Section;