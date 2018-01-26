import { IBaseAction } from './index';
class AppActions {
    Constants = {
        OpenSidebar: 'app/sidebar/open',
        CloseSidebar: 'app/sidebar/close',
        ShowLoader: 'app/loader/show',
        HideLoader: 'app/loader/hide',
        GetGpsCoordinates: 'app/gps/update',
        NetworkStatus: 'app/network/status',
        AppType: 'app/type'
    };
    constructor() {
    }

    // constants here (Action Constants are always PascalCase)
    setAppType = (appType: string) => {
        return {
            type: this.Constants.AppType,
            payload: appType
        };
    }
    openSideBar = () => ({
        type: this.Constants.OpenSidebar
    })

    closeSideBar = () => {
        return (dispatch, getState) => {
            // if (getState().App.IsSideBarOpen) {
            dispatch({
                type: this.Constants.CloseSidebar
            });
            // }
        };
    }
    showLoader = (message?) => ({
        type: this.Constants.ShowLoader,
        payload: message
    })
    hideLoader = () => ({
        type: this.Constants.HideLoader
    })
    getGpsCord = (data: any): IBaseAction<{}> => {
        return {
            type: this.Constants.GetGpsCoordinates,
            payload: data
        };
    }
    updateNetworkStatus = (data: any): IBaseAction<{}> => {
        return {
            type: this.Constants.NetworkStatus,
            payload: data
        };
    }


}

export let app_actions = new AppActions();
