import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from "dateformat";
var now = new Date();

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null
        }
    }

    onStaffSelect(staff) {
        
        this.setState({ selectedStaff: staff });
    }


    renderStaff(staff) {
        if (staff != null) {
            return (
                <>
                    <div className="col-12 col-md-5 m-1">
                        <Card >
                            {/* <CardImg width="100%" src={staff.image} alt={staff.name} /> */}
                            <CardBody>
                                <CardTitle>{staff.name}</CardTitle>
                                <CardText>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</CardText>
                                <CardText>Ngày bắt đầu làm việc: {dateFormat(staff.startDate,"dd/mm/yyyy")}</CardText>
                                <CardText>Phòng ban: {staff.department.name}</CardText>
                                <CardText>Chức danh: {staff.role}</CardText>
                                <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                                <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        console.log(this.props.staffs)

        const menu = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onStaffSelect(staff)}>
                        {/* <CardImg width="100%" src={staff.name} alt={staff.name} /> */}
                        <Card>
                            <CardTitle heading>{staff.name}</CardTitle>
                        </Card>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        );
    }

}

export default Menu;