
export interface IEvents {
    event?: IEvent;
    answer?: IAnswer;
}
export interface IEvent {
    checkList?: Array<ICheckList>;
    createdBy?: number;
    createdDate?: Date;
    description?: string;
    documentVos?: Array<IDocumentVos>;
    endDate?: Date;
    endType?: string;
    eventUpdateType?: string;
    files?: Array<string>;
    vendors?: Array<IVendorAnswer>;
    id?: number;
    modifiedBy?: number;
    modifiedDate?: Date;
    monthlyRepeatType?: string;
    name?: string;
    needGeoLocation?: boolean;
    needVendorDetails?: boolean;
    numberOfOccurences?: number;
    recurenceType?: string;
    repeatEndDate?: Date;
    repeatEvery?: 0;
    roles?: Array<IRoles>;
    start?: Date;
    startDate?: Date;
    weekDays?: Array<string>;
}

export interface IRoles {
    description?: string;
    id?: number;
    name?: string;
    parent?: {
        id?: number;
        name?: string
    };
}
export interface IDocumentVos {
    description?: string;
    fileStatus?: string;
    fsId?: string;
    id?: number;
    name?: string;
    size?: number;
    type?: string;
}

export interface ICheckList {
    id?: number;
    name?: string;
    subTasks?: Array<ISubCheckList>;
}
export interface ISubCheckList {
    id?: number;
    name?: string;
}
export interface IAnswer {
    comment?: string;
    eventId?: number;
    id?: number;
    latitude?: number;
    longitude?: number;
    mobileNumber?: number;
    nameOfAgent?: string;
    numberOfCopiesSold?: number;
    userVo?: {
        email?: string;
        fullName?: string;
        id?: number
    };
    vendorAnswers?: Array<IVendorAnswer>;
}
export interface IVendorAnswer {
    eventId?: number;
    __id?: number;
    type?: string;
    id?: number;
    name?: string;
    phone?: string;
    vendorId?: number;
    uniqId?: number
}
export interface ITasks {
    answer?: boolean;
    id?: number;
    task?: string;
}

// Best practices interface
export interface IDocuments {
    childrens?: Array<IDocuments>;
    documents?: Array<IDocument>;
    id?: number;
    name?: string;
    parent?: {
    };
    roles?: [0];
}

export interface IDocument {
    assetId: number;
    assetType: string;
    createdBy: 0;
    createdDate: Date;
    description: string;
    fileStatus: string;
    fsId: string;
    id: 0;
    modifiedBy: number;
    modifiedByName: string;
    modifiedDate: Date;
    name: string;
    size: number;
    status: string;
    type: string;
}

export interface IEventAssets {
    id?: number;
    createdBy?: number;
    createdDate?: Date;
    modifiedBy?: number;
    modifiedDate?: Date;
    status?: string;
    name?: string;
    fsId?: string;
    description?: string;
    type?: string;
    size?: number;
    fileStatus?: string;
    assetType?: string;
    assetId?: number;
}

export interface IUser {
    email?: string;
    firstName?: string;
    geographies?: any;
    id?: number;
    lastName?: string;
    managerName?: string;
    phone?: string;
    dceuserType?: string;
    role?: {
        id?: number;
        name?: string;
        permissions?: any
    };
    status?: string;
}
