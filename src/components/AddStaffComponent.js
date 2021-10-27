import React, { Component } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
import {DEPARTMENTS} from '../shared/staffs'

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
            touched: {
                fullName: false,
                salaryscale: false,
                annualleave: false,
                overtime: false
            }
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
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
        event.preventDefault();

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

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(fullName, salaryScale, annualLeave, overTime) {
        // const errors = {
        //     fullName: '',
        //     salaryScale: '',
        //     annualLeave: '',
        //     overTime: ''
        // };

        // if (this.state.touched.fullName && fullName.length < 5)
        //     errors.fullName = 'Vui lòng nhập đủ họ tên tối thiểu 5 ký tự';
        // else if (this.state.touched.fullName && fullName.length > 30)
        //     errors.fullName = 'Tên của bạn không dài quá 30 ký tự';

        // if (this.state.touched.salaryScale && salaryScale.length < 3)
        //     errors.salaryScale = 'Last Name should be >= 3 characters';
        // else if (this.state.touched.salaryScale && salaryScale.length > 10)
        //     errors.salaryScale = 'Last Name should be <= 10 characters';

        // if (this.state.touched.annualLeave && annualLeave.length < 3)
        //     errors.annualLeave = 'Last Name should be >= 3 characters';
        // else if (this.state.touched.annualLeave && annualLeave.length > 10)
        //     errors.annualLeave = 'Last Name should be <= 10 characters';

        // if (this.state.touched.overTime && overTime.length < 3)
        //     errors.overTime = 'Last Name should be >= 3 characters';
        // else if (this.state.touched.overTime && overTime.length > 10)
        //     errors.overTime = 'Last Name should be <= 10 characters';

        // return errors;
    }

    render() {
        // const errors = this.validate(
        //     this.state.fullName,
        //     this.state.doB,
        //     this.state.startDate,
        //     this.state.salaryScale,
        //     this.state.annualLeave,
        //     this.state.overTime
        // );
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row className="mt-3">
                                <Label htmlFor="fullName" md={2}>Full Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="fullName" name="fullName"
                                        placeholder="Full Name"
                                        value={this.state.fullName}
                                        // valid={errors.fullName === ''}
                                        // invalid={errors.fullName !== ''}
                                        onBlur={this.handleBlur('fullName')}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row className="mt-3">
                                <Label htmlFor="doB" md={2}>Date of Birth</Label>
                                <Col md={10}>
                                    <Input type="date" id="doB" name="doB"
                                        placeholder="BirthDay"
                                        value={this.state.doB}
                                        onBlur={this.handleBlur('doB')}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row className="mt-3">
                                <Label htmlFor="startDate" md={2}>Starting Date</Label>
                                <Col md={10}>
                                    <Input type="date" id="startDate" name="startDate"
                                        placeholder="Starting Date"
                                        value={this.state.startDate}
                                        onBlur={this.handleBlur('startDate')}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row className="mt-3">
                                <Label htmlFor="department" md={2}>Deparment</Label>
                                <Col md={10}>
                                    <Input type="select" id="department" name="department"
                                        placeholder="Department"
                                        value={this.state.department}
                                        onChange={this.handleInputChange}>
                                        <option value="Dept01">Sale</option>
                                        <option vlaue="Dept02">HR</option>
                                        <option value="Dept03">Marketing</option>
                                        <option value="Dept04">IT</option>
                                        <option value="Dept05">Finance</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row className="mt-3">
                                <Label htmlFor="salaryScale" md={2}>Salary Scale</Label>
                                <Col md={10}>
                                    <Input type="number" id="salaryScale" name="salaryScale"
                                        placeholder="1.0->3.0"
                                        value={this.state.salaryScale}
                                        onBlur={this.handleBlur('salaryScale')}
                                        onChange={this.handleInputChange} 
                                        />
                                </Col>
                            </FormGroup>
                            <FormGroup row className="mt-3">
                                <Label htmlFor="annualleave" md={2}>Annualleave</Label>
                                <Col md={10}>
                                    <Input type="number" id="annualLeave" name="annualLeave"
                                        placeholder="1.0"
                                        value={this.state.annualLeave}
                                        onBlur={this.handleBlur('annualLeave')}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row className="mt-3">
                                <Label htmlFor="overTime" md={2}>Over Time</Label>
                                <Col md={10}>
                                    <Input type="number" id="overTime" name="overTime"
                                        placeholder="1.0"
                                        value={this.state.overTime}
                                        onBlur={this.handleBlur('overTime')}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row className="mt-3">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Add</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </>

        );
    }
}

export default AddStaff;