import React from "react";
import { Component } from "react";
import productList from "../product/Productlist.json";

export const DataContext = React.createContext();
export class DataProvider extends Component {

    state = {
        products : productList.products,
        cart: []
    };
    
    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !==id
        })
        if(check){
        const data = products.filter(product =>{
            return product._id === id
        })
        this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been already added.")

        }
        
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
                console.log(item.count);
                console.log(item.total);
                item.total = parseFloat(item.price.replace(/,/g, '')) * Number(item.count);
                let x = item.total;
                item.total = x.toString().split('.')[0].length > 3 ? 
                x.toString().substring(0,x.toString().split('.')[0].length-3)
                .replace(/\B(?=(\d{2})+(?!\d))/g, ",") + ","
                 + x.toString().substring(x.toString().split('.')[0].length-3): x.toString();
            }
        })
        this.setState({cart : cart});
    };
    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count = +item.count + +1;
                item.total = parseFloat(item.price.replace(/,/g, '')) * Number(item.count);
                let x = item.total;
                item.total = x.toString().split('.')[0].length > 3 ? 
                x.toString().substring(0,x.toString().split('.')[0].length-3)
                .replace(/\B(?=(\d{2})+(?!\d))/g, ",") + ","
                 + x.toString().substring(x.toString().split('.')[0].length-3): x.toString();
                
            }
        })
        this.setState({cart : cart});
    };

    removeProduct = id =>{
         const {cart} = this.state;
         cart.forEach((item, index) =>{
             if(item._id ===id){
                 cart.splice(index, 1)
             }
         })
         this.setState({cart : cart})
};


render() {
    const {products, cart} = this.state;
    const {addCart, reduction, increase, removeProduct} = this;
    return(
<DataContext.Provider value={{products, addCart, cart, reduction, increase, removeProduct}}>
    {this.props.children}
</DataContext.Provider>
    )
}
}
