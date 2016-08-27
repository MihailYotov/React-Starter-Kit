'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var PeopleActions = require('../../actions/peopleActions');
var PeopleStore = require('../../stores/peopleStore/peopleStore');
var PeopleList = require('./peopleList');

var PeoplePage = React.createClass({
    getInitialState (){
        return {
            people: PeopleStore.getAllPeople()
        }
    },

    componentWillMount: function () {
        PeopleStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        PeopleStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({people: PeopleStore.getAllPeople()});
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
            </div>
        );
    }
});

module.exports = PeoplePage;

//<div>
//    <Link to="/" query={{ the: 'query' }} className="btn btn-default">Passing query</Link>
//</div>