import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { setAuthState } from '../../actions/actions';
import { LOADING_TEXT } from '../../constants/MessageConstants';
import utilityMethods from '../../utils/utilityMethods';
import HeaderContainer from './../HeaderContainer/HeaderContainer';
import NavigationBarContainer from './../NavigationBarContainer/NavigationBarContainer';
import OverlayLoading from '../../components/OverlayLoading/OverlayLoading';

import '../../../less/app.less';

class HomeContainer extends React.Component {
    static propTypes = {
        homeScreenLoading:React.PropTypes.bool
    };

    constructor(props){
        super(props);
        this.state = {
            homeScreenLoading:false
        };
    }

    componentWillMount() {
        $(document.body).removeClass('navbar-bottom login-container').addClass('cbp-spmenu-push');
        let currentUser = utilityMethods.getUserSession();
        if(currentUser) {
            console.log('current user exists');
            this.props.setAuthState(true,JSON.parse(currentUser), '');
        }else {
            console.log('current user does not exists');
            browserHistory.push('/')
        }
    }

    componentWillReceiveProps(nextProps){
        if(!nextProps.loggedIn) {
            browserHistory.push('/');
        }

        this.setState({
            homeScreenLoading: nextProps.homeScreenLoading ? nextProps.homeScreenLoading : false
        });
    }

    makeRippleEffect(){
        // Ripple effect ( Material UI )
        $(".btn:not(.disabled):not(.multiselect.btn-default):not(.bootstrap-select .btn-default), .navigation li:not(.disabled) a, .nav > li:not(.disabled) > a, .sidebar-user-material-menu > a, .sidebar-user-material-content > a, .select2-selection--single[class*=bg-], .breadcrumb-elements > li:not(.disabled) > a, .wizard > .actions a, .ui-button:not(.ui-dialog-titlebar-close), .ui-tabs-anchor:not(.ui-state-disabled), .plupload_button:not(.plupload_disabled), .fc-button, .pagination > li:not(.disabled) > a, .pagination > li:not(.disabled) > span, .pager > li:not(.disabled) > a, .pager > li:not(.disabled) > span").ripple({
            dragging: false,
            adaptPos: false,
            scaleMode: false
        });

        // Unbind ripple in Datepaginator
        $('.dp-item, .dp-nav, .sidebar-xs .sidebar-main .navigation > li > a').ripple({unbind: true});

    }

    componentDidMount () {
        window.scrollTo(0, 0);
        this.makeRippleEffect();
    }


    render() {

        return (

            <div className="home-wrapper">

                <HeaderContainer />

                <div className={this.props.homeScreenLoading ? "page-container blur-background" : "page-container"}>
                    {/*Page content */}
                    <div className="page-content">

                        {/*Main sidebar*/}
                        <NavigationBarContainer/>
                        {/* /main sidebar */}


                        {/* Main content */}
                        {this.props.children}
                        {/* /main content */}

                    </div>
                    {/*/page content */}
                </div>

                <OverlayLoading loadingText={LOADING_TEXT} showLoading={this.props.homeScreenLoading}/>

            </div>
        );
    }
}

function mapStateToProps(state) {
    //Whatever is returned from this function will end up
    // as props inside of this container component
    return {
        loggedIn:state.loggedIn,
        currentUser:state.currentUser,
        loginError:state.loginError,
        homeScreenLoading:state.homeScreenLoading
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setAuthState}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
