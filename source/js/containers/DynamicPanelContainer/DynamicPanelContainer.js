import React from 'react';
import DataTableResponsive from '../../components/DataTableResponsive/DataTableResponsive';
import {getBidsByServiceType} from "../../actions/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class DynamicPanelContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceData:[]
        }
    }

    reload(e){
        e.preventDefault();
        this.props.getBidsByServiceType(this.props.serviceType);
    }

    toggleCollapse(e){
        e.preventDefault();
        $(this.refs['toggle-panel']).slideToggle();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.currentBids[this.props.serviceType]){
            this.setState({
                serviceData:nextProps.currentBids[this.props.serviceType]
            });
        }
    }

    componentDidMount(){
        this.props.getBidsByServiceType(this.props.serviceType);
    }

    renderDataTableResponsive(){
        return (this.state.serviceData && this.state.serviceData.length > 0) ? (
            <div ref="toggle-panel" className="panel-body">
                <DataTableResponsive serviceData={this.state.serviceData} />
            </div>
        ) : (
            <div ref="toggle-panel" className="panel-body">
                <div className="text-danger text-size-large" style={{textAlign:'center'}}>No Records Found</div>
            </div>
        );
    }

    render() {
        return (

            <div id={this.props.serviceType} className="panel panel-callout panel-default animated fadeInRight">
                <div className="panel-heading">
                    <h5 className="panel-title">{this.props.serviceHeading}</h5>
                    <div className="heading-elements">
                        <ul className="icons-list">
                            <li><a data-action="collapse" onClick={(e) => this.toggleCollapse(e)}/></li>
                            <li><a data-action="reload" onClick={(e) => this.reload(e)}/></li>
                        </ul>
                    </div>
                </div>

                {this.renderDataTableResponsive()}

            </div>
        );
    }
}

function mapStateToProps(state) {
    //Whatever is returned from this function will end up
    // as props inside of this container component
    return {
        currentUser:state.currentUser,
        homeScreenLoading:state.homeScreenLoading,
        currentBids:state.currentBids
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getBidsByServiceType:getBidsByServiceType}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DynamicPanelContainer);

