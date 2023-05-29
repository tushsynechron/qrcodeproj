
import {combineReducers} from 'redux';
import language from './reducers/languageReducer';

const rootReducer = combineReducers({
    language,
})

export default rootReducer