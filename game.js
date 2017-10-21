(function() {
	'use strict';

	var Game = React.createClass({

    		render: function() {
    			return (
    			  <div className="row">
    			    <div className="col-md-8">
    				  <h3>Crossword</h3>
    				  <Puzzle />
    				</div>
    				<div className="col-md-4">
    				  <h2>Clues</h2>
    				  <Clues data={this.props.data} />
    				</div>
    			  </div>
    			);
    		}
    	});

	var Clues = React.createClass({
		render: function() {
			var statements = this.props.data.map(function(clues) {
				return (
				  <Output clue={clues.clue}></Output>
				);
			});
			return (
			  <div className="clueList">
			  {statements}
			  </div>
			);
		}
	});

	var tdStyles = {
		backgroundColor: 'black'
	};

	var Puzzle = React.createClass({
		render: function() {
		    var fs = require('fs');
			return (
			  eval(fs.readFileSync("table.txt", "utf8"))
			);
		},

		handleChange: function(e) {
		    var fs = require('fs');
			var data = eval("{"+fs.readFileSync("ref.txt", "utf8")+"}");
		}
	});

	var Output = React.createClass({
		render: function() {
			return (
			  <div className="clues">
				<p>{this.props.clue}</p>
			  </div>
			);
		}
	});
	var fs = require('fs');
	var data = fs.readFileSync("data.txt", "utf8");

	ReactDOM.render(<Game data={data} />, document.getElementById('game'));
})();