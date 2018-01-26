export interface IFormSchema {
    _id: string; // we need some unique ID for all forms
    formNo: number; // Will be used to identify the active form
    formTitle: string; // Will be displayed on the form top
    formType: string;
    sections?: Array<ISection>; // We can have n number of sections
    questionDefinitions?: Array<IFormElement>;
}

export interface ISection {
    sectionId?: number; // we need some unique ID for all sections
    sectionName?: string; // Will be displayed on the section card
    sectionNo?: number; // Will be used to identify the active schema
    noOfFields?: number; // What is the total number of fields that are used to caculate the percentage complete of the form
    noOfCompletedFields?: number; // Number of fields completed and used to show percentage complete
    pages?: Array<IPage>; // Each section will have it's own forms
    completed?: number;
    error?: number;
    weightage?: number;
}

export interface ISurveyData {
    _id: string;
    surveyId: string;
    sectionsPercentage: Array<{ sectionId: string, percentage: number }>;
    answer: any;
}
export interface IPage {
    pageId: number; // we need some unique ID for all pages
    pageNo: number; // Will be used to identify the active page
    pageTitle: string; // Will be displayed on the page top
    elements?: Array<IFormElement>; // Form elements. It can be a input element or just a label in the form or a sub form
}

export interface IFormElement {
    name?: string; // DB property name
    qid?: string;
    id?: string;
    linkId?: number | string;
    label?: string; // The label to place with the input
    type?: ElementTypeEnum; // The type of input ("string", "int", "float","enum", "bool","")
    inputType?: InputTypeEnum; // Use this when type is enum. Values are radio / select
    hint?: string; // Used for placeholder for input and as an first option for dropdown
    isReq?: boolean; // Is this input required
    isValid?: boolean; //Is the input valid or not
    isEditable?: boolean;
    regEx?: string; // Regular expression for string input
    min?: number; // Minimum valid input (int, float)
    max?: number; // Maximum valid input (int, float)
    mongo_key?: string;
    subSectionName?: string; // When a single form has multiple sections like User Details, Address Etc.
    default?: string; // The default value for the prompt, type matches the type
    error?: string; // Message to show to user (usually after failing validation)
    vals?: Array<IOptionsSchema>; // The valid choices (enum)
    uc?: boolean; // Should the input be uppercased as the user enters (string)
    control?: any; // Name of boolean input that controls this input. Ex: Ask another question when select yes for a yes/no question
    controlAns?: string; //Answer used to show the controlled input
    subElements?: Array<IFormElement>; // child forms Ex: Add dependant
    subFormAns?: string; // Used to hide or show the sub form
    isInc?: boolean; // Can user add multiple forms of same type by plus button in UI
    subFormsmin?: number; // Min sub forms requried Ex: 2 dependant are required for insurance
    subFormsmax?: number; // Max sub forms allowed Ex: Max 3 dependants are allowed for insurance
    subForms?: Array<IFormElement>;
    weightage?: string;
    groupType?: number;
}

export interface IOptionsSchema {
    label: string; // Used to display in UI for drop down
    value?: string; // Used to send the value to Backend. If not provide then label will be sent.
}

export enum ElementTypeEnum {
    String,
    Enum,
    Boolean,
    date,
    DateTime,
    TextArea,
    Number,
    Decimal
}
export enum InputTypeEnum {
    Checkbox,
    Radio,
    Select,
    date,
    Text,
    subForms,
    Label,
    Conditional,
    SubLabel
}
export enum GroupTypeEnum {
    NAME = 1,
    ADDRESS = 2,
    PINCODE = 3,
    INSTITUTEPOINTOFCONTACT = 5,
    PHONE = 6,
    AGE = 7,
    SEPARATOR = 8,
    OTHER = 9

}
export enum MultiChoiceElementEnum {
    SingleChoice,
    MultipleChoice
}
