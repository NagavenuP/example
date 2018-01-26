import { user_actions } from './../actions/user_actions';

const extend = require('lodash/extend');



export interface ICustomerState {
    UserDetails: any;
    IsOpenLoginScreen?: string
    IsLoggedIn?: boolean
}
const initialState: ICustomerState = {

    IsOpenLoginScreen: '',
    IsLoggedIn: false,
    UserDetails: {}
};
export function User(state = initialState, { type, payload }:
    { type: string, payload: any }): ICustomerState {
    switch (type) {
        case 'persist/REHYDRATE': {
            if (payload.User) {
                return extend({}, state, payload.User);
            } else {
                return extend({}, state);
            }
        }
        case user_actions.Constants.LoginSuccess: {
            return extend({}, state, { IsLoggedIn: true, UserDetails: payload })
        }
        case user_actions.Constants.OpenLoginScreen: {
            return extend({}, state, { IsOpenLoginScreen: payload })
        }
        case user_actions.Constants.LogoutSuccess:

            return extend({}, initialState);
        default:
            return state;
    }
}
