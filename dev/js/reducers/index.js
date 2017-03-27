import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import AlphaTestQuestions from './reducer-test-alpha'
import BetaTestQuestions from './reducer-test-beta';
import ShuffleQuestions from './reducer-shuffle-questions';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    questions: AlphaTestQuestions,
    shuffleQuestions: ShuffleQuestions
});

export default allReducers
