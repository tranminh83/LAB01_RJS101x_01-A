import React, { Component } from 'react';
import { Card, CardImg, Button, FormGroup, Input, CardTitle, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null
        }
    }

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
                    <FormGroup row className="mt-3">
                        <Col md={3}>
                            <Button type="submit" color="primary">Search</Button>
                            <Input type="text" id="firstName" name="firstName"
                                placeholder="First Name"
                                value={this.state.firstname}
                                onChange={this.handleInputChange} />

                        </Col>
                    </FormGroup>
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