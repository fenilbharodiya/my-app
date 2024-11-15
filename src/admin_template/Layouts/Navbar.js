import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {

    return (
        <>
            <nav className="navbar navbar-expand navbar-light navbar-bg">
                <a className="sidebar-toggle js-sidebar-toggle">
                    <i className="hamburger align-self-center"></i>
                </a>

                <div>
                    <Link to='/' className='form' href="index.html">
                        <p>ADD TASK</p>
                    </Link>
                </div>
                {/* <h4>{count}</h4> */}
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav navbar-align">

                        <li className="nav-item">
                            <a className="nav-icon" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
                                <i className="align-middle" data-feather="message-square"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
                                <div className="dropdown-menu-header">
                                    <div className="position-relative">4 New Messages</div>
                                </div>
                                <div className="list-group">
                                    {['Vanessa Tucker', 'William Harris', 'Christina Mason', 'Sharon Lessman'].map((name, index) => (
                                        <a href="#" className="list-group-item" key={index}>
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src={`img/avatars/avatar-${index + 2}.jpg`} className="avatar img-fluid rounded-circle" alt={name} />
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">{name}</div>
                                                    <div className="text-muted small mt-1">Message content here.</div>
                                                    <div className="text-muted small mt-1">Time ago</div>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                                <div className="dropdown-menu-footer">
                                    <a href="#" className="text-muted">Show all messages</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" />
                                <span className="text-dark">Charles Hall</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="pages-profile.html">
                                    <i className="align-middle me-1" data-feather="user"></i> Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="align-middle me-1" data-feather="pie-chart"></i> Analytics
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="index.html">
                                    <i className="align-middle me-1" data-feather="settings"></i> Settings & Privacy
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="align-middle me-1" data-feather="help-circle"></i> Help Center
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Log out</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
