import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import QuestionList from '../containers/question-list';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


require('../../scss/style.scss');

const App = () => (
    <MuiThemeProvider>
        <QuestionList />
    </MuiThemeProvider>
    
);

export default App;
