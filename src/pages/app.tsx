import * as React from 'react';
import { Splitter, SplitterContent, SplitterSide } from 'react-onsenui';
import { connect } from 'react-redux';

import { custom_navigator } from '../utils/navigator';
import { app_actions } from './../actions/app_actions';
import Loader from './../components/generic/app_loader';
import MenuComponent from './../components/generic/menu_bar';
import { BaseComponent } from './../core/base_component';
import { CustomNavigator } from './../core/custom_navigator';
import { IAppStore } from './../reducers/index';
import { utility } from './../utils/index';
import SignUp from './signuporlogin';
import Dashboard from './dashboard';
interface IAppComponentProps {
    IsSidebarOpen?: boolean;
    IsLoggedIn?: boolean;
    IsLoginScreenOpen?: string;
    Dispatch?: any;
    Mode?: string;
    Access?: Array<string>;
    RoleAccess?: Array<{ realm: number; realmName: string; type: string; }>;

}

interface IAppComponentState {
    IsSideBarOpen?: boolean;
}

class AppComponent extends BaseComponent<IAppComponentProps, IAppComponentState> {
    static defaultProps = {
        IsSideBarOpen: false
    };
    constructor(props: IAppComponentProps) {
        super(props);
        this.state = {
            IsSideBarOpen: true
        };
    }
    hideSideBar = () => {
        this.props.Dispatch(app_actions.closeSideBar());
    }
    renderPage(route: IRoute) {
        return (
            <route.component
                navigator={route.navigator}
                key={route.key}
                pageKey={route.pageKey}
                comp_id={'abp_page_' + route.key}
                {...route.params}
            />
        );
    }
    render(): JSX.Element {
        return (
            <div className='root_container'>
                {!this.props.IsLoggedIn &&
                    <CustomNavigator
                        renderPage={this.renderPage}
                        initialRoute={{
                            component: SignUp,
                            key: custom_navigator.pageKeys.signUp,
                            pageKey: custom_navigator.pageKeys.signUp
                        }}
                    />
                }
                {
                    <Splitter {...{ class: 'splitterPosition' }} key=''>
                        <SplitterSide {...{
                            class: 'navSideBar', width: '70%' as any
                        }}
                            side='left'
                            collapse={true}
                            {...{ swipeable: false } }
                            isOpen={this.props.IsSidebarOpen}
                            onClose={this.hideSideBar}>

                            <MenuComponent />

                        </SplitterSide>
                        <SplitterContent>

                            {this.props.IsLoggedIn &&
                                <CustomNavigator
                                    renderPage={this.renderPage}
                                    initialRoute={{
                                        component: Dashboard,
                                        key: custom_navigator.pageKeys.dashboard,
                                        pageKey: custom_navigator.pageKeys.dashboard
                                    }}
                                />
                            }
                        </SplitterContent>
                    </Splitter>
                }

                <Loader />
            </div>
        );
    }
}
function mapStoreToProps(store: IAppStore): any {
    return {
        IsLoggedIn: store.User.IsLoggedIn,
        IsSidebarOpen: store.App.IsSideBarOpen,
        IsLoginScreenOpen: store.User.IsOpenLoginScreen
    };
}
export default connect(mapStoreToProps, utility.mapDispatchToProps)(AppComponent as any);
