/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
// import { Link } from "react-router-dom";


     
export default class TeamMember extends Component {
  
  render() {
    // eslint-disable-next-line no-unused-vars
    const {id, firstname, lastname, photo, position, facebookLink } = this.props.member
    
    return (
      <div className="col-md-4 wow fadeInUp" data-wow-delay=".5s">
        <div className="st-member">
          <img src={photo} alt="" />
          <div className="st-s-icon">
            <ul>
              <li>
                {/* <Link to={()=>this.props.history.push(facebookLink)}> */}
                <i
                  onClick={() => (window.location.href = facebookLink)}
                  className="fab fa-facebook-f sicon sticon"
                ></i>
                {/* </Link> */}
              </li>
            </ul>
          </div>
        </div>
        <h3 className="fullname wow fadeInDown" data-wow-delay="1s">
          {firstname + " " + lastname}
        </h3>
        <p className="wow fadeInDown" data-wow-delay="1.5s">
          {position}
        </p>
      </div>
    );
  }
}
