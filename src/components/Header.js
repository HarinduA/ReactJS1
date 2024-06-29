import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Home from '../comman/Home';  // Import your Home component
import Marks from '../comman/Marks'; // Import your Marks component
import Address from '../comman/Address';

class Header extends Component {
    render() {
        return (
            <Router>
                <header>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/home">Testing ReactJS</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <Link className="nav-link" to="/home">Home</Link>
                                    <Link className="nav-link" to="/marks">Marks</Link>
                                    <Link className="nav-link" to="/address">Address</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                {/* Define Routes for different components */}
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/marks" element={<Marks />} />
                    <Route path="/address" element={<Address />} />
                </Routes>
            </Router>
        );
    }
}

export default Header;
