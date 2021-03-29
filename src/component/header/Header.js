import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { useSelector} from 'react-redux'

const Header = () => {
    const {cart} = useSelector(state => state)
    console.log(cart)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Ecommerce</NavLink>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2"
                                                                          aria-hidden="true" />Cart {cart.length }</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};




export default Header;


