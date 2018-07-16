import React from 'react';
import { connect } from 'react-redux';
import { logoutUser,setHomeScreenLoading } from '../../actions/actions';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import ClickOutsideMixin from '../../components/ClickOutsideMixin/ClickOutsideMixin';
import VerticalSlideMenu from '../../components/VerticalSlideMenu/VerticalSlideMenu';

class HeaderContainer extends ClickOutsideMixin {

    static propTypes = {
        currentUser:React.PropTypes.object,
        loggedIn:React.PropTypes.bool
    };


    constructor(props) {
        super(props);
        this.state = {
            courseSwitchOpen: false,
            userSwitchOpen: false,
            mobileSwitchOpen: false,
            messagesSwitchOpen:false
        }
    }

    componentDidMount() {
        super.componentDidMount();
    }

    componentWillUnmount () {
        super.componentWillUnmount();
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps){
    }

    toggleDropdown(name) {
        console.log('toggle called');
        if(name === 'course-switch') {
            this.setState({
                courseSwitchOpen: !this.state.courseSwitchOpen,
                userSwitchOpen:false,
                messagesSwitchOpen:false
            });
        }
        if(name === 'user-switch') {
            this.setState({
                courseSwitchOpen: false,
                userSwitchOpen:!this.state.userSwitchOpen,
                messagesSwitchOpen:false
            });
        }

        if(name === 'mobile-switch') {
            this.setState({
                mobileSwitchOpen:!this.state.mobileSwitchOpen
            });
        }

        if(name === 'messages-switch') {
            this.setState({
                messagesSwitchOpen:!this.state.messagesSwitchOpen,
                userSwitchOpen:false,
                courseSwitchOpen: false
            });
        }
    }

    clickedInside() {
        //console.log('inside');
    }

    clickedOutside() {
        this.setState({
            courseSwitchOpen: false,
            userSwitchOpen:false,
            messagesSwitchOpen:false
        });
    }

    logoutClick(e) {
        e.preventDefault();
        this.closeSlideMenu();
        this.props.logoutUser();
    }

    clickHome(e) {
        e.preventDefault();
        this.closeSlideMenu();
        browserHistory.push(routes.home.childRoutes.main.path);
    }

    clickMyProfile(e){
        e.preventDefault();
        this.closeSlideMenu();
        browserHistory.push('/home/profile');
    }

    clickAccountSettings(e) {
        e.preventDefault();
        this.closeSlideMenu();
        browserHistory.push(routes.home.childRoutes.accountSettings.path);
    }

    closeSlideMenu() {
        this.setState({
            mobileSwitchOpen:false
        });
    }

    sidebarMainToggle(e){
        e.preventDefault();
        // Toggle min sidebar class
        $('body').toggleClass('sidebar-xs');
    }

    render() {
        return (
            <div className="navbar navbar-inverse animated fadeInDown">
                <div className="navbar-header">
                    {/* <a className="navbar-brand" href="index.html">
                        <img src="../../../../assets/images/logo_light.png" alt=""/>
                    </a> */}

                    <ul className="nav navbar-nav visible-xs-block">
                        <li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"/></a>
                        </li>
                        <li><a className="sidebar-mobile-main-toggle"><i className="icon-paragraph-justify3"/></a>
                        </li>
                    </ul>
                </div>


                <div className="navbar-collapse collapse" id="navbar-mobile">
                    <ul className="nav navbar-nav">
                        <li>
                            <a className="sidebar-control sidebar-main-toggle hidden-xs"
                               onClick={(e) => this.sidebarMainToggle(e)}>
                                <i className="icon-paragraph-justify3"/>
                            </a>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">

                        <li className="dropdown dropdown-user">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <img src="../../../../assets/images/image.png" alt=""/>
                                    <span>{this.props.currentUser.firstName}</span>
                                    <i className="caret"/>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                    <a href="#" onClick={(e) => this.clickMyProfile(e)}><i className="icon-user-plus"/>
                                        My profile
                                    </a>
                                </li>
                                <li className="divider"/>
                                <li>
                                    <a href="#" onClick={(e) => this.logoutClick(e)}>
                                        <i className="icon-switch2"/> Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    //Whatever is returned from this function will end up
    // as props inside of this container component
    return {
        currentUser:state.currentUser,
        loggedIn:state.loggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({logoutUser,setHomeScreenLoading}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);