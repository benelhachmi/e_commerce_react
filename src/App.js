import Header from './component/header/Header'
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {createStore } from 'redux';
import {Provider} from 'react-redux';


import Content from './component/content/Content';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import reducer from './reducer/reducer';

export const  store = createStore(reducer);

function App() {
  return (
    
    <Provider store={store}>
    <BrowserRouter>
    <React.Fragment>
        <Header/>
        <Switch>
            <Route exact path={'/'} render={() => {
                return <Redirect to={'/products'}/>
            }}/>
            <Route exact path={'/products'} component={Content}/>
          
        </Switch>
        
    </React.Fragment>
    </BrowserRouter>
</Provider>
  );
}

export default App;
