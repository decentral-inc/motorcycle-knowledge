import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {shuffleQuestions} from '../actions/index';
import {checkAnswer} from '../actions/index';
import ListItem from 'material-ui/List/ListItem';
import UnCheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import CheckedIcon from 'material-ui/svg-icons/toggle/check-box'

import List from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
    overflowY: 'auto'
}


class QuestionList extends Component {
	handleCompleteStyle(correct) {
		if (typeof correct === 'undefined'){
			return
		}
    if(!correct){
      return {color: "red", textDecoration: "line-through"};
    }else {
    	return {color: "green"};
    }
  }

	renderList() {
		if (this.props.questions !== null) {
			return this.props.questions.map(q => {
				return(
					<div key={q.id}>
						<Card>
						<CardHeader
				      title={q.content}
				      titleStyle={{'fontSize':'20px', 'fontWeight':'bold'}}
      				titleColor={'darkgrey'}
				    />
						<List>
							<ListItem
								style={this.handleCompleteStyle(q.answers[0].correct)}
								leftCheckbox={
			              <Checkbox 
			                  checked={q.answers[0].correct} 
			                  onCheck={() => this.props.checkAnswer(q.id,q.answers[0],
			                  	this.props.questions)}
			              />
			          }
								key={q.answers[0].id}          
								primaryText={q.answers[0].content} 
							/>
							<ListItem
								style={this.handleCompleteStyle(q.answers[1].correct)}
								leftCheckbox={
			              <Checkbox 
			                  checked={q.answers[1].correct} 
			                  onCheck={() => this.props.checkAnswer(q.id,q.answers[1],this.props.questions)}/*q.id,q.answers[1].id*/
			              />
			          }
								key={q.answers[1].id}        
								primaryText={q.answers[1].content} 
							/>
							<ListItem
								style={this.handleCompleteStyle(q.answers[2].correct)}
								leftCheckbox={
			              <Checkbox 
			                  checked={q.answers[2].correct} 
			                  onCheck={() => this.props.checkAnswer(q.id,q.answers[2],this.props.questions)}
			              />
			          }
								key={q.answers[2].id}       
								primaryText={q.answers[2].content} 
							/>
						</List>
						</Card>
					</div>
				)
			})
		}
		
	}
	renderButton () {
		return (
			<div>
			<button onClick={() => this.props.shuffleQuestions(this.props.questions)}>
					Shuffle
			</button>
			</div>
		)
	}
	
	render () {
		return (
			<div className="quiz-page">
				{this.renderButton()}
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
function matchDispatchToProps(dispatch){
    return bindActionCreators({
    	checkAnswer: checkAnswer,
    	shuffleQuestions: shuffleQuestions
    }, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(QuestionList)