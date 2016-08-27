'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var toastr = require('toastr');

var PeopleActions = require('../../actions/peopleActions');

var PeopleList = React.createClass({

    deletePerson: function (id, event) {
        event.preventDefault();
        PeopleActions.deletePerson(id);
        toastr.success('Person Deleted')
    },

    render () {
        var createPersonRow = function (person) {
            return (
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td><Link to={"/person/" + person.id}>{person.firstName} {person.lastName}</Link></td>
                    <td><a href="#" onClick={this.deletePerson.bind(this, person.id)}>Delete</a></td>
                </tr>
            )
        };
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.people.map(createPersonRow, this)}
                    </tbody>
                </table>
            </div>
        );
    },

    propTypes:{
        people:React.PropTypes.array.isRequired
    }
});

module.exports = PeopleList;