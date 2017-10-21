(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
(function () {
	'use strict';

	var Game = React.createClass({
		displayName: "Game",


		render: function () {
			return React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "col-md-8" },
					React.createElement(
						"h3",
						null,
						"Crossword"
					),
					React.createElement(Puzzle, null)
				),
				React.createElement(
					"div",
					{ className: "col-md-4" },
					React.createElement(
						"h2",
						null,
						"Clues"
					),
					React.createElement(Clues, { data: this.props.data })
				)
			);
		}
	});

	var Clues = React.createClass({
		displayName: "Clues",

		render: function () {
			var statements = this.props.data.map(function (clues) {
				return React.createElement(Output, { clue: clues.clue });
			});
			return React.createElement(
				"div",
				{ className: "clueList" },
				statements
			);
		}
	});

	var tdStyles = {
		backgroundColor: 'black'
	};

	var Puzzle = React.createClass({
		displayName: "Puzzle",

		render: function () {
			var fs = require('fs');
			return eval(fs.readFileSync("table.txt", "utf8"));
		},

		handleChange: function (e) {
			var fs = require('fs');
			var data = eval("{" + fs.readFileSync("ref.txt", "utf8") + "}");
		}
	});

	var Output = React.createClass({
		displayName: "Output",

		render: function () {
			return React.createElement(
				"div",
				{ className: "clues" },
				React.createElement(
					"p",
					null,
					this.props.clue
				)
			);
		}
	});
	var fs = require('fs');
	var data = fs.readFileSync("data.txt", "utf8");

	ReactDOM.render(React.createElement(Game, { data: data }), document.getElementById('game'));
})();

},{"fs":1}]},{},[2]);
