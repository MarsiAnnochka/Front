import './App.css'
import Home from './Home'
import Register from './Register'
import Authorize from './Authorize'
import Template from './Template'
import Catalog from './Catalog'
import React from 'react'
import { Redirect, Router, Switch, Route } from 'react-router-dom'


const App = () => (
    <main>
                <Route exact path="/:path" component={Template}/>
                <Route exact path="/auth" component={Authorize}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/catalog" component={Catalog}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/home" render={function(){
                    const response = fetch('/home')
                }}/>
    </main>
)


export default App;
