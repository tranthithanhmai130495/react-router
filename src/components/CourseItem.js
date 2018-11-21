import React, { Component } from 'react';

class CourseItem extends Component {
	
    render() {
        let {match} = this.props;
        //console.log(match);
        let courseName = match.params.cname;
        return (
            <div >
               <h3>Couse Name:  {courseName}</h3>
            </div>
        );
    }
}

export default CourseItem;