import * as React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
// import { app_actions } from '../actions/app_actions';
import { BaseComponent } from '../core/base_component';
import { IAppStore } from '../reducers/index';
import { utility } from '../utils/index';
import './../../assets/scss/login.scss'
import { Input, Page } from "react-onsenui";
import { user_actions } from "../actions/user_actions";
import Header from './../components/generic/header'
interface ILoginProps {
    Dispatch?: Dispatch<Action>;
    User?: IUserState;
    Access: Array<string>;
    IsLoggedIn?: boolean;
    pageKey?: string;

}
interface IUserState {
    IsLoggedIn: boolean;
    AuthToken: string;
    isNetworkError: boolean;
    error: string;
}
interface ILoginState {
    email?: any;
    password?: any;
    errors?: {
        emailError?: string,
        passwordError?: string,
        loginstatusError?: string
    };
    isFetching?: boolean;
}
class Login extends BaseComponent<ILoginProps, ILoginState>  {

    constructor(ILoginProps) {
        super(ILoginProps);
        this.state = {
            isFetching: false,
            email: '',
            errors: {
                emailError: '',
                loginstatusError: '',
                passwordError: ''
            },
            password: ''
        };
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.login = this.login.bind(this);
    }
    email = '';
    password = '';

    Email = 'Nagavenu';
    Password = 'abc@123'

    emailChangeHandler(e: any): void {
        this.email = e.target.value;
    }
    passwordChangeHandler(e: any): void {
        this.password = e.target.value;
    }

    login = (cb?: any) => {
        // let emailformat = '';
        if (this.email === '') {
            console.log('asdasdadad')
            this.state.errors.emailError = 'UserName is required.'
            // this.state.errors.emailError = 'UserName is required.';
        } else {
            this.state.errors.emailError = '';
        }
        if (this.password === '') {
            this.state.errors.passwordError = 'Password is required'
            //   this.state.errors.passwordError = 'Password is required';
        } else {
            this.state.errors.passwordError = '';
        }
        if (this.password === this.Password && this.email === this.Email) {
            this.props.Dispatch(user_actions.loginSuccess({ 'email': this.email, 'password': this.password }))
            //custom_navigator.pushPage(Dashboard, custom_navigator.pageKeys.dashboard)
        }
        console.log('state', this.state)
        this.setState({})
    }
    render(): JSX.Element {

        return (
            <Page  {...{ pageKey: this.props.pageKey }}
                renderToolbar={() => <Header pageKey={this.props.pageKey} hasBackButton={true} pageTitle='' />}>
                <div className='login'>
                    {/*logo*/}
                    <div className='loginbackground'>
                        {/*login*/}
                        <div className='parent'>
                            <div className='child'>
                                <div className='input'>
                                    <Input {...{ class: 'inputfield' }}
                                        placeholder=''
                                        {...{ onBlur: this.emailChangeHandler }}
                                        type='email'

                                    />
                                    <div className='validation_error'>{this.state.errors.emailError}</div>
                                    <Input {...{ class: 'inputfield' }}
                                        {...{ onBlur: this.passwordChangeHandler }}
                                        placeholder=''
                                        type='password'
                                    />
                                    <div className='validation_error'>{this.state.errors.passwordError}</div>

                                    <div className='logindiv'>
                                        <div className='forgetPassword'>Forgot Access?</div>
                                        <button className='allowme' onClick={this.login}>Allow Me!</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div >
            </Page>

        );
    }
}
function mapStateToProps(store: IAppStore) {

    return {
        IsLoggedIn: store.User.IsLoggedIn,

    };
}
export default connect(mapStateToProps, utility.mapDispatchToProps)(Login);
