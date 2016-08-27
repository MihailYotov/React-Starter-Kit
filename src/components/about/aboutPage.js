"use strict";

var React = require('react');
var ReactRouter = require('react-router');

var About = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    //componentDidMount() {
    //    const { route } = this.props;
    //    const { router } = this.context;
    //    router.setRouteLeaveHook(route, this.routerWillLeave)
    //},
    //
    //routerWillLeave: function () {
    //
    //    return 'Are you sure you want to leave this page?';
    //},

    render () {
        return (
            <div>
                <h1 className="jumbotron">About</h1>
            </div>
        );
    }
});

module.exports = About;