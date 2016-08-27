'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({
    // <Link to="/" className="navbar-brand">
    //     <img src="images/icon.png" alt="img" />
    // </Link>
    render: function () {
        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="people">People</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Header;