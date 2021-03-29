import React from 'react'
import {connect} from 'react-redux'
import './produis.css'
import { useSelector} from 'react-redux'

import Produit from '../produi/product/Produit'
  function ProduitList() {
    const {computers} = useSelector(state => state)

    return (
        


        
        <div className="col-lg-9">
        <div className="row mb-3">
            <div className="col-12 d-none d-lg-block d-xl-block">
                <div className="card ">
                    <div className="card-header d-flex justify-content-end">
                        <span className="mr-3">Change Layout: </span>
                       
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            {computers.map(product => (
                <div  className="col-lg-4 col-md-6 mb-4">
            <Produit  key={product.id} product={product}/>
           </div>
            ))}
                </div>
        <div className="d-flex justify-content-end">
          
           
        </div>
    </div>
    )
}


export default ProduitList;
