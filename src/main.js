'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
//var browserHistory = require('react-router').browserHistory;
var hashHistory = require('react-router').hashHistory;
var Router = ReactRouter.Router;
var routes = require('./routes');

ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.getElementById('app'));
//ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('app'));