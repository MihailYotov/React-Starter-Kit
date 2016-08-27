global.$ = global.jQuery = require('jquery');

var React = require('react');
var Header = require('./common/header');

var App = React.createClass({
    render () {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = App;