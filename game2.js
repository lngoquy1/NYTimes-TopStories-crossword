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

			return (
			  <table className='puzzle'>
              <tr className='row0'>
              <td className='cell cell0'><input type='text' ref='answer0000' placeholder='1' maxLength='1' onChange={this.handleChange} /></td>
              <td className='cell cell1'><input type='text' ref='answer0001' placeholder='2' maxLength='1' onChange={this.handleChange} /></td>
              <td className='cell cell2'><input type='text' ref='answer0002' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell3'><input type='text' ref='answer0003' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell4'><input type='text' ref='answer0004' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell5'><input type='text' ref='answer0005' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell6'><input type='text' ref='answer0006' placeholder='3' maxLength='1' onChange={this.handleChange} /></td>
              <td className='cell cell7'><input type='text' ref='answer0007' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell8' style={tdStyles}></td>
              <td className='cell cell9' style={tdStyles}></td>
              <td className='cell cell10' style={tdStyles}></td>
              <td className='cell cell11' style={tdStyles}></td>
              <td className='cell cell12' style={tdStyles}></td>
              </tr>
              <tr className='row1'>
              <td className='cell cell0' style={tdStyles}></td>
              <td className='cell cell1'><input type='text' ref='answer0101' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell2' style={tdStyles}></td>
              <td className='cell cell3' style={tdStyles}></td>
              <td className='cell cell4' style={tdStyles}></td>
              <td className='cell cell5' style={tdStyles}></td>
              <td className='cell cell6'><input type='text' ref='answer0106' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell7' style={tdStyles}></td>
              <td className='cell cell8' style={tdStyles}></td>
              <td className='cell cell9' style={tdStyles}></td>
              <td className='cell cell10' style={tdStyles}></td>
              <td className='cell cell11' style={tdStyles}></td>
              <td className='cell cell12' style={tdStyles}></td>
              </tr>
              <tr className='row2'>
              <td className='cell cell0' style={tdStyles}></td>
              <td className='cell cell1'><input type='text' ref='answer0201' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell2' style={tdStyles}></td>
              <td className='cell cell3' style={tdStyles}></td>
              <td className='cell cell4' style={tdStyles}></td>
              <td className='cell cell5' style={tdStyles}></td>
              <td className='cell cell6'><input type='text' ref='answer0206' placeholder='6' maxLength='1' onChange={this.handleChange} /></td>
              <td className='cell cell7'><input type='text' ref='answer0207' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell8'><input type='text' ref='answer0208' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell9'><input type='text' ref='answer0209' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell10'><input type='text' ref='answer0210' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell11' style={tdStyles}></td>
              <td className='cell cell12' style={tdStyles}></td>
              </tr>
              <tr className='row3'>
              <td className='cell cell0' style={tdStyles}></td>
              <td className='cell cell1'><input type='text' ref='answer0301' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell2' style={tdStyles}></td>
              <td className='cell cell3'><input type='text' ref='answer0303' placeholder='4' maxLength='1' onChange={this.handleChange} /></td>
              <td className='cell cell4' style={tdStyles}></td>
              <td className='cell cell5' style={tdStyles}></td>
              <td className='cell cell6'><input type='text' ref='answer0306' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell7' style={tdStyles}></td>
              <td className='cell cell8' style={tdStyles}></td>
              <td className='cell cell9' style={tdStyles}></td>
              <td className='cell cell10' style={tdStyles}></td>
              <td className='cell cell11' style={tdStyles}></td>
              <td className='cell cell12' style={tdStyles}></td>
              </tr>
              <tr className='row4'>
              <td className='cell cell0' style={tdStyles}></td>
              <td className='cell cell1'><input type='text' ref='answer0401' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell2' style={tdStyles}></td>
              <td className='cell cell3'><input type='text' ref='answer0403' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell4' style={tdStyles}></td>
              <td className='cell cell5' style={tdStyles}></td>
              <td className='cell cell6'><input type='text' ref='answer0406' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell7' style={tdStyles}></td>
              <td className='cell cell8' style={tdStyles}></td>
              <td className='cell cell9' style={tdStyles}></td>
              <td className='cell cell10' style={tdStyles}></td>
              <td className='cell cell11' style={tdStyles}></td>
              <td className='cell cell12' style={tdStyles}></td>
              </tr>
              <tr className='row5'>
              <td className='cell cell0' style={tdStyles}></td>
              <td className='cell cell1' style={tdStyles}></td>
              <td className='cell cell2'><input type='text' ref='answer0502' placeholder='5' maxLength='1' onChange={this.handleChange} /></td>
              <td className='cell cell3'><input type='text' ref='answer0503' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell4'><input type='text' ref='answer0504' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell5'><input type='text' ref='answer0505' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell6'><input type='text' ref='answer0506' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell7'><input type='text' ref='answer0507' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell8'><input type='text' ref='answer0508' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell9' style={tdStyles}></td>
              <td className='cell cell10' style={tdStyles}></td>
              <td className='cell cell11' style={tdStyles}></td>
              <td className='cell cell12' style={tdStyles}></td>
              </tr>
              <tr className='row6'>
              <td className='cell cell0' style={tdStyles}></td>
              <td className='cell cell1' style={tdStyles}></td>
              <td className='cell cell2' style={tdStyles}></td>
              <td className='cell cell3'><input type='text' ref='answer0603' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell4' style={tdStyles}></td>
              <td className='cell cell5' style={tdStyles}></td>
              <td className='cell cell6'><input type='text' ref='answer0606' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell7' style={tdStyles}></td>
              <td className='cell cell8' style={tdStyles}></td>
              <td className='cell cell9' style={tdStyles}></td>
              <td className='cell cell10' style={tdStyles}></td>
              <td className='cell cell11' style={tdStyles}></td>
              <td className='cell cell12' style={tdStyles}></td>
              </tr>
              <tr className='row7'>
              <td className='cell cell0' style={tdStyles}></td>
              <td className='cell cell1' style={tdStyles}></td>
              <td className='cell cell2' style={tdStyles}></td>
              <td className='cell cell3'><input type='text' ref='answer0703' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell4' style={tdStyles}></td>
              <td className='cell cell5' style={tdStyles}></td>
              <td className='cell cell6'><input type='text' ref='answer0706' placeholder='8' maxLength='1' onChange={this.handleChange} /></td>
              <td className='cell cell7'><input type='text' ref='answer0707' placeholder='9' maxLength='1' onChange={this.handleChange} /></td>
              <td className='cell cell8'><input type='text' ref='answer0708' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell9'><input type='text' ref='answer0709' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell10'><input type='text' ref='answer0710' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell11' style={tdStyles}></td>
              <td className='cell cell12' style={tdStyles}></td>
              </tr>
              <tr className='row8'>
              <td className='cell cell0' style={tdStyles}></td>
              <td className='cell cell1' style={tdStyles}></td>
              <td className='cell cell2' style={tdStyles}></td>
              <td className='cell cell3' style={tdStyles}></td>
              <td className='cell cell4' style={tdStyles}></td>
              <td className='cell cell5' style={tdStyles}></td>
              <td className='cell cell6' style={tdStyles}></td>
              <td className='cell cell7'><input type='text' ref='answer0807' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell8' style={tdStyles}></td>
              <td className='cell cell9' style={tdStyles}></td>
              <td className='cell cell10' style={tdStyles}></td>
              <td className='cell cell11' style={tdStyles}></td>
              <td className='cell cell12' style={tdStyles}></td>
              </tr>
              <tr className='row9'>
              <td className='cell cell0' style={tdStyles}></td>
              <td className='cell cell1'><input type='text' ref='answer0901' placeholder='7' maxLength='1' onChange={this.handleChange} /></td>
              <td className='cell cell2'><input type='text' ref='answer0902' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell3'><input type='text' ref='answer0903' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell4'><input type='text' ref='answer0904' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell5'><input type='text' ref='answer0905' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell6'><input type='text' ref='answer0906' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell7'><input type='text' ref='answer0907' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell8'><input type='text' ref='answer0908' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell9' style={tdStyles}></td>
              <td className='cell cell10' style={tdStyles}></td>
              <td className='cell cell11' style={tdStyles}></td>
              <td className='cell cell12' style={tdStyles}></td>
              </tr>
              <tr className='row10'>
              <td className='cell cell0' style={tdStyles}></td>
              <td className='cell cell1' style={tdStyles}></td>
              <td className='cell cell2' style={tdStyles}></td>
              <td className='cell cell3' style={tdStyles}></td>
              <td className='cell cell4' style={tdStyles}></td>
              <td className='cell cell5' style={tdStyles}></td>
              <td className='cell cell6' style={tdStyles}></td>
              <td className='cell cell7'><input type='text' ref='answer1007' maxLength='1' onChange={this.handleChange}/></td>
              <td className='cell cell8' style={tdStyles}></td>
              <td className='cell cell9' style={tdStyles}></td>
              <td className='cell cell10' style={tdStyles}></td>
              <td className='cell cell11' style={tdStyles}></td>
              <td className='cell cell12' style={tdStyles}></td>
              </tr>
              <tr className='row11'>
              <td className='cell cell0' style={tdStyles}></td>
              <td className='cell cell1' style={tdStyles}></td>
              <td className='cell cell2' style={tdStyles}></td>
              <td className='cell cell3' style={tdStyles}></td>
              <td className='cell cell4' style={tdStyles}></td>
              <td className='cell cell5' style={tdStyles}></td>
              <td className='cell cell6' style={tdStyles}></td>
              <td className='cell cell7' style={tdStyles}></td>
              <td className='cell cell8' style={tdStyles}></td>
              <td className='cell cell9' style={tdStyles}></td>
              <td className='cell cell10' style={tdStyles}></td>
              <td className='cell cell11' style={tdStyles}></td>
              <td className='cell cell12' style={tdStyles}></td>
              </tr>
              <tr className='row12'>
              <td className='cell cell0' style={tdStyles}></td>
              <td className='cell cell1' style={tdStyles}></td>
              <td className='cell cell2' style={tdStyles}></td>
              <td className='cell cell3' style={tdStyles}></td>
              <td className='cell cell4' style={tdStyles}></td>
              <td className='cell cell5' style={tdStyles}></td>
              <td className='cell cell6' style={tdStyles}></td>
              <td className='cell cell7' style={tdStyles}></td>
              <td className='cell cell8' style={tdStyles}></td>
              <td className='cell cell9' style={tdStyles}></td>
              <td className='cell cell10' style={tdStyles}></td>
              <td className='cell cell11' style={tdStyles}></td>
              <td className='cell cell12' style={tdStyles}></td>
              </tr>
              </table>
			);
		},

		handleChange: function(e) {

			var data = {
			answer0000: ReactDOM.findDOMNode(this.refs.answer0000).value,
            answer0001: ReactDOM.findDOMNode(this.refs.answer0001).value,
            answer0002: ReactDOM.findDOMNode(this.refs.answer0002).value,
            answer0003: ReactDOM.findDOMNode(this.refs.answer0003).value,
            answer0004: ReactDOM.findDOMNode(this.refs.answer0004).value,
            answer0005: ReactDOM.findDOMNode(this.refs.answer0005).value,
            answer0006: ReactDOM.findDOMNode(this.refs.answer0006).value,
            answer0007: ReactDOM.findDOMNode(this.refs.answer0007).value,
            answer0101: ReactDOM.findDOMNode(this.refs.answer0101).value,
            answer0106: ReactDOM.findDOMNode(this.refs.answer0106).value,
            answer0201: ReactDOM.findDOMNode(this.refs.answer0201).value,
            answer0206: ReactDOM.findDOMNode(this.refs.answer0206).value,
            answer0207: ReactDOM.findDOMNode(this.refs.answer0207).value,
            answer0208: ReactDOM.findDOMNode(this.refs.answer0208).value,
            answer0209: ReactDOM.findDOMNode(this.refs.answer0209).value,
            answer0210: ReactDOM.findDOMNode(this.refs.answer0210).value,
            answer0301: ReactDOM.findDOMNode(this.refs.answer0301).value,
            answer0303: ReactDOM.findDOMNode(this.refs.answer0303).value,
            answer0306: ReactDOM.findDOMNode(this.refs.answer0306).value,
            answer0401: ReactDOM.findDOMNode(this.refs.answer0401).value,
            answer0403: ReactDOM.findDOMNode(this.refs.answer0403).value,
            answer0406: ReactDOM.findDOMNode(this.refs.answer0406).value,
            answer0502: ReactDOM.findDOMNode(this.refs.answer0502).value,
            answer0503: ReactDOM.findDOMNode(this.refs.answer0503).value,
            answer0504: ReactDOM.findDOMNode(this.refs.answer0504).value,
            answer0505: ReactDOM.findDOMNode(this.refs.answer0505).value,
            answer0506: ReactDOM.findDOMNode(this.refs.answer0506).value,
            answer0507: ReactDOM.findDOMNode(this.refs.answer0507).value,
            answer0508: ReactDOM.findDOMNode(this.refs.answer0508).value,
            answer0603: ReactDOM.findDOMNode(this.refs.answer0603).value,
            answer0606: ReactDOM.findDOMNode(this.refs.answer0606).value,
            answer0703: ReactDOM.findDOMNode(this.refs.answer0703).value,
            answer0706: ReactDOM.findDOMNode(this.refs.answer0706).value,
            answer0707: ReactDOM.findDOMNode(this.refs.answer0707).value,
            answer0708: ReactDOM.findDOMNode(this.refs.answer0708).value,
            answer0709: ReactDOM.findDOMNode(this.refs.answer0709).value,
            answer0710: ReactDOM.findDOMNode(this.refs.answer0710).value,
            answer0807: ReactDOM.findDOMNode(this.refs.answer0807).value,
            answer0901: ReactDOM.findDOMNode(this.refs.answer0901).value,
            answer0902: ReactDOM.findDOMNode(this.refs.answer0902).value,
            answer0903: ReactDOM.findDOMNode(this.refs.answer0903).value,
            answer0904: ReactDOM.findDOMNode(this.refs.answer0904).value,
            answer0905: ReactDOM.findDOMNode(this.refs.answer0905).value,
            answer0906: ReactDOM.findDOMNode(this.refs.answer0906).value,
            answer0907: ReactDOM.findDOMNode(this.refs.answer0907).value,
            answer0908: ReactDOM.findDOMNode(this.refs.answer0908).value,
            answer1007: ReactDOM.findDOMNode(this.refs.answer1007).value
			};
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
	var data = [{"answer": "Iran", "imageUrl": "https://giphy.com/embed/3xz2Bw2ySOky2D1dcY", "clue": "President Trump has promised sweeping changes to health care , immigration , the ____ deal and trade . Heres a look at where things stand now ."}, {"answer": "Dunking", "imageUrl": "https://giphy.com/embed/l1ugbeslLAMfnPjA4", "clue": "_______ has a long and ritualized tradition and a formal name popularly known as intinction ."}, {"answer": "Ethicist", "imageUrl": "https://giphy.com/embed/UyOz2HMMJ5gDC", "clue": "The magazines ________ columnist on balancing competing rights to happiness and why motives matter when seeking to punish others for wrongdoing ."}, {"answer": "Iran", "imageUrl": "https://giphy.com/embed/3xz2Bw2ySOky2D1dcY", "clue": "_________ Trump said he would seek Congress to define trigger points , that could prompt the United States to reimpose sanctions on Iran if violated ."}, {"answer": "Pinochet", "imageUrl": "https://giphy.com/embed/l4KiccbkgGEN3n3LW", "clue": "An exhibition at the Museum of Memory and Human Rights in ________ displays once-secret documents that describe covert operations and intelligence gathering on the Pinochet dictatorship ."}, {"answer": "Trump", "imageUrl": "https://giphy.com/embed/hPPx8yk3Bmqys", "clue": "Some lawmakers want to fund the payments to insurers that President _____ is cutting off , while the president says Democrats should negotiate with him ."}, {"answer": "Iowas", "imageUrl": "https://giphy.com/embed/piO5cp4Ui0i4w", "clue": "_____ status as a swing state in presidential elections may be in doubt . One key reason : Its economy can not support enough college graduates . Thats bad news for Democrats ."}, {"answer": "Times", "imageUrl": "https://giphy.com/embed/xpPLaEYLy637O", "clue": "In this weeks episode , Charlie Spiering , a White House correspondent for Breitbart ____ , spoke to The Times about how he does his job , what he makes of the controversy surrounding his employer and more ."}, {"answer": "Americas", "imageUrl": "https://giphy.com/embed/aO1Gfzk79BNOo", "clue": "Proposed mines near the Boundary Waters have become the latest front in the fight over who gets to profit from ________ natural resources ."}, {"answer": "Hayes", "imageUrl": "https://giphy.com/embed/l4FGjptKjdVYTcSZi", "clue": "Selected by ________ Hayes ."}, {"answer": "Trump", "imageUrl": "https://giphy.com/embed/hPPx8yk3Bmqys", "clue": "President _____ cut off subsidies to cover insurance costs for low-income people , and some health care stocks fell . He cheered ."}];

	ReactDOM.render(<Game data={data} />, document.getElementById('game'));
})();