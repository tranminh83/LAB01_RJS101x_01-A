import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null
        }
    }

    // onStaffSelect(staff) {

    //     this.setState({ selectedStaff: staff });
    // }


    // renderStaff(staff) {
    //     if (staff != null) {
    //         return (
    //             <>
    //                 <div className="col-lg-2 col-md-4 col-sm-6">
    //                     <Card >
    //                         <Link to={`/staff/${staff.id}`}>
    //                             <CardImg width="100%" src={staff.image} alt={staff.name} />
    //                             <CardBody>
    //                                 <CardTitle>{staff.name}</CardTitle>
    //                                 <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
    //                                 <CardText>Ngày bắt đầu làm việc: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
    //                                 <CardText>Phòng ban: {staff.department.name}</CardText>
    //                                 <CardText>Chức danh: {staff.role}</CardText>
    //                                 <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
    //                                 <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
    //                             </CardBody>
    //                         </Link>
    //                     </Card>
    //                 </div>
    //             </>
    //         );
    //     } else {
    //         return (
    //             <div></div>
    //         );
    //     }
    // }

    render() {
        const menu = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-lg-2 col-md-4 col-sm-6">
                    <Link to={`/staff/${staff.id}`}>
                        <CardImg width="100%" src={staff.image} alt={staff.name} />
                    </Link>
                    <Card className="card text-center">
                        <CardTitle heading>{staff.name}</CardTitle>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h3>Staff</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

}

export default Menu;