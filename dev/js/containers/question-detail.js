import React, {Component} from 'react';
import {connect} from 'react-redux';

class QuestionDetail extends Component {
	render() {
		if (!this.props.user) {
			return (<div> Select a user ...</div>);
		}
		return (
			<div>
				<h4>{this.props.q.prompt}</h4>
				
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state
}
export default connect(mapStateToProps)(QuestionDetail)