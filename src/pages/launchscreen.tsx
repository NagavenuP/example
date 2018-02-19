import * as React from 'react';
import { Page } from "react-onsenui";
import { utility } from "../utils/index";
import { connect } from "react-redux";
import * as _ from 'lodash';
import './../../assets/scss/launchscreen.scss';

import Header from './../components/generic/header';
import GoogleMap from 'google-map-react';
import { MapContainer } from './../components/user/googlemap'


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
    changeLabel = (tab) => {
        this.setState({ activeTab: tab.value })
    }

    render() {
        return (
            <Page {...{ pageKey: this.props.pageKey }}
                renderToolbar={() => <Header pageKey={this.props.pageKey} pageTitle='' />}>
                {/*<GoogleApiWrapper />*/}
                <footer>
                    <div className='launchscreen'>
                        <GoogleMap
                            //  apiKey={} // set if you need stats etc ...
                            center={[59.938043, 30.337157]}
                            zoom={9}>
                            <MapContainer lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
                            <MapContainer {...{ lat: 59.724465, lng: 30.080121 }} text={'B'} /* road circle */ />
                        </GoogleMap>
                        <div className='botomtoolbar'>
                            {
                                _.map(this.state.tabs, (tab: any) => {
                                    return (
                                        <div key={'tab_' + tab.label}
                                            className={tab.value === this.state.activeTab ? 'list_tab active' : 'list_tab'}
                                            onClick={this.changeLabel.bind(this, tab)}>
                                            <div>{tab.label}</div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </footer>
            </Page>
        )
    }
}

function mapStateToProps() {
    return {

    }
}
export default connect(mapStateToProps, utility.mapDispatchToProps)(LaunchScreen)