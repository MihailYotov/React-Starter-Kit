'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;

var App = require('./components/app');
var HomePage = require('./components/homePage');
var AboutPage = require('./components/about/aboutPage');
var PeoplePage = require('./components/people/peoplePage');
var ManagePersonPage = require('./components/people/managePersonPage');
var PageNotFound = require('./components/pageNotFound');

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="people" component={PeoplePage}/>
        <Route path="person" component={ManagePersonPage}/>
        <Route path="person/:id" component={ManagePersonPage}/>
        <Route path="about" component={AboutPage}/>
        <Redirect from="about-us" to="about"/>
        <Redirect from="about/*" to="about"/>
        <Route path="/*" component={PageNotFound}/>
    </Route>
);

module.exports = routes;


