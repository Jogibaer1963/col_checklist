import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from "react-router-dom";


import './main.html'


const App = (
    <div>
        Checklist
    </div>
);

const routes = (
    <BrowserRouter>
        <div>

        </div>
    </BrowserRouter>


);

Meteor.startup(() => {

   ReactDOM.render(App, document.getElementById('root'))

});