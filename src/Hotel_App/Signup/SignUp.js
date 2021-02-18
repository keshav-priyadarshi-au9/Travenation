import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom'
import './signup.css'

const regURL = "http://localhost:2400/api/auth/register" //post api for registering the user

class SignUp extends Component{
    state={
        name : "",
        email : "",
        password : "",
        role :""
    }

    handler = (event) => {
        let data = event.target.value
        let state_name = event.target.name
        this.setState({
            [state_name] : data
        })
    }

    submit_form=()=> {
        if(this.state.email && this.state.name && this.state.password){
            console.log(this.state)
            fetch((regURL),{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},
            body:JSON.stringify(this.state)
            })
            .then(this.props.history.push('/login'))
        }
        
        else{
            alert("please fill all input details")
        }
    }

    render(){
        return(
            <div className="signup">
                <div className="signup-input" onChange={this.handler}>
                    <h3>SignUp</h3>
                    Enter your name : <input className="form-control" name="name" type="text" placeholder="fullname" />
                    Enter your E-mail : <input className="form-control" name="email" type="email" placeholder="e-mail"/>
                    Enter your Password : <input className="form-control" name="password" type="password" placeholder="password"/>
                </div>
                <center>
                    <button className="btn btn-primary" type="submit" onClick={this.submit_form}>Submit</button>
                    <p>Already a user? <Link to="/login">LogIn</Link> </p>
                </center>
            </div>
        )
    }
  
}

export default SignUp;