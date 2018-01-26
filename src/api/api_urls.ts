
export const api_urls = {
    Login: '/p/v1/auth/login',
    JsonFormSchema: '/form/data',
    Sync: 'sync',

    fetchCategories: 'catagory/r/fetch/all',
    fetchProducts: (catagoryId) => { return `product/r/fetch-by/role/${catagoryId}/${0}/${10}`; },
    eventsList: 'events/r/se/list',
    submitVendorForm: (eventId) => {
        return `checklist/w/update/${eventId}/`;
    },
    fetchDocuments: 'folder/r/fetch/all/0',
    fetchEventAssets: (assetId) => {
        return `doc/r/get/EVENT/${assetId}`;
    },
    fetchEvent: (eventId) => {
        return `events/r/se/get/${eventId}`;
    },
    fetchPincodes: (type) => {
        return `form-data/r/get/pincodes/${type}`;
    },
    fetchScoreDetails: (type) => {
        return `score/r/overall/${type}`;
    },
    fetchScoreCards: (type) => {
        return `score/r/monts/${type}`;
    },
    SurveyListRangePincode: 'form-data/r/filter/by-percentage/by-pincode',
    fetchUser: 's/v1/users/r/fetch/profile',
    SurveyList: '/form/survey',
    FormSchema: '/form/data',
    fetchDashboardDetails: 'score/r/badgets/all',
    fetchSurveyForms: (name, bool) => {
        return `form/r/get/${name}/${bool}`;
    },
    fetchHistory: (formType, status?) => {
        return `form-data/r/fetch/all/type/${formType}/${status}`;
    },
    fetchFormDataForEdit: (formId, dataId) => `form-data/r/${'latest'}/${dataId}`,
    fetchFormDataForView: (formId, dataId) => `form-data/r/${formId}/${dataId}`,
    submitSurveyData: 'form-data/w/save',
    submitEditData: `form-data/w/update`,
    csvUpload: `s/v1/upload/w/users`
};
