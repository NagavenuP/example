class AppConfig {
    ENV: string;
    pageAnimation: string;
    syncInterval: number;
    appVersion: string;
    offlineInterval: number;
    logLevel: string;
    isWeb: boolean;
    time: any;
    saveAns: any;

    constructor() {
        this.ENV = process.env.NODE_ENV;
        this.appVersion = process.env.APP_VERSION;
        this.isWeb = JSON.parse(process.env.IS_WEB);
        this.pageAnimation = 'simpleslide';
        this.syncInterval = 60000;
        this.offlineInterval = 90000;
    }
}

export const app_config = new AppConfig();
