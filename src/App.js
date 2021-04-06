import logo from './logo.svg';
import './App.css';
import React from "react";
import data from "./data"
import Products from "./components/Products";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            size: "",
            sort: "",
        };
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
                            <Products products={this.state.products} ></Products>
                        </div>
                        <div className="sidebar">
                            Cart Items
                        </div>
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
