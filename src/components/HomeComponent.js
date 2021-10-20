import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import dateFormat from "dateformat";

function RenderCard({ item }) {
    return (
        <Card>
            <CardImg className="col-12 col-md-5 m-1" src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>Birthday: {dateFormat(item.doB, "dd/mm/yyyy")}</CardText>
                <CardText>Start date: {dateFormat(item.startDate, "dd/mm/yyyy")}</CardText>
                <CardText>Start date: {dateFormat(item.startDate, "dd/mm/yyyy")}</CardText>
                <CardText>Phòng ban: {item.department.name}</CardText>
                <CardText>Chức danh: {item.role}</CardText>
                <CardText>Số ngày nghỉ còn lại: {item.annualLeave}</CardText>
                <CardText>Số ngày đã làm thêm: {item.overTime}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-1 col-md m-1">
                    <RenderCard item={props.staffs} />
                </div>
            </div>
        </div>
    );
}

export default Home;