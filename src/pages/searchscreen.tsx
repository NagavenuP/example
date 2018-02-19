import * as React from 'react';
import { utility } from "../utils/index";
import { connect } from "react-redux";
import { Page } from "react-onsenui";
import Header from './../components/generic/header';
import * as _ from 'lodash';
import './../../assets/scss/notifications.scss';
import SelectedReceiver from './../components/user/selectedreceiver'
class Search extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            tabs: [{ value: 'receiver', label: "As Receiver" },
            { value: 'donar', label: 'Rejected' }],
            activeTab: 'receiver',
            receiverData: {},
            selectedReceiver: {}
        }
    }
    changeLabel = (tab) => {
        this.setState({ activeTab: tab.value })
    }
    saveReceiverData = (receiver) => {
        this.setState({ receiverData: receiver })
    }
    selectedUser = (receiver) => {
        this.setState({ selectedReceiver: receiver })
    }
    receivers = [{ name: 'Arthink', message: 'Blood group B+', distance: '3.5km' },
    { name: 'Team', message: 'Blood group B+', distance: '4.6km' }];
    render() {
        return (
            <Page {...{ pageKey: this.props.pageKey }}
                renderToolbar={() => <Header pageKey={this.props.pageKey} pageTitle='Search Results' />}>
                {
                    <div className='notifications'>
                        <div className='event-navigation'>
                            {
                                _.map(this.state.tabs, (tab: any, index) => {
                                    return (
                                        <div key={'tab_' + tab.label + index}
                                            className={tab.value === this.state.activeTab ? 'list_tab active' : 'list_tab'}
                                            onClick={this.changeLabel.bind(this, tab)}>
                                            <p>{tab.label}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div>
                            {
                                this.state.activeTab === 'receiver' &&
                                _.map(this.receivers, (receiver: any) => {
                                    return <div key={'search_' + receiver.name} onClick={this.selectedUser.bind(this, receiver)} className='card'>
                                        <div className='nameIcon'>{receiver.name[0]}</div>
                                        <div className='name'>
                                            <div>{receiver.name}</div>
                                            <div>{receiver.message}</div>
                                        </div>
                                        <div>
                                            <div>BIcon</div>
                                            <div>{receiver.distance}</div>
                                        </div>
                                        <div className='icon'>icon</div>
                                    </div>
                                })
                            }
                        </div>
                        {
                            this.state.selectedReceiver.length &&
                            <SelectedReceiver selectedReceiver={this.state.SelectedReceiver}>
                            </SelectedReceiver>

                        }
                        <div className='footer'>
                            <div className='button'>Clear All</div>
                        </div>
                    </div>
                }

                {this.state.receiverData &&
                    <div>

                    </div>

                }
            </Page >
        )
    }
}

function mapStateToProps() {
    return {

    }
}
export default connect(mapStateToProps, utility.mapDispatchToProps)(Search)