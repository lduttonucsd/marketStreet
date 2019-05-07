import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../components/AuthService';
import API from '../utils/API';

class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(this.state.username, this.state.email, this.state.password)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        this.props.history.replace('/login');
      })
      .catch(err => alert(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="page-container">
        <div className="jumbotron">
          <div className="saleCard" style={{ width: "70rem" }}>
            <form onSubmit={this.handleFormSubmit}>
              <h1 className="salehead" style={{ textAlign: "center" }}>Sign Up</h1>
              <p className="float-right"><Link to="/login">Go to Log In</Link></p>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input className="form-control"
                  placeholder="Username goes here..."
                  name="username"
                  type="text"
                  id="username"
                  style={{ width: "500px" }}
                  onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input className="form-control"
                  placeholder="Email goes here..."
                  name="email"
                  type="email"
                  id="email"
                  style={{ width: "500px" }}
                  onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input className="form-control"
                  placeholder="Password goes here..."
                  name="password"
                  type="password"
                  id="pwd"
                  style={{ width: "500px" }}
                  onChange={this.handleChange} />
              </div>
              <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;