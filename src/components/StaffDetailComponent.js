import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

function StaffDetail({ staff }) {
    return (
        <>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/staff">Staff</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{staff.name}</li>
                    </ol>
                </nav>
            </div>
            <div className="row m-4">
                <img className="col-lg-3 col-md-4 col-sm-12" src={staff.image} alt={staff.name} />
                <CardBody className="col-lg-9 col-md-8 col-sm-12">
                    <CardTitle>{staff.name}</CardTitle>
                    <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                    <CardText>Ngày bắt đầu làm việc: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                    <CardText>Phòng ban: {staff.department.name}</CardText>
                    <CardText>Chức danh: {staff.role}</CardText>
                    <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                    <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                </CardBody>
            </div>
        </>
    );
}

export default StaffDetail;