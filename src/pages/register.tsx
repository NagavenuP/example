

import * as React from 'react';
import { connect } from "react-redux";
import { utility } from "../utils/index";
import { Input, Page, Button, Row, Col } from "react-onsenui";
import { custom_navigator } from "../utils/navigator";
import Dashboard from './dashboard';
import './../../assets/scss/register.scss'
import Header from './../components/generic/header'
import { user_actions } from "../actions/user_actions";
//import Search from './searchscreen'
class Register extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }
    doneHandler = () => {
        console.log('sadadadada')
        this.props.Dispatch(user_actions.loginSuccess())
        custom_navigator.pushPage(Dashboard, custom_navigator.pageKeys.dashboard)
    }

    mobileHandler = (e) => {
        if (e.target.value < 11) {
            return;
        }
        let min = 10000;
        let max = 99999;
        let OTP = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log('adasd', (window as any).SMS);
        if ((window as any).SMS) {
            (window as any).SMS.sendSMS(8885932977, OTP, (success) => {
                console.log('sucess', success)
            }, (err) => { console.log('err', err) })
        }
    }
    getPicture = () => {
        if ((navigator as any).camera) {
            (navigator as any).camera.getPicture(
                (success) => {
                    console.log('sssss', success)
                }
                , (err) => {
                    console.log('err', err)
                }
            )
        }
    }
    render() {
        return (

            <Page {...{ pageKey: this.props.pageKey }} {...{ class: 'register' }}
                renderToolbar={() => <Header pageKey={this.props.pageKey} hasBackButton={true} pageTitle='' />}>
                <div className='background'>
                    <div className='file'>
                        <Row>
                            <Col width='90%'>
                                <div className='openfile' onClick={this.getPicture}>

                                </div>
                            </Col>
                            <Col>
                                <div className='icon'>
                                    <span className='icon-cancel'></span>
                                </div>
                            </Col>
                        </Row>



                    </div>
                    <div className='input'>
                        <Input type='text' name='name' placeholder='Name'>
                        </Input>
                        <Input type='text' name='email' placeholder='Email'>
                        </Input>
                        <Input type='text' placeholder='Gender' disabled />
                        <input type='checkbox' name='bloodgroup' />
                        <Input type='number' name='mobile' placeholder='Mobile' {...{ onBlur: this.mobileHandler.bind(this) }}>
                        </Input>
                        <Input type='number' name='pin' placeholder='Enter PIN'>
                        </Input>
                        <Input type='number' name='confirmPin' placeholder='Confirm PIN'>
                        </Input>
                        <Button onClick={this.doneHandler}>
                            Secure Login
                        </Button>
                    </div>
                </div>
            </Page>

        )
    }
}
function mapStateToProps() {
    return {}
}
export default connect(mapStateToProps, utility.mapDispatchToProps)(Register)