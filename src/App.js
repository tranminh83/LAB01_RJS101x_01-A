import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './components/MenuComponent';
import Menu from './components/StaffListComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { STAFFS } from './shared/staffs';
import { DEPARTMENTS } from './shared/staffs';
import { ROLE } from './shared/staffs';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS
    };
  }
  
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự V1.0</NavbarBrand>
          </div>
        </Navbar>
        <Menu staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App;
