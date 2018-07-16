import React from 'react';
import { connect } from 'react-redux';
import { logoutUser,setHomeScreenLoading } from '../../actions/actions';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class NavigationBarContainer extends React.Component {

    constructor(props){
        super(props);
    }

    clickDashboard(e){
        e.preventDefault();
        browserHistory.push('/home/dashboard');
    }

    clickWinningBids(e){
        e.preventDefault();
        browserHistory.push('/home/winningbids');
    }

    clickLosingBids(e){
        e.preventDefault();
        browserHistory.push('/home/losingbids');
    }

    render() {
        return (
            <div className="sidebar sidebar-main  animated fadeInLeft" style={{height:'100%'}}>
                <div className="sidebar-content">

                    {/* User menu */}
                    <div className="sidebar-user">
                        <div className="category-content">
                            <div className="media">
                                <a href="#" className="media-left">
                                    <img src="../../../../assets/images/image.png"
                                         className="img-circle img-sm"
                                         alt=""/>
                                </a>
                                <div className="media-body">
                                    <span className="media-heading text-semibold">{this.props.currentUser.businessName}</span>
                                    <div className="text-size-mini text-muted">
                                        <i className="icon-pin text-size-small"/> &nbsp;{this.props.currentUser.city}, {this.props.currentUser.state}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /user menu */}


                    {/* Main navigation */}
                    <div className="sidebar-category sidebar-category-visible">
                        <div className="category-content no-padding">
                            <ul className="navigation navigation-main navigation-accordion">

                                {/* Main */}
                                <li className="navigation-divider"/>
                                <li>
                                    <a href="#" onClick={(e) => this.clickDashboard(e)}><i className="icon-home4"/>
                                    <span>Dashboard</span></a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => this.clickWinningBids(e)}><i className="icon-trophy2"/>
                                    <span>Winning Bids</span></a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => this.clickLosingBids(e)}><i className="icon-list-unordered"/>
                                        <span>Losing Bids</span></a>
                                </li>
                                {/* /main */}

                            </ul>
                        </div>
                    </div>
                    {/* /main navigation */}

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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBarContainer);