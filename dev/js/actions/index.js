export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const shuffleQuestions = (questions) => {
	return {
		type: 'SHUFFLE_QUESTIONS',
		payload: questions
	}	
};

export const checkAnswer = (qid,answer,questions) => {
  return {
    type: 'CHECK_ANSWER',
    payload: {
      qid:qid,
      answer:answer,
      questions: questions
    }
  }
};

export const selectQuestion = (question) => {
	return {
		type: 'QUESTION_SELECTED',
		payload: question
	}
};