import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {shuffleQuestions} from '../actions/index'
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
	renderButton () {
		return (
			<span>
			<button onClick={() => this.props.shuffleQuestions(this.props.questions)}>
					Shuffle
			</button>
			{this.renderList()}
			</span>
		)
	}
	
	render () {
		return (
			<div>
				{this.renderButton()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		questions: state.questions
	}
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({shuffleQuestions: shuffleQuestions}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(QuestionList)