import React, {Component} from 'react';

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id}>
                                    <img src={product.image} alt={product.title}></img>
                                    <h1>{product.title}</h1>
                                </a>
                                {/*<h1 className="description">*/}
                                {/*    {product.description}*/}
                                {/*</h1>*/}
                                <div className="product-price">
                                    <div>
                                       {product.price}
                                       <div className="ILS">ש"ח</div>
                                    </div>
                                    <button className="button primary">
                                        הוסף לעגלה
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

//
// import React, {Component} from 'react';
//
// class Products extends Component {
//     render() {
//         return (
//             <div>
//                 <ul className="products">
//                     {this.props.products.map(product => (
//                         <li key={product._id}>
//                             <div className="product">
//                                 <a href={"#" + product._id}>
//                                     <img src={product.image} alt={product.title}></img>
//                                     <p>
//                                         {product.title}
//                                     </p>
//                                 </a>
//                                 <div className="product-price">
//                                     {/*{product.price}*/}
//                                 </div>
//                                 <button className="button primary">
//                                     Add To Cart
//                                 </button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }
//
// export default Products;
