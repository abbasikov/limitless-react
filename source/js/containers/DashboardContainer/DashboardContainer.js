import React from 'react';
import { connect } from 'react-redux';
import DynamicPanelContainer from '../DynamicPanelContainer/DynamicPanelContainer';
import { bindActionCreators } from "redux";
import { getBidsByServiceType } from "../../actions/actions";

class DashboardContainer extends React.Component {

    static propTypes = {
        homeScreenLoading:React.PropTypes.bool
    };


    componentWillMount(){

    }

    getAllDynamicPanelContainers() {
        if(this.props.currentUser && this.props.currentUser.services){
            return this.props.currentUser.services.map(function(serviceObj){
                return <DynamicPanelContainer key={serviceObj.serviceType}
                                              serviceHeading={serviceObj.serviceName}
                                              serviceType={serviceObj.serviceType}/>
            });
        }
        return [];
    }


    render() {
        console.log(this.props.currentUser);
        return (
            <div className="content-wrapper">

                {/* Page header */}
                <div className="page-header page-header-default">
                    <div className="page-header-content">
                        <div className="page-title">
                            <h4><i className="icon-home4 position-left"/> <span
                                className="text-semibold">Dashboard</span></h4>
                        </div>
                    </div>

                    <div className="breadcrumb-line">
                        <ul className="breadcrumb">
                            <li>
                                <a href="javascript:void(0);">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* /page header */}


                {/* Content area */}
                <div className="content">
                    {this.getAllDynamicPanelContainers()}
                </div>
                {/* /content area */}

            </div>
        );
    }
}

function mapStateToProps(state) {
    //Whatever is returned from this function will end up
    // as props inside of this container component
    return {
        currentUser:state.currentUser,
        homeScreenLoading:state.homeScreenLoading
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getBidsByServiceType:getBidsByServiceType}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);