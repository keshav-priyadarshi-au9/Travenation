import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom'

const regURL = "http://localhost:2400/api/auth/register" 
// const regURL = "https://jsonwebtokenlogin.herokuapp.com/api/auth/register"

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
            // console.log(this.state)
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
            <div className="col-md-8 offset-2" style={{ marginTop: "50px", marginBottom: "50px" }}>

                <div className="signup-input" onChange={this.handler}>
                    <h2>SignUp</h2>
                    <hr/>

                    <i><h5>Enter your name</h5></i> 
                    <input className="form-control" name="name" type="text" placeholder="fullname" />
                    <br/>

                    <i><h5>Enter your E-mail</h5></i> 
                    <input className="form-control" name="email" type="email" placeholder="e-mail"/>
                    <br/>

                    <i><h5>Enter your Password</h5></i>  
                    <input className="form-control" name="password" type="password" placeholder="password"/>
                    <br/>

                </div>

                <div>
                    <button style={{width:"150px"}} className="btn btn-outline-secondary" type="submit" onClick={this.submit_form}>Submit</button>
                    <p>Already a user? <Link to="/login">LogIn</Link> </p>
                </div>

            </div>
        )
    }
  
}

export default SignUp;