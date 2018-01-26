
export interface IConfirmOptions {
    animation?: string;
    buttonLabels?: Array<string>;
    title?: string;
    message?: string;
}

export interface IAlertOptions {
    animation?: string;
    buttonLabel?: string;
    title?: string;
    message?: string;
}
export interface IInputFieldOptions {
    key: string;
    label: string;
    datatype: string;
    inputype: string;
    placeholder: string | number;
    data: [Object];
    isRequired: boolean;
    regEx: string;
    min: number;
    max: number;
    defaultValue: string;
    errorMessage: string;
}

export interface IGoogleResponse {
    profileObj: {
        email: string
        familyName: string
        givenName: string
        googleId: string
        imageUrl: string
        name: string
    };
    tokenId: string;
    tokenObj: {
        access_token: string
        expires_at: number
        expires_in: number
        first_issued_at: number
        id_token: string
        idpId: String
        login_hint: string
        token_type: string
    };
}

export interface IGoogleMobileresponse {
    displayName: string;
    email: string;
    familyName: string;
    givenName: string;
    imageUrl: string;
    userId: string;
}

export interface ILoginApiResponse {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    scope: string;
    jti: string;
    access?: Array<string>;
}

export interface IGPS {
    latitude?: number;
    longitude?: number;
    coordsCreationTime?: Date;
    isGpsEnabled: boolean;
}
