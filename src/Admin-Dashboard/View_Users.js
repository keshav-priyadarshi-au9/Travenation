import React from "react";
import { Component } from "react";
import {Link} from 'react-router-dom'
import './view_users.css'
const profileURL = "http://localhost:2400/api/auth/users"

class View_Users extends Component{
  constructor(props){
    super(props)

    this.state={
        users : ""
    }
  }
  componentDidMount(){
    fetch((profileURL),{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{this.setState({users:data})})
  }
  
  renderUserDetails = (userData) => {
    // console.log("user details", userData);
    if (userData) {
      return userData.map((item, index) => {
        return (
          <tr>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
          </tr>
        );
      });
    }
  };
  render(){
  return (
    <div className="view_users">
      <h1>List Of Users</h1>
      <hr/>
        <Link to="/admindashboard"><button style={{marginBottom:"10px",color:'black'}} className="btn btn-outline-secondary" type="submit">Back</button></Link>
        <div>
            
        </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>S.No.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
          </tr>
        </thead>
        <tbody>{this.renderUserDetails(this.state.users)}</tbody>
      </table>
    </div>
  );
  }
};
export default View_Users;
