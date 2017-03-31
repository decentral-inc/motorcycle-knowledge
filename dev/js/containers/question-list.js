import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {shuffleQuestions} from '../actions/index'
import ListItem from 'material-ui/List/ListItem';

import List from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
    overflowY: 'auto'
}

class QuestionList extends Component {
	checkAnswer(ans) {
    console.log("checking: ",ans)
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
								leftCheckbox={
			              <Checkbox 
			                  checked={q.answers[0].correct} 
			                  onCheck={() => this.checkAnswer(q.answers[0])}
			              />
			          }
								key={q.answers[0].id}          
								primaryText={q.answers[0].content} 
							/>
							<ListItem
								leftCheckbox={
			              <Checkbox 
			                  checked={q.answers[1].correct} 
			                  onCheck={() => this.checkAnswer(q.answers[1])}
			              />
			          }
								key={q.answers[1].id}        
								primaryText={q.answers[1].content} 
							/>
							<ListItem
								leftCheckbox={
			              <Checkbox 
			                  checked={q.answers[2].correct} 
			                  onCheck={() => this.checkAnswer(q.answers[2])}
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
			<div>
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
    return bindActionCreators({shuffleQuestions: shuffleQuestions}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(QuestionList)