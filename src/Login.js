import React, { Component } from 'react';
import fire from './config/Fire';

class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: '',
            error: false
        };
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    login(e){
        e.preventDefault();

        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((u) => {
            //upon success we can do something here if needed
        })
        .catch((err) => {
            console.log(err);
            this.setState({error: true});
        });
    }

    signup(e){
        e.preventDefault();

        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {
            // we can do something here as well
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render(){
        return (
            <div className="loginmodal-container">
                <form>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <span className={this.state.error ? "error" : "hidden"}>The user doesn't exist. Did you signup?</span><br/><br/>
                    <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                    <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
                </form>
            </div>
        );
    }
}

export default Login;