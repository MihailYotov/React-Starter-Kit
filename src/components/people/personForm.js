'use strict';

var React = require('react');

var Input = require('../common/textInput');

var PersonForm = React.createClass({
    render () {
        return (

            <form>

                <Input
                    name="firstName"
                    label="First Name"
                    value={this.props.person.firstName}
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName}
                     />

                <Input
                    name="lastName"
                    label="Last Name"
                    value={this.props.person.lastName}
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName}
                     />

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    },

    propTypes: {
        person: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSave: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    }
});

module.exports = PersonForm;