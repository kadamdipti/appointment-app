import { React } from "react";

//import {Details} from './components/Details';
//import { BrowserRouter, Route ,Link } from 'react-router-dom';

var ReactDOM=require('react-dom');
var Timeslot = require('./components/timeslot').default;
//var Details = require('./components/Details').default;

ReactDOM.render(<Timeslot />, document.getElementById('app'));
