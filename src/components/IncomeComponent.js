import React from 'react';
import { Link } from 'react-router-dom';

export default function Income(props) {
    console.log('bbb', props.staffs)
    const staff = props?.staffs?.map((staff) => {
        const salary = parseInt(staff.salaryScale)
        const money = parseInt(staff.salaryScale) * 3000000 + parseInt(staff.overTime) * 200000
        return (
            <div className="card rounded col-lg-3 col-md-4 col-sm-6 m-2">
                <div class="card-body">
                    <h4 class="card-title">{staff.name}</h4>
                    <p class="card-text">Mã nhân viên: {staff.id} </p>
                    <p class="card-text">Hệ số lương: {salary}</p>
                    <p class="card-text">Số giờ làm thêm: {staff.overTime} </p>
                    <p class="card-text bg-primary text-white p-2">Lương: {money} </p>
                </div>
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Salary</h3>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {staff}
            </div>
        </div>
    )
}
