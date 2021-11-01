import React, { Component } from 'react';
import Home from './components/HomeComponent';
import Menu from './components/StaffListComponent';
import Contact from './components/ContactComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import StaffDetail from './components/StaffDetailComponent';
import Income from './components/IncomeComponent';
import Department from './components/DepartmentComponent';
import './App.css';
import {STAFFS, DEPARTMENTS, ROLE} from './shared/staffs'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
      role: ROLE
    };
  }

  render() {
    console.log('aa', this.state.staffs)

    const HomePage = () => {
      return (
        <Menu staffs={this.state.staffs} />
      );
    }

    const DetailStaff = ({match}) => {
      const idStaff = +match.params.staffid
      const staff = this.state.staffs.filter((staff) => staff.id === idStaff)[0]
      return (
        <StaffDetail staff={staff} />
      )
    }

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/staff" component={() => <Menu staffs={this.state.staffs} />} />
            <Route exact path="/staff/:staffid" component={DetailStaff}/>
            <Route path="/salary"><Income staffs={this.state.staffs} /></Route>
            <Route path="/department"><Department departments={this.state.departments} /></Route>
            <Redirect to='/home' />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

