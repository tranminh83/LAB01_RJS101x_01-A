import React, { Component } from 'react';
import Menu from './components/StaffListComponent';
import Contact from './components/ContactComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import StaffDetail from './components/StaffDetailComponent';
import Income from './components/IncomeComponent';
import Department from './components/DepartmentComponent';
import './App.css';
import { STAFFS, DEPARTMENTS, ROLE } from './shared/staffs';
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    role: state.role
  };
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
      role: ROLE
    };
    this.addStaff = this.addStaff.bind(this);
  }

  addStaff(staff) {
    this.setState({ staffs: [...this.state.staffs, ...[{ ...staff, ...{ id: this.state.staffs.length } }]] });
  }

  render() {

    // const HomePage = () => {
    //   return (
    //     <Menu staffs={this.state.staffs} />
    //   );
    // }

    const DetailStaff = ({ match }) => {
      const idStaff = +match.params.staffid
      const staff = this.state.staffs.filter((staff) => staff.id === idStaff)[0]
      console.log('staff', staff)
      return (
        <StaffDetail staff={staff} />
      )
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/staff" component={() => <Menu staffs={this.state.staffs} addStaff={this.addStaff} />} />
          <Route exact path="/staff/:staffid" component={DetailStaff} />
          <Route path="/salary"><Income staffs={this.state.staffs} /></Route>
          <Route path="/department"><Department departments={this.state.departments} /></Route>
          <Route path="/contactus" component={() => <Contact />} />
          <Redirect to='/staff' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));

