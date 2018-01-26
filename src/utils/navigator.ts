import { app_actions } from '../actions/app_actions';
import { app_config } from './../config/app_config';
import { store } from './../store/index';
import { utility } from './index';
import _ from './lodash';

class CustomNavigator {
    pageKeys = {
        dashboard: 'dashboard',
        login: 'login',
        signUp: 'signUp',
        register: 'register',
        notifications: 'notifications',
        lauchScreen: 'lauchscreen',
        searchScreen: 'searchscreen'
    };
    constructor() {
        this.activeRoute = this._landingPage = this.pageKeys.dashboard;

        this.prevRoute = '';
        this._pagesStack = [this._landingPage];
    }
    activeRoute: string;
    prevRoute: string;
    _landingPage: string;
    _pagesStack: Array<string>;
    pushPage = (component: any, key: string, params?: { [key: string]: any }) => {
        if (this.activeRoute === key) {
            // user is trying to navigate to active page. so deny
            return store.dispatch(app_actions.closeSideBar());
        }
        if (this._landingPage === key) {
            // User is trying to redirect to landing page. So clear all the pages in stack
            utility.navigator.routes = utility.navigator.pages = [];
            this.activeRoute = this._landingPage = this.pageKeys.dashboard;
            this.prevRoute = '';
            this._pagesStack = [];
        }
        let isPageInRoute = _.find(utility.navigator.routes, { key: key });
        let isPageInPages = _.find(utility.navigator.pages, { key: key });
        if (isPageInRoute) {
            this.prevRoute = this.activeRoute;
            this.activeRoute = key;
            this._pagesStack.push(key);
            utility.navigator.routes = _.without(utility.navigator.routes, isPageInRoute);
            utility.navigator.pages = _.without(utility.navigator.pages, isPageInPages);
            utility.navigator.pushPage({
                component: isPageInRoute.component,
                key: isPageInRoute.key,
                pageKey: isPageInRoute.key,
                params: params,
                navigator: utility.navigator
            }, { animation: app_config.pageAnimation });
            setTimeout(() => {
                store.dispatch(app_actions.closeSideBar());
            }, 500);
            return;
        } else {
            this.prevRoute = this.activeRoute;
            this.activeRoute = key;
            this._pagesStack.push(key);
            utility.navigator.pushPage(
                {
                    component: component,
                    key: key,
                    pageKey: key,
                    params: params,
                    navigator: utility.navigator
                }, { animation: app_config.pageAnimation });
            setTimeout(() => {
                store.dispatch(app_actions.closeSideBar());
            }, 500);
            return;
        }
    }

    // popPage = () => {
    //     this._pagesStack.pop();
    //     this.prevRoute = _.nth(this._pagesStack, -2) || '';
    //     this.activeRoute = _.nth(this._pagesStack, -1);
    //     utility.navigator.popPage();
    popPage = (e?) => {
        if ((window as any).isAlertOrConfirmOpen) {
            return;

        }
        // if (store.getState().App.IsSideBarOpen) {
        //     store.dispatch(app_actions.closeSideBar());
        // }
        if (this._pagesStack.length > 1) {
            this._pagesStack.pop();
            this.prevRoute = _.nth(this._pagesStack, -2) || '';
            this.activeRoute = _.nth(this._pagesStack, -1);
            utility.navigator.popPage();
        } else {
            // from onsen UI
            if (Object.hasOwnProperty.call(navigator, 'app')) {
                if (window.confirm('You want to exit App?')) {
                    window['plugins'].googleplus.disconnect(
                        (msg) => {
                            alert('d' + msg);
                        },
                        (err) => {
                            alert('d' + err);
                        }
                    );
                    navigator['app'].exitApp();
                }
                // utility.confirm({
                //     title: 'You want to exit App?'
                // }, (ans) => {
                //     if (ans === 1) {
                //         navigator['app'].exitApp();
                //     }
                // });

            } else {
                console.warn('Could not close the app. Is \'cordova.js\' included?\nError: \'window.navigator.app\' is undefined.');
            }
        }

    }
}

export const custom_navigator = new CustomNavigator();
