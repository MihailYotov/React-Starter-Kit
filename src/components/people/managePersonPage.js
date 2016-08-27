'use strict';

var React = require('react');

var PersonForm = require('./personForm');
var PeopleActions = require('../../actions/peopleActions');
var PeopleStore = require('../../stores/peopleStore/peopleStore');
var toastr = require('toastr');

var ManagePersonPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            person: {
                id: '',
                firstName: '',
                lastName: ''
            },
            errors: {},
            dirty: false
        }
    },

    componentWillMount: function () {
        var personId = this.props.params.id; // From the path '/author/:id'
        if (personId) {
            this.setState({person: PeopleStore.getPersonById(personId)});
        }
    },

    componentDidMount() {
        const { route } = this.props;
        const { router } = this.context;
        router.setRouteLeaveHook(route, this.routerWillLeave)
    },

    routerWillLeave: function () {
        if (this.state.dirty) {
            return 'Leave without saving?';
        }
    },

    setPersonState: function (event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.person[field] = value;
        return this.setState({person: this.state.person});
    },

    authorFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {};

        if (this.state.person.firstName.length < 2) {
            this.state.errors.firstName = 'First name must be at least 2 characters.';
            formIsValid = false;
        }
        if (this.state.person.lastName.length < 2) {
            this.state.errors.lastName = 'Last name must be at least 2 characters.';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    savePerson: function (event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

        if (this.state.person.id) {
            PeopleActions.updatePerson(this.state.person)
        } else {
            PeopleActions.createPerson(this.state.person);
        }

        this.state.dirty = false;
        toastr.success('Person saved');
        this.context.router.push('people')
    },

    render () {
        return (
            <div>
                <h1 className="jumbotron">Manage People</h1>
                <PersonForm
                    person={this.state.person}
                    onChange={this.setPersonState}
                    onSave={this.savePerson}
                    errors={this.state.errors}
                />
            </div>
        );
    }
});

module.exports = ManagePersonPage;