import React from 'react';
import DataTableRow from '../DataTableRow/DataTableRow';
import DataTableCol from '../DataTableCol/DataTableCol';
import ReactMomentCountDown from 'react-moment-countdown';
import swal from '../../../../assets/lib/sweet_alert.min';
import moment from 'moment';

export default class DataTableResponsive extends React.Component {

    constructor(props) {
        super(props);
    }

    makeBid(selectedRow){
        swal({
                title: "An input!",
                text: "Write1 something interesting:",
                type: "input",
                showCancelButton: true,
                confirmButtonColor: "#2196F3",
                closeOnConfirm: false,
                //animation: "slide-from-bottom",
                inputPlaceholder: "Write something"
            },
            function(inputValue){
                if (inputValue === false)
                    return false;
                if (inputValue === "") {
                    swal.showInputError("You need to write something!");
                    return false
                }
                swal({
                    title: "Nice!",
                    text: "You wrote: " + inputValue,
                    type: "success",
                    confirmButtonColor: "#2196F3",
                    timer:2000
                });
            });
    }

    winBid(selectedRow){
        swal({
            title: "Auto close alert!",
            text: "I will close in 2 seconds.",
            confirmButtonColor: "#2196F3",
            timer: 2000
        });
    }

    getAllTableRows(){
        const dateInFuture = new Date('2018-07-08');
        const endDate = moment().add(2, 'hours')
        const _this = this;
        if(this.props.serviceData && this.props.serviceData.length>0){
            return this.props.serviceData.map(function(serviceObj){
                return (
                    <DataTableRow key={serviceObj.id}>
                        <DataTableCol textColor={'danger'}>
                            <ReactMomentCountDown toDate={endDate} />
                        </DataTableCol>
                        {/* <DataTableCol>{serviceObj.serviceType}</DataTableCol> */}
                        <DataTableCol>{serviceObj.yourBid} / {serviceObj.winningBid}</DataTableCol>
                        <DataTableCol>{serviceObj.delta}</DataTableCol>
                        <DataTableCol>{serviceObj.quickinfo}</DataTableCol>
                        <DataTableCol><span className="label label-flat border-success text-success-600 position-right">Active</span></DataTableCol>
                        <DataTableCol>
                            <button type="button" onClick={(e) => _this.makeBid(serviceObj)} className="btn btn-xs btn-success legitRipple">Make Bid</button>
                        </DataTableCol>
                        <DataTableCol>
                            <button type="button" onClick={(e) => _this.winBid(serviceObj)} className="btn btn-xs btn-success legitRipple">Win Bid</button>
                        </DataTableCol>
                    </DataTableRow>
                );
            });
        }

        return [];

    }

    makeRippleEffect(){
        // Ripple effect ( Material UI )
        $(".btn:not(.disabled):not(.multiselect.btn-default):not(.bootstrap-select .btn-default)").ripple({
            dragging: false,
            adaptPos: false,
            scaleMode: false
        });

        // Unbind ripple in Datepaginator
        $('.dp-item, .dp-nav, .sidebar-xs .sidebar-main .navigation > li > a').ripple({unbind: true});

    }

    componentDidMount(){
        this.makeRippleEffect();
    }

    render() {
        return (
            <table ref="toggle-panel" className="table datatable-responsive">
                <thead>
                <tr>
                    <th>Expires</th>
                    {/* <th>Service Type</th> */}
                    <th>Your Bid / Winning Bid</th>
                    <th>Delta</th>
                    <th>Quick Info</th>
                    <th>Status</th>
                    <th>Bid Action</th>
                    <th>Win Action</th>
                </tr>
                </thead>
                <tbody>
                    {this.getAllTableRows()}
                </tbody>
            </table>
        );
    }
}

