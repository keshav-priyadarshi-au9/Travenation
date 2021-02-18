import React from 'react';
import { Component } from 'react';
import './user_dashboard.css'
import profile from '../images/profilePic.png'

const userinfo_URL = "http://localhost:2400/api/auth/userInfo"

class User_Profile extends Component{
    constructor(props){
        super(props)

        this.state={
            user:"",
            error:""
        }
    }
    render(){
        // if(sessionStorage.getItem('login_token') == null){
        //     this.props.history.push('/login')
        // }
        sessionStorage.setItem('role',this.state.user.role)
        return(
            <div className="dashboard">
                <div className="sidebar">
                    <img src={profile} alt="profilepic"/>
                    <h4>{this.state.user.name}</h4>
                    <h6>{this.state.user.role}</h6>
                </div>
                <div className="section">
                    {/* <h3>Welcome To Dashboard</h3>
                    <hr/> */}
                    <h4>Information</h4>
                    <hr/>
                    <div className="information">
                        <div className="name">
                            <h5>Name</h5> 
                            <h6>{this.state.user.name}</h6>
                        </div>
                        <div className="email">
                            <h5>E-mail</h5>
                            <h6>{this.state.user.email}</h6>
                        </div>
                    </div>
                    <h4>Position</h4>
                    <hr/>
                    <h6>Your Role : {this.state.user.role}</h6>
                    {/* <div className="view-button">
                        {sessionStorage.getItem('role')==='Admin'?
                    
                        <Link to="/admindashboard">
                            <button className="btn btn-outline-warning" type="submit" >Admin Dashboard</button>
                        </Link>
                        :
                        <Link to="viewbookings">
                            <button className="btn btn-outline-warning" type="submit">My Bookings</button>
                        </Link>
                        }
                    </div> */}
                </div>
            </div>
        )
    }
   componentDidMount(){
       fetch((userinfo_URL),{method:'GET',
       headers:{'x-access-token': sessionStorage.getItem('login_token')}})
       .then((res)=>res.json())
       .then((data)=>this.setState({
           user:data
       }))
   } 
}

export default User_Profile;