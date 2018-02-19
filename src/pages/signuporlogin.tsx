import * as React from 'react';
import { Page } from "react-onsenui";
import { utility } from "../utils/index";
import { connect } from "react-redux";
import './../../assets/scss/signup.scss'
import { custom_navigator } from "../utils/navigator";
import Login from './login';
import Register from './register'
class SignUp extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    login = () => {
        custom_navigator.pushPage(Login, custom_navigator.pageKeys.login)
        //  this.props.Dispatch(user_actions.openLoginScreen('login'))
    }

    signUp = () => {
        custom_navigator.pushPage(Register, custom_navigator.pageKeys.register)
        //this.props.Dispatch(user_actions.openLoginScreen('signup'))
    }
    render() {
        return (
            <Page {...{ pageKey: this.props.pageKey }}>
                <div className='signUp'>
                    <div className='imageIcon'>
                        <div className='icons'>
                            <div className='bloodIcon'></div>
                            <div className='handIcon'></div>
                            <div className='text'>Donate Blood.Save Life</div>
                        </div>

                        <div className='innerDiv'>
                            <div className='parent'>
                                <div className='child'>
                                    <button className='buttonProperties' onClick={this.signUp}>
                                        Signup
                            </button>

                                    <button className='buttonProperties' onClick={this.login}>
                                        Login
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        )
    }
}
function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps, utility.mapDispatchToProps)(SignUp)