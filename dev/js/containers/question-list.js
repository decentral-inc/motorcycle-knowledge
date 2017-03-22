import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {selectUser} from '../actions/index'

class QuestionList extends Component {
	renderList() {
		return this.props.questions.map((q) => {
			return(
				<div key={q.id}>
					<h3>{q.content}</h3>
					<li key={q.answers[0].id}>{q.answers[0]['content']}</li>
					<li key={q.answers[1].id}>{q.answers[1]['content']}</li>
					<li key={q.answers[2].id}>{q.answers[2]['content']}</li>
				</div>
			)
		})
	}
	
	render () {
		return (
			<div>
				{this.renderList()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		questions: state.questions
	}
}

export default connect(mapStateToProps)(QuestionList)