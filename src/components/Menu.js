import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
        	<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
				<div className="list-group">
                    <NavLink exact to="/" className="list-group-item">Home</NavLink>
                    <NavLink to="/about"  className="list-group-item">About</NavLink>
                    <NavLink to="/course" className="list-group-item">Course</NavLink>
				</div>
			</div>
        );
    }
}

export default Menu;