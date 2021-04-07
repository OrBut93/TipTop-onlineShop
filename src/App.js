import './App.css';
import React from "react";
import data from "./data"
import Products from "./components/Products";
import Filter from "./components/Filter";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            category: "",
        };
    }

    filterProducts = (event) => {
        console.log(event.target.value);
        if (event.target.value == "All") {
            this.setState({

                category: event.target.value,
                products: data.products

            })
        } else {
            this.setState({
                category: event.target.value,
                products: data.products.filter(product => product.category == event.target.value)
            })
        }
    }

    render() {
        return (
            <div className="grid-container">
                <header>
                    <a href="/">TipTop Shop</a>
                </header>
                <main>
                    <div className="content">
                        <div className="main">
                            <div className="Home_title">מוצרים חדשים</div>
                            <Filter count={this.state.products.length}
                                    sort={this.state.sort}
                                    filterProducts={this.filterProducts}
                            ></Filter>
                            <Products products={this.state.products}></Products>
                        </div>
                        {/*<div className="sidebar">*/}
                        {/*    Cart Items*/}
                        {/*</div>*/}
                    </div>
                </main>
                <footer>
                    Footer
                </footer>
            </div>
        );
    }

}


export default App;
