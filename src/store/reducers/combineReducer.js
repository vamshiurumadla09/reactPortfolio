import {combineReducers} from 'redux';
import header from './headerReducer';
import skills from './skillReducer';
import projects from './projectsReducer';

const reducer = combineReducers({header:header, skills:skills, projects:projects,});
export default reducer;