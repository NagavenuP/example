import * as React from 'react';
import { Page } from "react-onsenui";
import { utility } from "../utils/index";
import { connect } from "react-redux";
import './../../assets/scss/signup.scss'
import { user_actions } from "../actions/user_actions";
class SignUp extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    login = () => {
        this.props.Dispatch(user_actions.openLoginScreen('login'))
    }

    signUp = () => {
        console.log('sdfsdfsdf')
        this.props.Dispatch(user_actions.openLoginScreen('signup'))
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