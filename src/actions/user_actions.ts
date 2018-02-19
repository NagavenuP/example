import { IBaseAction } from './index';
class UserActions {
    Constants = {
        LoginSuccess: 'user/login/success',
        LogoutSuccess: 'user/logout/success',
        FormSchemaSuccess: '/form/data',
        UserDetails: 'user/success',
        DashboardPageDetails: 'dashboard/page/details',
        SaveAddress: 'save/user/address',
        OpenLoginScreen: 'open/login/screen'
    };
    constructor() {
    }

    // constants here (Action Constants are always PascalCase)
    loginSuccess = (data?: any) => {
        return {
            type: this.Constants.LoginSuccess,
            payload: data
        };
    }


    logout = () => ({
        type: this.Constants.LogoutSuccess
    })
    loginUserDetails = (data: any): IBaseAction<{}> => {
        return {
            type: this.Constants.UserDetails,
            payload: data
        };
    }
    openLoginScreen = (data) => {
        return {
            type: this.Constants.OpenLoginScreen,
            payload: data
        }
    }

}

export let user_actions = new UserActions();
