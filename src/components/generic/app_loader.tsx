import * as React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { BaseComponent } from './../../core/base_component';
import { IAppStore } from './../../reducers/index';
import { utility } from './../../utils/index';

function mapStateToProps(store: IAppStore) {
    return {
        ActiveRequests: 0,
        Message: '',
        TimeStamp: new Date().getTime()
    };
}

interface ILoaderProps {
    Dispatch?: Dispatch<Action>;
    ActiveRequests?: number;
    Message?: string;

}
interface ILoaderState {
    Dispatch?: Dispatch<Action>;
    ActiveRequests?: number;
    Message?: string;

}
class Loader extends BaseComponent<ILoaderProps, ILoaderState> {

    render() {
        return (
            <div className='app-loader'>
                {this.props.ActiveRequests > 0 &&
                    <div className='popup' >
                        <div className='mnml-spinner light mx-auto'>
                        </div>
                        <p className='msg'>{this.props.Message}</p>

                    </div>
                }
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    utility.mapDispatchToProps
)(Loader as any);
