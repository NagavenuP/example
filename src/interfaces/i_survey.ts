export interface ISurveyData {
    formId?: string;
    dataId: any;
    formType: string;
    _id?: string;
    id: number;
    name: string;
    answer: any;
    __completedFieldsWeightage?: any;
    __completedFields?: any;
    __errors?: any;
    surveyDate: any;
    surveyStatus: string;
    __reqFields?: object;
    __mode: string;
    __editedAnswer?: any;
    __isSaved: boolean;
    data: any;
    section1?: number;
    section2?: number;
    section3?: number;

}
export interface IScoreDetails {
    score?: number;
    coverage?: number;
    target?: number;
    actual?: number;
    avgCompletionScore?: number;
    month?: string;

}
export interface ISurveyState {
    List: Array<any>;
    UpdateAns?: any;
    ChildControlType?: string;
    UserAddress: any;
    SurveyData: ISurveyData;
    ChildPrevData: any;
    ChildConditionalId: any;
    OptionId: number;
    ActiveSubForm: any;
    ActiveFamilyIndex: any;
    SavedAnswers: any;
    pincodes?: Array<number>;
    scoreDetails?: IScoreDetails;
    scoreCards: { household: Array<IScoreDetails>; institutional: Array<IScoreDetails> };
}
