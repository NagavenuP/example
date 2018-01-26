import * as React from 'react';
import { app_config } from './../config/app_config';
import { utility } from './../utils/';
export class BaseComponent<TProps, TState> extends React.Component<TProps, TState> {
    public utility = utility;
    public app_config = app_config;
    constructor(props: TProps) {
        super(props);
    }
}
