import * as React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { app_actions } from '../../actions/app_actions';
import { user_actions } from '../../actions/user_actions';
import { IUser } from '../../interfaces/i_sales';
import { BaseComponent } from './../../core/base_component';
import { IAppStore } from './../../reducers/index';
import { utility } from './../../utils/index';
// import { roleAccess, ACCESS_FUNCTIONS, ACCESS_TYPE } from './../../utils/role-access';
function mapStateToProps(store: IAppStore) {
    return {

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


    logout = () => {
        this.activeMenuHandler('logout');
        utility.confirm({
            title: 'Logout',
            message: 'Are you sure you want to logout?'
        }, (ans) => {
            if (ans === 1) {
                if (window['plugins']) {
                    //clearInterval(this.app_config.time)
                    window['plugins'].googleplus.logout();
                    window['plugins'].googleplus.disconnect();
                }
                this.props.Dispatch(user_actions.logout());
                this.props.Dispatch(app_actions.closeSideBar());
            } else {
                this.setState({ activeMenu: '' });
            }
        });
    }



    render() {
        return (
            <div className='menu_bar'>
                <ul>
                    <li>sasdasd</li>
                    <li>sasdasd</li>
                    <li>sasdasd</li>
                </ul>
            </div >
        );
    }
}
export default connect(
    mapStateToProps,
    utility.mapDispatchToProps
)(MenuComponent);
