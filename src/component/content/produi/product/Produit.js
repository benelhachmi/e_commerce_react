import React from 'react'
import {Link} from 'react-router-dom';
import './product.css'
import { useDispatch } from 'react-redux'

import {addProductToCard} from '../../../../action/actios'
export default function Produit({product}) {
    const dispatch = useDispatch();

    const {
        title,
      
        id,
    } = product;
    return (
        <div className="card h-100 product">
        <Link to={`/products/${id}`} className="product__link"><img
        
            className="card-img-top product__img" src={product.images} alt={product.title} ref={product.imageRef}/>
           
        </Link>
        <div className="card-body product__text">
            <h4 className="card-title product__title">
                <Link to={`/products/${id}`}>{product.title}</Link>
            </h4>
            <h5 className="product__price"></h5>
            <p className="card-text product__description">{product.description}</p>
            <button
                onClick={() =>dispatch(addProductToCard({...product}))}
                className="btn btn-info product__add-to-cart">Add to cart
            </button>
        </div>
    </div>
    )
}
