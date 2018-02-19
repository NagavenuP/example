
import * as React from 'react';
import { utility } from "../utils/index";
import { connect } from "react-redux";
import { Page } from "react-onsenui";
import './../../assets/scss/dashboard.scss'
import { custom_navigator } from "../utils/navigator";
import LaunchScreen from './launchscreen';
import Header from './../components/generic/header'
class Dashboard extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }

    clickHandler = () => {
        custom_navigator.pushPage(LaunchScreen, custom_navigator.pageKeys.lauchScreen)
    }
    render() {
        return (
            <Page {...{ pageKey: this.props.pageKey }}
                renderToolbar={() => <Header></Header>} >
                <div className='dashboard'>
                    <div className='imageIcon'>
                        <div className='parent'>
                            <div className='child'>
                                <div className='aligbutton'>
                                    <button className='buttonProperties' onClick={this.clickHandler}>
                                        Request For Blood
                                </button>
                                </div>
                                <div className='aligbutton'>
                                    <button className='buttonProperties' onClick={this.clickHandler}>
                                        As Blood Donor
                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Page >
        )

    }
}

function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps, utility.mapDispatchToProps)(Dashboard as any)