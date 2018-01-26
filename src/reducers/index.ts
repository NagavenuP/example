import { combineReducers } from 'redux';
import { ISurveyState } from './../interfaces/i_survey';

import { ICustomerState, User } from './user_reducer';
import { IAppState, App } from './app_reducer'
export interface IAppStore {
    User: ICustomerState;
    App: IAppState;
    Survey: ISurveyState;
}
const Reducer = combineReducers({
    User: User as any,
    App: App as any
});
export default Reducer;
