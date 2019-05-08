import React from 'react'

class Navigation extends React.Component {

    render () {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element">
                                <img />
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                    <span className="block m-t-xs font-bold">David Williams</span>
                                    <span className="text-muted text-xs block">Art Director <b
                                        className="caret"></b></span>
                                </a>
                            </div>
                        </li>
                        <li className="active">
                            <a href="index.html"><i className="fa fa-th-large"></i> <span
                                className="nav-label">Dashboards</span> <span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level collapse in" aria-expanded="true">
                                <li><a href="index.html">Dashboard v.1</a></li>
                                <li><a href="dashboard_2.html">Dashboard v.2</a></li>
                                <li><a href="dashboard_3.html">Dashboard v.3</a></li>
                                <li className="active"><a href="dashboard_4_1.html">Dashboard v.4</a></li>
                                <li><a href="dashboard_5.html">Dashboard v.5 </a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}

export default Navigation