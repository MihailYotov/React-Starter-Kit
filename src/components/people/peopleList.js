'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var PeopleList = React.createClass({
    render () {
        var createPersonRow = function (person) {
            return (
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td><Link to={"/person/" + person.id}>{person.firstName} {person.lastName}</Link></td>
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
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.people.map(createPersonRow, this)}
                    </tbody>
                </table>
            </div>
        );
    },

    propTypes: {
        people: React.PropTypes.array.isRequired
    }
});

module.exports = PeopleList;