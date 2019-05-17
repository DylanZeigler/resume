import React, { Component } from 'react';

class About extends Component {
    render() {

      var profilepic= "images/parke.jpg";
      var bio = 'this is my bio';
      var name = 'parke';
      var street = 'larimer';
      var city = 'Denver';
      var state = 'Colorado';
      var zip = '80202';
      var phone = '555-555-5555'
      var email = 'email@mail.com'
      var resumeDownload = 'Download Resume'

      return (
        <section id="about">
        <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
        </section>
      );
    }
  }
  
  export default About;