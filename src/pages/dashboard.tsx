
import * as React from 'react';
import { utility } from "../utils/index";
import { connect } from "react-redux";
import { Page } from "react-onsenui";
import './../../assets/scss/dashboard.scss'

class Dashboard extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    render() {

        return (
            <Page {...{ pageKey: this.props.pageKey }}>
                <div className='dashboard'>
                    <div className='imageIcon'>
                        <div className='parent'>
                            <div className='child'>
                                <div className='aligbutton'>
                                    <button className='buttonProperties'>
                                        Request For Blood
                                </button>
                                </div>
                                <div className='aligbutton'>
                                    <button className='buttonProperties'>
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