import React, { Component } from 'react';
import {
    Route,
    NavLink
  } from 'react-router-dom';

  import CourseItem from './CourseItem';

class Menu extends Component {
    render() {
      let {match} = this.props;
      console.log(match);
      return (
          <div>
              <h3>Course List</h3>
              <div className="list-group">
                <NavLink exact to={`${match.url}/angular`} activeClassName='active' className='list-group-item'>Angular</NavLink>
                
                <NavLink exact to={`${match.url}/react`} activeClassName='active' className='list-group-item'>React</NavLink>

                <NavLink  exact to={`${match.url}/nodejs`} activeClassName='active' className='list-group-item'>Node</NavLink>
              </div>

                <Route exact path={match.url} render= {()=>(
                     <h3>Plaese enter the course</h3>
                )} />

                <Route path={`${match.url}/:cname`} component = {CourseItem} />
          </div>
      );
    }
}

export default Menu;