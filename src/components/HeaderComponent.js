import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, FormGroup, Form, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
            
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    // cho anh xem cái nút sea

    handleLogin(event) {
        this.toggleModal();
        alert('Username: ' + this.username.value
            + 'Password: ' + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ung dung quan ly V1.0" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/department">
                                        <span className="fa fa-info fa-lg"></span> Department
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/staff">
                                        <span className="fa fa-address-card fa-lg"></span> Staff
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/salary">
                                        <span className="fa fa-money fa-lg"></span> Salary
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span> Log In
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;