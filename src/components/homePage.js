"use strict";

var React = require('react');

var Home = React.createClass({
	render: function () {
		return (
			<div className="jumbotron">
				<h1>Budget Application</h1>
				<p>React with Flux application for handling personal budget</p>
			</div>
		);
	}
});

module.exports = Home;