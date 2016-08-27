'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var NotFoundPage = React.createClass({

    render () {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p><Link to="/">Back to Home</Link></p>
            </div>
        );
    }

});

module.exports = NotFoundPage;
