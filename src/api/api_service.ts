import axios, { AxiosRequestConfig } from 'axios';
import { app_actions } from '../actions/app_actions';
import { store } from '../store/index';
import { logger } from '../utils/logger';
import { user_actions } from './../actions/user_actions';
import { app_config } from './../config/app_config';
import { AppConstants } from './../utils/constants';
import { utility } from './../utils/index';
const clone = require('lodash/clone');
const extend = require('lodash/extend');
const map = require('lodash/map');
const md5 = require('md5');
import { api_urls } from './api_urls';
class Server {
    api_urls = api_urls;
    axiosOptions: AxiosRequestConfig = {
        timeout: 60000,
        transformRequest: [this.transformRequest]
    };
    ContentHeaders = {
        Json: 'application/json',
        FormData: 'multipart/form-data',
        Plain: 'text/plain'
    };
    BaseDomain = {
        Users: process.env.USERS_DOMAIN,
        Events: process.env.EVENTS_DOMAIN,
        Assets: process.env.ASSETS_DOMAIN,
        Dce: process.env.DCE_DOMAIN
    };
    constructor() {
        axios.interceptors.response.use((response) => {
            store.dispatch(app_actions.hideLoader());
            if (response.data && response.data.status > 300) {
                utility.alert({ message: response.data.message });
                response.data = null;
                return response;
            }

            return response;
        }, (error) => {

            // if (error.response) {
            //     // The request was made and the server responded with a status code
            //     // that falls out of the range of 2xx

            // } else if (error.request) {
            //     // The request was made but no response was received
            //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            //     // http.ClientRequest in node.js
            // } else {
            //     // Something happened in setting up the request that triggered an Error
            // }
            store.dispatch(app_actions.hideLoader());

            if (error.response && error.response.status === 401) {
                // Just redirect to login page
                if (app_config.ENV === 'development') {
                    logger.info('It looks like you have logged in at some other place or your session has been expired');
                    store.dispatch(user_actions.logout());
                }
            }
            return new Promise((resolve, reject) => {
                if (error.response) {
                    logger.error(error.response);
                    reject(error.response.data);
                } else {
                    if (error.message === 'timeout of 60000ms exceeded') {
                        error.message = 'Request timed out. Please try again';
                    } else if (error.message === 'Network Error') {
                        if (navigator.onLine) {
                            error.message = 'Server is down. Please try again after some time';
                        } else {
                            error.message = 'You are currently in offline mode. Please re-check your internet connection and try again';
                        }
                    }
                    logger.error(error);
                    reject(error);
                }
            });
        });

    }

    transformRequest(data: any) {
        try {
            data = JSON.parse(data);
            let temp = clone(data);
            map(data, (value, key) => {
                if (key && key.indexOf('__') > -1) {
                    delete temp[key];
                }
            });
            return JSON.stringify(temp);
        } catch (e) {
            return data;
        }
    }
    generateSignuaturekey(payLoad) {
        let authorization = 'Bearer';

        // if (!(isEmpty(store.getState().User.Auth.AccessToken))) {
        //     authorization += ' ' + store.getState().User.Auth.AccessToken;
        // }
        let signaturekey = authorization + AppConstants.DCE_APP_SIGNATURE_SECRET_KEY + AppConstants.DCE_APP_NONCE;

        signaturekey += typeof payLoad === 'string' ? this.transformRequest(payLoad) : JSON.stringify(this.transformRequest(payLoad));
        return md5(signaturekey);
    }
    getHeadersByType(headerType, domain: string, customHeaders?: any, payLoad?: any): any {
        let data = {};

        switch (headerType) {
            case api_service.ContentHeaders.Json: {
                data['Content-Type'] = 'application/json';
                break;
            }
            case api_service.ContentHeaders.Plain: {
                data['Content-Type'] = 'text/plain';
                break;
            }
            case api_service.ContentHeaders.FormData: {
                data['Content-Type'] = 'multipart/form-data';
                break;
            }
            default:
                data['Content-Type'] = 'application/json';
                break;
        }
        if ((domain).indexOf(api_service.BaseDomain.Dce) !== -1) {

            data['signature'] = this.generateSignuaturekey(payLoad);
            data['nonce'] = AppConstants.DCE_APP_NONCE;
            data['Accept'] = 'application/json';
        }
        // data['Authorization'] = 'Bearer ' + store.getState().User.Auth.AccessToken;
        data['DCEAccess'] = app_config.isWeb ? 'DCEWEB' : 'DCEAPP';
        data = extend({}, data, customHeaders);
        return data;
    }
    post = (data: {
        endPoint: string;
        payLoad?: any;
        domain?: string;
        headerType?: string;
        customHeaders?: any;
        showLoader?: boolean;
    }) => {
        if (!data.domain) {
            data.domain = api_service.BaseDomain.Users;
        }
        if (!data.headerType) {
            data.headerType = api_service.ContentHeaders.Json;
        }
        /* variable Declaration */

        if (data.headerType !== api_service.ContentHeaders.FormData) {
            data.payLoad = JSON.stringify(data.payLoad);
        }
        if (data.showLoader !== false) {
            data.showLoader = true;
        }
        if (data.showLoader) {
            store.dispatch(app_actions.showLoader());
        }

        return axios.post(data.endPoint,
            data.payLoad, {
                timeout: this.axiosOptions.timeout,
                transformRequest: this.axiosOptions.transformRequest,
                baseURL: data.domain,
                headers: this.getHeadersByType(data.headerType, data.domain, data.customHeaders, data.payLoad)
            });

    }

    put = (data: {
        endPoint: string;
        payLoad?: any;
        domain?: string;
        id?: string;
        headerType?: string;
        customHeaders?: any;
        showLoader?: boolean;
    }) => {
        if (!data.domain) {
            data.domain = api_service.BaseDomain.Users;
        }
        if (!data.headerType) {
            data.headerType = api_service.ContentHeaders.Json;
        }
        if (data.headerType !== api_service.ContentHeaders.FormData) {
            data.payLoad = JSON.stringify(data.payLoad);
        }
        if (data.showLoader !== false) {
            data.showLoader = true;
        }
        if (data.showLoader) {
            store.dispatch(app_actions.showLoader());
        }

        return axios.put(data.endPoint,
            data.payLoad, {
                timeout: this.axiosOptions.timeout,
                transformRequest: this.axiosOptions.transformRequest,
                baseURL: data.domain,
                headers: this.getHeadersByType(data.headerType, data.domain, data.customHeaders)
            });
    }

    delete = (data: {
        endPoint: string;
        payLoad?: any;
        domain?: string;
        id?: string;
        headerType?: string;
        customHeaders?: any;
        showLoader?: boolean
    }) => {
        if (!data.domain) {
            data.domain = api_service.BaseDomain.Users;
        }
        if (!data.headerType) {
            data.headerType = api_service.ContentHeaders.Json;
        }

        if (data.showLoader !== false) {
            data.showLoader = true;
        }
        if (data.showLoader) {
            store.dispatch(app_actions.showLoader());
        }
        return axios.delete(data.endPoint, {
            baseURL: data.domain,
            headers: this.getHeadersByType(data.headerType, data.domain, data.customHeaders)
        });
    }

    get = (data: {
        endPoint: string;
        payLoad?: any;
        domain?: string;
        id?: string;
        headerType?: string;
        customHeaders?: any;
        showLoader?: boolean;
    }) => {
        if (!data.domain) {
            data.domain = api_service.BaseDomain.Users;
        }
        if (!data.headerType) {
            data.headerType = api_service.ContentHeaders.Json;
        }
        if (data.showLoader) {
            store.dispatch(app_actions.showLoader());
        }
        return axios.get(data.endPoint, {
            baseURL: data.domain,
            timeout: this.axiosOptions.timeout,
            params: data.payLoad,
            headers: this.getHeadersByType(data.headerType, data.domain, data.customHeaders)
        });
    }

}
export const api_service = new Server();
