import * as React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { app_actions } from '../../actions/app_actions';
import { user_actions } from '../../actions/user_actions';
import { IUser } from '../../interfaces/i_sales';
import { BaseComponent } from './../../core/base_component';
import { IAppStore } from './../../reducers/index';
import { utility } from './../../utils/index';
import { custom_navigator } from "../../utils/navigator";
import Notfications from './../../pages/notifications';
import Search from './../../pages/searchscreen';
// import { roleAccess, ACCESS_FUNCTIONS, ACCESS_TYPE } from './../../utils/role-access';
function mapStateToProps(store: IAppStore) {
    return {
        UserData: store.User.UserDetails,
        IsSideBarOpen: store.App.IsSideBarOpen,
    };
}
interface IMenuState {
    activeMenu: string;

}
class MenuComponent extends BaseComponent<{
    Dispatch?: Dispatch<Action>
    IsLoggedIn?: boolean
    UserData?: IUser;
    Access?: Array<string>;
    IsSideBarOpen?: boolean;
    pageKey?: string
    RoleAccess?: Array<{ realm: number; realmName: string; type: string; }>;

}, IMenuState> {
    constructor(props) {
        super(props);
        this.state = {
            activeMenu: ''
        };
    }
    pageKeys;
    activeMenuHandler = (menu) => {
        this.setState({ activeMenu: menu });
    }
    goToProfile = () => {
        this.activeMenuHandler('profile');
        // custom_navigator.pushPage(Dashboard, custom_navigator.pageKeys.dashboard)
    }
    gotoSearchResults = () => {
        custom_navigator.pushPage(Search, custom_navigator.pageKeys.searchScreen)
    }
    goToEventsList = () => {
        this.activeMenuHandler('events');
    }
    logout = () => {
        this.activeMenuHandler('logout');
        utility.confirm({
            title: 'Logout',
            message: 'Are you sure you want to logout?'
        }, (ans) => {
            if (ans === 1) {
                this.props.Dispatch(user_actions.logout());
                this.props.Dispatch(app_actions.closeSideBar());
            } else {
                this.setState({ activeMenu: '' });
            }
        });
    }
    notificationPage = () => {
        custom_navigator.pushPage(Notfications, custom_navigator.pageKeys.notifications)
    }

    render() {
        return (
            <div className='menu_bar'>
                <ul>
                    <li className='list-menu' onClick={this.goToProfile}>
                        Profile
                    </li>
                    <li onClick={this.notificationPage}>
                        Notifications
                    </li>
                    <li>
                        Inbox
                    </li>
                    <li onClick={this.gotoSearchResults}>
                        History
                    </li>
                    <li>
                        Settings
                    </li>
                    <li onClick={this.logout}>
                        Logout
                    </li>
                </ul>
            </div >
        );
    }
}
export default connect(
    mapStateToProps,
    utility.mapDispatchToProps
)(MenuComponent);
