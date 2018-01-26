import * as React from 'react';
import { utility } from "../utils/index";
import { connect } from "react-redux";
import { Page } from "react-onsenui";
import Header from './../components/generic/header';
import * as _ from 'lodash'
class Search extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            tabs: [{ value: 'receiver', label: "As Receiver" },
            { value: 'donar', label: 'As Donor' }],
            activeTab: 'receiver',
            receiverData: {}
        }
    }
    changeLabel = (tab) => {
        this.setState({ activeTab: tab.value })
    }
    saveReceiverData = (receiver) => {
        this.setState({ receiverData: receiver })
    }
    receivers = [{ name: 'Arthink', message: 'Blood group B+', distance: '3.5km' },
    { name: 'Team', message: 'Blood group B+', distance: '4.6km' }];
    render() {
        return (
            <Page {...{ pageKey: this.props.pageKey }}
                renderToolbar={() => <Header pageKey={this.props.pageKey} pageTitle='Search Results' />}>
                {!this.state.receiverData
                    &&
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
                        <div>
                            {
                                this.state.activeTab === 'receiver' &&
                                _.map(this.receivers, (receiver: any) => {
                                    return <div key={"receiver" + receiver.name} className='card' onClick={this.saveReceiverData.bind(this, receiver)}>
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
                        <div className='footer'>
                            <button>Clear All</button>
                        </div>
                    </div>
                }

                {this.state.receiverData &&
                    <div>

                    </div>

                }
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