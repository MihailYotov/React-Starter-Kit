'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var PeopleApi = require('../../api/peopleApi');
var PeopleList = require('./peopleList');

var PeoplePage = React.createClass({
    getInitialState (){
        return {
            people: []
        }
    },

    componentDidMount (){
        if (this.isMounted()) {
            this.setState({people: PeopleApi.getAllPeople()})
        }
    },

    render () {
        return (
            <div>
                <h1 className="jumbotron">People</h1>
                <div>
                    <Link to="person" className="btn btn-default">Add Person</Link>
                </div>
                <div>
                    <PeopleList people={this.state.people}></PeopleList>
                </div>
                <div>
                    <Link to="/" query={{ the: 'query' }} className="btn btn-default">Butn</Link>
                </div>
            </div>
        );
    }
});

module.exports = PeoplePage;