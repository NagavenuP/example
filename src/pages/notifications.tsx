import * as React from 'react';
import { Page } from "react-onsenui";
import { utility } from "../utils/index";
import { connect } from "react-redux";
import Header from './../components/generic/header';
import * as _ from 'lodash'
import './../../assets/scss/notifications.scss'
class Notifications extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            tabs: [{ value: 'receiver', label: "As Receiver" },
            { value: 'donar', label: 'As Donor' }],
            activeTab: 'receiver'
        }
    }
    clearAll = () => {
        this.receivers = [];
        this.setState({})
    }
    changeLabel = (tab) => {
        this.setState({ activeTab: tab.value })
    }
    receivers = [{ name: 'Arthink', message: 'Arthink is requesting for blood. the details...' },
    { name: 'Team', message: 'Greetig for joining us to spread positivity' }]
    render() {
        return (
            <Page {...{ pageKey: this.props.pageKey }}
                renderToolbar={() => <Header pageKey={this.props.pageKey} pageTitle='Notifications' />}>
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
                            _.map(this.receivers, (receiver) => {
                                return <div key={"receiver" + receiver.name} className='card'>
                                    <div className='nameIcon'>{receiver.name[0]}</div>
                                    <div className='name'>
                                        <div>{receiver.name}</div>
                                        <div>{receiver.message}</div>
                                    </div>
                                    <div className='icon'>icon</div>
                                </div>
                            })
                        }
                    </div>
                    <div className='footer' onClick={this.clearAll}>
                        <div className='button'>Clear All</div>
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
export default connect(mapStateToProps, utility.mapDispatchToProps)(Notifications)
