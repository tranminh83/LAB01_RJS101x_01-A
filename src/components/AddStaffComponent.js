import React, { Component } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import {DEPARTMENTS} from '../shared/staffs'
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !NaN(Number());


class AddStaff extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            staffs: props.staffs,
            id: '',
            fullName: '',
            doB: '',
            startDate: '',
            department: DEPARTMENTS[0].id,
            salaryScale: 1,
            annualLeave: 0,
            overTime: 0,
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(value);
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.toggleModal();
        // event.preventDefault();

        const department = DEPARTMENTS.find(department => department.id === this.state.department);
        const newStaff = {

            name: this.state.fullName,
            doB: this.state.doB,
            salaryScale: this.state.salaryScale,
            startDate: this.state.startDate,
            department: department,
            annualLeave: this.state.annualLeave,
            overTime: this.state.overTime,
            salary: this.state.salary,
            image: '/assets/images/alberto.png'
        };
        this.props.addStaff(newStaff)
    }


    render() {
        return (
            <>
                <FormGroup row>
                    <Col md={{ size: 10, offset: 2 }}>
                        <Button outline onClick={this.toggleModal}>Add</Button>
                    </Col>
                </FormGroup>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>AddStaff</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Row className="form-group mt-3">
                                <Label htmlFor="fullName" md={2}>Full Name</Label>
                                <Col md={10}>
                                    <Control.text model=".fullName" id="fullName" name="fullName"
                                        placeholder="Full Name"
                                        className="form-control"
                                        validators={{
                                            required, 
                                            minLength: minLength(3), 
                                            maxLength: maxLength(30)
                                        }}
                                        value={this.state.fullName}
                                        onChange={this.handleInputChange} />
                                        <Errors
                                            className="text-danger"
                                            model=".fullName"
                                            show="touched"
                                            messages={{
                                                required: 'required',
                                                minLength: 'Must be greater than 3 characters',
                                                maxLength: 'Must be 30 characters or less'
                                            }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group mt-3">
                                <Label htmlFor="doB" md={2}>Date of Birth</Label>
                                <Col md={10}>
                                    <Input type="date" id="doB" name="doB"
                                        placeholder="BirthDay"
                                        value={this.state.doB}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </Row>
                            <Row className="form-group mt-3">
                                <Label htmlFor="startDate" md={2}>Starting Date</Label>
                                <Col md={10}>
                                    <Input type="date" id="startDate" name="startDate"
                                        placeholder="Starting Date"
                                        value={this.state.startDate}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </Row>
                            <Row className="form-group mt-3">
                                <Label htmlFor="department" md={2}>Deparment</Label>
                                <Col md={10}>
                                    <Control.select model=".department" id="department" name="department"
                                        placeholder="Department"
                                        className="form-control"
                                        value={this.state.department}
                                        onChange={this.handleInputChange}>
                                        <option value="Dept01">Sale</option>
                                        <option vlaue="Dept02">HR</option>
                                        <option value="Dept03">Marketing</option>
                                        <option value="Dept04">IT</option>
                                        <option value="Dept05">Finance</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group mt-3">
                                <Label htmlFor="salaryScale" md={2}>Salary Scale</Label>
                                <Col md={10}>
                                    <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"
                                        placeholder="1.0->3.0"
                                        className="form-control"
                                        value={this.state.salaryScale}
                                        onChange={this.handleInputChange} 
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group mt-3">
                                <Label htmlFor="annualLeave" md={2}>Annualleave</Label>
                                <Col md={10}>
                                    <Control.text model=".annualLeave" id="annualLeave" name="annualLeave"
                                        placeholder="1.0"
                                        className="form-control"
                                        value={this.state.annualLeave}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </Row>
                            <Row className="form-group mt-3">
                                <Label htmlFor="overTime" md={2}>Over Time</Label>
                                <Col md={10}>
                                    <Control.text model=".overTime" id="overTime" name="overTime"
                                        placeholder="1.0"
                                        className="form-control"
                                        value={this.state.overTime}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </Row>
                            <Row className="form-group mt-3">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Add</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>

        );
    }
}

export default AddStaff;