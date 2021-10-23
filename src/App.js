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
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/configureStore';
import { connect } from 'react-redux';

const store = ConfigureStore();

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    role: state.role
  };
}

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const HomePage = () => {
      return (
        <Menu staffs={this.props.staffs} />
      );
    }

    const DetailStaff = ({ match }) => {
      const idStaff = +match.params.staffid
      const staff = this.props.staffs.filter((staff) => staff.id === idStaff)[0]
      return (
        <StaffDetail staff={staff} />
      )
    }

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/staff" component={() => <Menu staffs={this.props.staffs} />} />
              <Route exact path="/staff/:staffid" component={DetailStaff} />
              <Route path="/salary"><Income staffs={this.props.staffs} /></Route>
              <Route path="/department"><Department departments={this.props.departments} /></Route>
              <Route path="/contactus" component={() => <Contact />} />
              <Redirect to='/staff' />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));

