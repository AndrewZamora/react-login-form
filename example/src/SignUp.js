import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        };
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        event.preventDefault();
    }
    handleSubmit(event) {
        // Connect to backend
        alert(`First Name:${this.state.firstName}, Last Name:${this.state.lastName}, E-mail:${this.state.email}, Password:${this.state.password}`);
        event.preventDefault();
    }

    handleClick(event) {
        event.preventDefault();
        this.props.onClick();
      }

    render() {
        return (
            <div className="container">
                <h3>Sign Up for...</h3>
                <div className="row">
                    <form className="col s12" onSubmit={event => this.handleSubmit(event)}>
                        {/* ---First and Last Name--- */}
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" name="firstName" type="text" className="validate" autocomplete="off" onChange={event => this.handleChange(event)} />
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" name="lastName" type="text" className="validate" autocomplete="off" onChange={event => this.handleChange(event)} />
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        {/* ---password--- */}
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" name="password" type="password" className="validate" autocomplete="off" onChange={event => this.handleChange(event)} />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        {/* ---e-mail--- */}
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" name="email" type="email" className="validate" autocomplete="off" onChange={event => this.handleChange(event)} />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <button className="btn right col s12" type="submit" name="action" >Submit</button>
                    </form>
                </div>
                <div>
                    <p>Already have an account? </p>
                    <a href="" onClick={event => this.handleClick(event)}>
                        Log In
            </a>
                </div>
            </div>
        );
    }
}

export default SignUp;
