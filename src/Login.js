import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    event.preventDefault();
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="container">
        <h3>Login to...</h3>
        <div className="row">
          <form className="col s12" onSubmit={event => this.handleSubmit(event)}>
            {/* ---password--- */}
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" name='password' className="validate" autocomplete="off"
                  value={this.state.password} onChange={(event) => this.handleChange(event)} />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            {/* ---e-mail--- */}
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" name='email' className="validate" autoComplete="off" value={this.state.email} onChange={(event) => this.handleChange(event)} />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            {/* ---Submit--- */}
            <button className="btn right col s12" type="submit" name="action">Submit</button>
          </form>
        </div>
        <div>
          <p>Need an account?</p>
        </div>
      </div>
    );
  }
}

export default Login;
