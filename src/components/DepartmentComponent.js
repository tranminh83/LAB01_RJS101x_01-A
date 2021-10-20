import React from 'react';
import { Link } from 'react-router-dom';

export default function DepartmentCoponent(props) {
    const dep = props.departments.map((dep) => {
        return (
            <div className="card rounded col-sm-12 col-md-4 col-lg-3 m-3">
                <div className="card-body text-center">
                    <h1 className='card-title '>{dep.name}</h1>
                    <p className='card-text p-3'>Số Lượng Nhân viên: {dep.numberOfStaff} </p>
                </div>
            </div>

        )
    })
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h3>Department</h3>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {dep}
            </div>
        </div>
    )
}