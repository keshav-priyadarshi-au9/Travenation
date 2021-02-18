import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import './login.css'

const logURL=" http://localhost:2400/api/auth/login";

class LogIn extends Component{
    state={
        email : "",
        password : ""
    }
    handler = (event) => {
        let data = event.target.value
        let state_name = event.target.name
        this.setState({
            [state_name] : data
        })
    }

    submit_form=()=> {
        if(this.state.email && this.state.password){
            fetch((logURL),{method:'POST',
            headers:{'Accept':'application/json',
                'Content-Type':'application/json'},
            body:JSON.stringify(this.state)
            })
            .then((res)=>res.json())
            .then((data)=>{
                sessionStorage.setItem('login_token',data.token)
                this.props.history.push('/dashboard')
            })
        }
        else{
            alert("please provide your details")
        }
        
    }

    render(){
    return(
        <div className="login">
            <div className="login-input" onChange={this.handler}>
                <h3>LogIn</h3>
                E-mail  <input id="input-mail" className="form-control" name="email" type="email" placeholder="e-mail"/>
                Password <input id="input-password" className="form-control" name="password" type="password" placeholder="password"/>
            </div>
            <center>
                <button className="btn btn-primary" type="submit" onClick={this.submit_form}>Submit</button>
                <p>Not Registered? <Link to="/signup">SignUp</Link> </p>
            </center>
        </div>
    )
}
}   
export default LogIn;