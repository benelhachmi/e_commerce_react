import React from 'react'
import Menu from './menu/Menu'
import ProduitList from './produi/ProduitList'
export default function Content() {
    return (
        <React.Fragment>
        <div className="container" style={{paddingTop: '6rem'}} >
            <div className="row" >
            <Menu/>
            <ProduitList/>
            </div>
        </div>
    </React.Fragment>
     
    )
}
