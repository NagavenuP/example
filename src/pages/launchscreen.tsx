import * as React from 'react';
import { Page } from "react-onsenui";
import { utility } from "../utils/index";
import { connect } from "react-redux";
import * as _ from 'lodash';
import './../../assets/scss/notifications.scss';

import Header from './../components/generic/header';
//const AnyReactComponent = ({ text }) => <div>{text}</div>;
// import MyGreatPlace from './my_great_place';

class LaunchScreen extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                { value: 'search', label: "Search" },
                { value: 'profile', label: "Profile" },
                { value: 'message', label: "Message" }
            ],
            activeTab: 'profile'
        }
    }
    static defaultProps = {
        center: [59.938043, 30.337157],
        zoom: 9,
        greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
    };
    changeLabel = (tab) => {
        this.setState({ activeTab: tab.value })
    }
    render() {
        return (
            <Page {...{ pageKey: this.props.pageKey }}
                renderToolbar={() => <Header pageKey={this.props.pageKey} pageTitle='' />}>

                <div className='notifications'>
                    <div className='event-navigation'>
                        {
                            _.map(this.state.tabs, (tab: any) => {
                                return (
                                    <div key={'tab_' + tab.label}
                                        className={tab.value === this.state.activeTab ? 'list_tab active' : 'list_tab'}
                                        onClick={this.changeLabel.bind(this, tab)}>
                                        <p>{tab.label}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

            </Page>
        )
    }
}

function mapStateToProps() {
    return {

    }
}
export default connect(mapStateToProps, utility.mapDispatchToProps)(LaunchScreen)