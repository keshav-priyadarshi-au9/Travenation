import React from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

function Header(props) {
    const handleLogout=()=>{
        // console.log("Header",props)
        sessionStorage.removeItem('login_token')
        sessionStorage.removeItem('role')
        props.history.push('/')
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <Link class="navbar-brand" to="/">Travenation</Link>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                   
                    {sessionStorage.getItem('login_token')?
                    <>
                        <li class="nav-item">
                        
                        </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/admindashboard">Admin Dashboard</Link>
                    </li>
                    </>
                    :null
                    }
                </ul>
                <form class="d-flex">
                    {
                        sessionStorage.getItem('login_token')?
                        <>
                        <Link class="nav-link" to="/viewbookings">My Bookings</Link>
                        <Link to='/dashboard'><button class="btn btn-outline-success" type="submit">Profile</button></Link>
                        <button class="btn btn-outline-success" type="submit" onClick={handleLogout}>LogOut</button>
                        </>
                        :
                        <>
                        <Link to='/login'><button class="btn btn-outline-success" type="submit">LogIn</button></Link>
                        <Link to='/signup'><button class="btn btn-outline-success" type="submit">SignUp</button></Link>
                        </>
                    }
                </form>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default withRouter(Header)
