export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
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
}

export const selectQuestion = (question) => {
	console.log("You clicked on question: ",question);
	return {
		type: 'QUESTION_SELECTED',
		payload: question
	}
};