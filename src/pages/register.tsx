import * as React from 'react';
import { connect } from "react-redux";
import { utility } from "../utils/index";
import { Input, Page } from "react-onsenui";
import { custom_navigator } from "../utils/navigator";
import LaunchScreen from './launchscreen'
//import Search from './searchscreen'
class Register extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }
    doneHandler = () => {
        // custom_navigator.pushPage(Search, custom_navigator.pageKeys.searchScreen)
        custom_navigator.pushPage(LaunchScreen, custom_navigator.pageKeys.lauchScreen)
    }
    render() {
        return (
            <Page {...{ pageKey: this.props.pageKey }}>
                <div>
                    <input type='file' name='pic' />
                    <Input type='text' name='name' placeholder='Name'>
                    </Input>
                    <Input type='text' name='email' placeholder='Email'>
                    </Input>
                    <Input type='text' placeholder='Gender' disabled />
                    <input type='checkbox' name='bloodgroup' />
                    <Input type='number' name='mobile' placeholder='Mobile'>
                    </Input>
                    <Input type='number' name='pin' placeholder='Enter PIN'>
                    </Input>
                    <Input type='number' name='confirmPin' placeholder='Confirm PIN'>
                    </Input>
                    <button onClick={this.doneHandler}>Done</button>
                </div>
            </Page>

        )
    }
}
function mapStateToProps() {
    return {}
}
export default connect(mapStateToProps, utility.mapDispatchToProps)(Register)