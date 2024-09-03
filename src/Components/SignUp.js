import React, { Component } from 'react';
import './SignUp.css'

export class SignUp extends Component {
    constructor(props){
        super(props);

        this.state={
            email:"",
            password:"",
            password_confimation:"",
            registrationErrors:""
        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSubmit(event){
        const{
            email,
            password,
            password_confirmation
        }=this.state;

      
    }
    render() {
        return (
            <div className="title">
            <h1>SIGN UP</h1>
            <div className="wrapper">
                <div className="form-wrapper">
               
               <form onSubmit={this.handleSubmit}>
               <div className="firstName">
                   <input type="email" 
                   name="email" 
                   placeholder="Email" 
                   value={this.state.email} 
                   onChange={this.handleChange} 
                   required />
</div>
<div className="password">
                    <input type="password" 
                   name="password" 
                   placeholder="Password" 
                   value={this.state.password} 
                   onChange={this.handleChange} 
                   required />
</div>
<div className="passwordConfirm">
                   <input type="password" 
                   name="password_confirmation" 
                   placeholder="Password Confiramtion" 
                   value={this.state.password_confirmation} 
                   onChange={this.handleChange} 
                   required />
</div>
<div className="createAccount">
                   <button type="submit">Register</button>
                   <button type="submit">I Already Have An Account</button>
                   </div>
                   </form>
                   </div>
            </div>
            </div>
        );
    }
}

export default SignUp;