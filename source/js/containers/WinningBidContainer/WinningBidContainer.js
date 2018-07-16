import React from 'react';
import { connect } from 'react-redux';
import { logoutUser,setHomeScreenLoading } from '../../actions/actions';
import { bindActionCreators } from 'redux';

class WinningBidContainer extends React.Component {

    render() {
        return (
            <div className="content-wrapper">

                {/* Page header */}
                <div className="page-header page-header-default">
                    <div className="page-header-content">
                        <div className="page-title">
                            <h4><i className="icon-trophy2 position-left"/> <span
                                className="text-semibold">Winning Bids</span></h4>
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
                                <a href="javascript:void(0);">Winning Bids</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* /page header */}


                {/* Content area */}
                <div className="content  animated fadeInRight">

                    {/* Simple panel */}
                    <div className="panel panel-flat">
                        <div className="panel-heading">
                            <h5 className="panel-title">Simple panel</h5>
                            <div className="heading-elements">
                                <ul className="icons-list">
                                    <li><a data-action="collapse"/></li>
                                    <li><a data-action="close"/></li>
                                </ul>
                            </div>
                        </div>

                        <div className="panel-body">
                            <h6 className="text-semibold">Start your development with no hassle!</h6>
                            <p className="content-group">Common problem of templates is that all code is
                                deeply integrated into the core. This limits your freedom in decreasing
                                amount of code, i.e. it becomes pretty difficult to remove unnecessary code
                                from the project. Limitless allows you to remove unnecessary and extra code
                                easily just by removing the path to specific LESS file with component
                                styling. All plugins and their options are also in separate files. Use only
                                components you actually need!</p>

                            <h6 className="text-semibold">What is this?</h6>
                            <p className="content-group">Starter kit is a set of pages, useful for
                                developers to start development process from scratch. Each layout includes
                                base components only: layout, page kits, color system which is still
                                optional, bootstrap files and bootstrap overrides. No extra CSS/JS files and
                                markup. CSS files are compiled without any plugins or components. Starter
                                kit was moved to a separate folder for better accessibility.</p>

                            <h6 className="text-semibold">How does it work?</h6>
                            <p>You open one of the starter pages, add necessary plugins, uncomment paths to
                                files in components.less file, compile new CSS. That's it. I'd also
                                recommend to open one of main pages with functionality you need and copy all
                                paths/JS code from there to your new page, it's just faster and easier.</p>
                        </div>
                    </div>
                    {/* /simple panel */}


                    {/* Table */}
                    <div className="panel panel-flat">
                        <div className="panel-heading">
                            <h5 className="panel-title">Basic table</h5>
                            <div className="heading-elements">
                                <ul className="icons-list">
                                    <li><a data-action="collapse"/></li>
                                    <li><a data-action="close"/></li>
                                </ul>
                            </div>
                        </div>

                        <div className="panel-body">
                            Starter pages include the most basic components that may help you start your
                            development process - basic grid example, panel, table and form layouts with
                            standard components. Nothing extra.
                        </div>

                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Eugene</td>
                                    <td>Kopyov</td>
                                    <td>@Kopyov</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Victoria</td>
                                    <td>Baker</td>
                                    <td>@Vicky</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>James</td>
                                    <td>Alexander</td>
                                    <td>@Alex</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Franklin</td>
                                    <td>Morrison</td>
                                    <td>@Frank</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* /table */}


                    {/* Grid */}
                    <div className="row">
                        <div className="col-md-6">

                            {/* Horizontal form */}
                            <div className="panel panel-flat">
                                <div className="panel-heading">
                                    <h5 className="panel-title">Horizontal form</h5>
                                    <div className="heading-elements">
                                        <ul className="icons-list">
                                            <li><a data-action="collapse"/></li>
                                            <li><a data-action="close"/></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="panel-body">
                                    <form className="form-horizontal" action="#">
                                        <div className="form-group">
                                            <label className="control-label col-lg-2">Text input</label>
                                            <div className="col-lg-10">
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="control-label col-lg-2">Password</label>
                                            <div className="col-lg-10">
                                                <input type="password" className="form-control"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="control-label col-lg-2">Select</label>
                                            <div className="col-lg-10">
                                                <select name="select" className="form-control">
                                                    <option value="opt1">Basic select</option>
                                                    <option value="opt2">Option 2</option>
                                                    <option value="opt3">Option 3</option>
                                                    <option value="opt4">Option 4</option>
                                                    <option value="opt5">Option 5</option>
                                                    <option value="opt6">Option 6</option>
                                                    <option value="opt7">Option 7</option>
                                                    <option value="opt8">Option 8</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="control-label col-lg-2">Textarea</label>
                                            <div className="col-lg-10">
                                                            <textarea rows="5" cols="5" className="form-control"
                                                                      placeholder="Default textarea"/>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <button type="submit" className="btn btn-primary">Submit form <i
                                                className="icon-arrow-right14 position-right"/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* /horizotal form */}

                        </div>

                        <div className="col-md-6">

                            {/* Vertical form */}
                            <div className="panel panel-flat">
                                <div className="panel-heading">
                                    <h5 className="panel-title">Vertical form</h5>
                                    <div className="heading-elements">
                                        <ul className="icons-list">
                                            <li><a data-action="collapse"/></li>
                                            <li><a data-action="close"/></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="panel-body">
                                    <form action="#">
                                        <div className="form-group">
                                            <label>Text input</label>
                                            <input type="text" className="form-control"/>
                                        </div>

                                        <div className="form-group">
                                            <label>Select</label>
                                            <select name="select" className="form-control">
                                                <option value="opt1">Basic select</option>
                                                <option value="opt2">Option 2</option>
                                                <option value="opt3">Option 3</option>
                                                <option value="opt4">Option 4</option>
                                                <option value="opt5">Option 5</option>
                                                <option value="opt6">Option 6</option>
                                                <option value="opt7">Option 7</option>
                                                <option value="opt8">Option 8</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Textarea</label>
                                            <textarea rows="4" cols="4" className="form-control"
                                                      placeholder="Default textarea"/>
                                        </div>

                                        <div className="text-right">
                                            <button type="submit" className="btn btn-primary">Submit form <i
                                                className="icon-arrow-right14 position-right"/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* /vertical form */}

                        </div>
                    </div>
                    {/* /grid */}


                    {/* Footer */}
                    <div className="footer text-muted">
                        &copy; 2015. <a href="#">Limitless Web App Kit</a> by <a
                        href="http://themeforest.net/user/Kopyov" target="_blank">Eugene Kopyov</a>
                    </div>
                    {/* /footer */}

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

export default connect(mapStateToProps, mapDispatchToProps)(WinningBidContainer);