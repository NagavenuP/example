import { app_config } from './../config/app_config';
import { utility } from './index';

class Logger {
    info(...params) {
        if (app_config.logLevel === 'info') {
            console.log.apply(console, params);
        }
    }
    debug(...params) {
        if (app_config.logLevel === 'debug') {
            console.log.apply(console, params);
        }
    }
    error(error: Error | any, ...params) {
        if (error.response && error.response.message) {
            // console.log('data');
            utility.alert({ message: error.response.message });
            // console.log('% asdf');
        } else {
            utility.alert({ message: error.message });
        }
        console.error.apply(console, [error].concat(params));
    }
}

export const logger = new Logger();
