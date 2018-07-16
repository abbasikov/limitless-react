import React from 'react';
import { connect } from 'react-redux';
import { logoutUser,setHomeScreenLoading } from '../../actions/actions';
import { bindActionCreators } from 'redux';

class ProfileContainer extends React.Component {

    render() {
        const user = this.props.currentUser;
        return (
            <div className="content-wrapper">

                {/* Page header */}
                <div className="page-header page-header-default">
                    <div className="page-header-content">
                        <div className="page-title">
                            <h4><i className="icon-user position-left"/> <span
                                className="text-semibold">Profile</span></h4>
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
                                <a href="javascript:void(0);">Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* /page header */}


                {/* Content area */}
                <div className="content  animated fadeInRight">

                    <form className="form-horizontal" action="#">
                        <div className="panel panel-flat">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="form-group">
                                            <label className="col-lg-3 control-label text-bold">Business Name:</label>
                                            <div className="col-lg-9">
                                                <input type="text"
                                                       className="form-control"
                                                       value={user.businessName}
                                                       placeholder="Enter business name"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-lg-3 control-label text-bold">Business Type:</label>
                                            <div className="col-lg-9">
                                                <input type="text"
                                                       className="form-control"
                                                       value={user.businessType}
                                                       placeholder="Enter business type"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-lg-3 control-label text-bold">First Name:</label>
                                            <div className="col-lg-9">
                                                <input type="text"
                                                       className="form-control"
                                                       value={user.firstName}
                                                       placeholder="Enter first name"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-lg-3 control-label text-bold">Last Name:</label>
                                            <div className="col-lg-9">
                                                <input type="text"
                                                       className="form-control"
                                                       value={user.lastName}
                                                       placeholder="Enter last name"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-lg-3 control-label text-bold">Address:</label>
                                            <div className="col-lg-9">
                                                <input type="text"
                                                       className="form-control"
                                                       value={user.address}
                                                       placeholder="Enter address"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-lg-3 control-label text-bold">City:</label>
                                            <div className="col-lg-9">
                                                <input type="text"
                                                       className="form-control"
                                                       value={user.city}
                                                       placeholder="Enter city"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-lg-3 control-label text-bold">State:</label>
                                            <div className="col-lg-9">
                                                <select data-placeholder="Select your state" className="select">
                                                    <option>California</option>
                                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                                        <option value="AK">Alaska</option>
                                                        <option value="HI">Hawaii</option>
                                                    </optgroup>
                                                    <optgroup label="Pacific Time Zone">
                                                        <option value="CA">California</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="WA">Washington</option>
                                                    </optgroup>
                                                    <optgroup label="Mountain Time Zone">
                                                        <option value="AZ">Arizona</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="WY">Wyoming</option>
                                                    </optgroup>
                                                    <optgroup label="Central Time Zone">
                                                        <option value="AL">Alabama</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                    </optgroup>
                                                    <optgroup label="Eastern Time Zone">
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="WV">West Virginia</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-lg-3 control-label text-bold">Zip:</label>
                                            <div className="col-lg-9">
                                                <input type="text"
                                                       className="form-control"
                                                       value={user.zip}
                                                       placeholder="Enter zip"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-lg-3 control-label text-bold">Services:</label>
                                            <div className="col-lg-9">
                                                <select multiple="multiple" data-placeholder="Enter tags"
                                                        className="select-icons">
                                                    <optgroup label="Services">
                                                        <option value="oilchange" data-icon="oilchange">Oil Change</option>
                                                        <option value="tirechange" data-icon="tirechange">Tire Change</option>
                                                        <option value="brakepadreplacement" data-icon="brakepadreplacement">Brake Pad Replacement</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <button type="submit" className="btn btn-primary">Save<i
                                                className="icon-arrow-right14 position-right"/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
                {/* /content area */}

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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);