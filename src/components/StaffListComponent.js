import React, { Component } from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Search from './SearchComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null,
            inputValue: '',
            staffs: props.staffs
        }
    }

    searchHandle = (keyWord) => {
        const tim = this.props.staffs.filter(item => item.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1
        );
        this.setState({ inputValue: keyWord, staffs: tim });
    }

    render() {
        const menu = this.state.staffs.map((staff) => {
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
                <div className="row my-3">
                    <h3 className="col-6">Staff</h3>
                    <Search keyWord={(keyWord) => this.searchHandle(keyWord)} />
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;