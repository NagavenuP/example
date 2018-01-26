interface IParam {
    [key: string]: string | number | boolean;
}

interface IRoute {
    navigator: any;
    key: string;
    params: IParam;
    component: any;
    pageKey: any;
}
