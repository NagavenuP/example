import * as React from 'react';
import { Toolbar, ToolbarButton } from 'react-onsenui';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { app_actions } from '../../actions/app_actions';
import { custom_navigator } from '../../utils/navigator';
import { BaseComponent } from './../../core/base_component';
import { IAppStore } from './../../reducers/index';
import { utility } from './../../utils/index';
function mapStateToProps(store: IAppStore, props: IHeaderProps) {
    return {

    };
}

interface IHeaderProps {
    Dispatch?: Dispatch<Action>;
    IsLoggedIn?: boolean;
    pageTitle?: string;
    pageKey?: string;
    hasBackButton?: boolean;
    onBackButton?: () => void;
    onSave?: () => void;
    Mode?: string;
    SurveyStatus?: string;

}
interface IHeaderState {

}
class Header extends BaseComponent<IHeaderProps, IHeaderState> {
    constructor(props?: IHeaderProps) {
        super(props);

    }
    openSideBar = () => {
        this.props.Dispatch(app_actions.openSideBar());
    }
    popPage = (e?) => {
        if (custom_navigator.activeRoute === this.props.pageKey) {
            if (this.props.onBackButton) {
                this.props.onBackButton();
            } else {
                custom_navigator.popPage();
            }
        }
    }
    // componentDidMount() {
    //     document.addEventListener('backbutton', (e) => { this.popPage(e); }, true);
    // }
    // componentWillUnmount() {
    //     document.removeEventListener('backbutton', (e) => { this.popPage(e); }, true);
    // }

    render() {
        return (
            <Toolbar {...{ class: 'toolbar' }}>
                <div className='left'>
                    {this.props.hasBackButton &&
                        <ToolbarButton  {...{ class: 'flex' }} onClick={this.popPage.bind(this)}>
                            <i className='icon-left-arrow icon_header'></i>
                        </ToolbarButton>

                    }
                    {!this.props.hasBackButton &&
                        <ToolbarButton {...{ class: 'flex' }} onClick={this.openSideBar}>
                            <span className='icon-menu'></span>
                        </ToolbarButton>
                    }
                </div>
                <div className='center'>
                    <span>{this.props.pageTitle || 'ABP'}</span>
                </div>
                {/* <div className='right '>
                    {this.props.hasBackButton && this.props.pageTitle && this.props.pageKey === AppConstants.ELEMENTS && this.props.Mode !== 'View' && this.props.SurveyStatus !== AppConstants.SURVEY_STATUS_SUBMITTED
                        &&
                        < ToolbarButton {...{ class: 'flex' }} onClick={this.props.onSave}>
                            <i className='icon-save'></i>
                        </ToolbarButton>
                    }
                </div> */}
            </Toolbar >
        );
    }
}

export default connect(
    mapStateToProps,
    utility.mapDispatchToProps
)(Header as any);
