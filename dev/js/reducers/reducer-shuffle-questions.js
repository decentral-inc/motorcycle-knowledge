import _ from 'underscore';
export default function (state =null, action) {
	switch (action.type) {
		case 'SHUFFLE_QUESTIONS':
			return _.shuffle(action.payload) 
	}
	return state;
}