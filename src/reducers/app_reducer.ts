import { app_actions } from './../actions/app_actions';

const extend = require('lodash/extend');



export interface IAppState {
    IsSideBarOpen?: boolean
}
const initialState: IAppState = {
    IsSideBarOpen: false
};
export function App(state = initialState, { type, payload }:
    { type: string, payload: any }): IAppState {
    switch (type) {
        case 'persist/REHYDRATE': {
            if (payload.App) {
                return extend({}, state, payload.User);
            } else {
                return extend({}, state);
            }
        }
        case app_actions.Constants.OpenSidebar: {
            return extend({}, state, { IsSideBarOpen: true })
        }
        case app_actions.Constants.CloseSidebar: {
            return extend({}, state, { IsSideBarOpen: false })
        }
        default:
            return state;
    }
}
