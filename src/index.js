import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabs from './Tabs';
import App from './App';

// images
import parkeImage from './images/parke.jpg';


function ImageLoader(props) {
    return <img src={parkeImage} alt="Parkes Headshot" className="parke-image"/>;
  }

function HeaderLoader(props){
    return <div className="header">Parke Hunter</div>;
}

function AboutMe(props) {
  return <p className="about-me"> I am a self-starter and a team player. Motivated to
  help others, and recognized for providing an
  outstanding client experience and interaction.
  Seeking a career in marketing to apply my degree
  and pursue my interests in data & analytics and
  SEO.
  </p>;
}

function Experience(props) {
  return  <div>
            <h2>C L I E N T S U C C E S S M A N A G E R | N U T R I S L I C E , I N C . | J U N E 2 0 1 8 - P R E S E N T</h2>
            <ul>  
              <li>Account training, onboarding, implementation + software support for high value clients</li>
              <li>Travel to deliver on site trainings and to oversee successful project launches</li>
              <li>Film, edit, and add special effects to client facing training videos using Camtasia</li>
              <li>Create marketing materials and user guides for clients</li>
              <li>Innovate new ideas and able to adapt and be a team player in constantly changing start-up environment</li>
              <li>In-depth knowledge of Salesforce, HubSpot, and quickly learns new tools and software </li>
            </ul>
            <h2>C O M M E R C I A L S A L E S R E P R E S E N T A T I V E | G E I C O | A U G U S T 2 0 1 6 - J U N E 2 0 1 7 </h2>
            <ul>
              <li>Recognized as a leader in selling interaction and being detail oriented</li>
              <li>Key metrics include making 1 sale per active hour on the phone consistently</li>
              <li>Speak directly with business owners and gave expert advice and guidance</li>
              <li>Design insurance policy tailored to customer’s specific needs</li>
            </ul>
            <h2>M A R K E T I N G / P R I N T E R N | P O L Y M E R S O L U T I O N S , I N C | A U G U S T 2 0 1 5 - J A N U A R Y 2 0 1 6</h2>
            <h2>M A R K E T I N G E V E N T S I N T E R N | L E A D I N G A U T H O R I T I E S , I N C | M A Y 2 0 1 5 - A U G U S T 2 0 1 5</h2>
          </div>;
}
function Education(props) {
  return <div>
    <p className="school-name">VIRGINIA TECH</p>
    <p className="degree-name">B.S. IN BUSINESS MARKETING, SALES CONCENTRATION</p> 
    <p className="class-year">CLASS OF 2016</p>
    <p className="gpa">3.52 GPA</p> 
  </div>;
}
function ContactMe(props) {
  return <div>
    <p className="phone-numer"> c: 732.540.3114 </p>
    <p className="email">parkeehunter@gmail.com </p>
    <p className="address">Denver, CO 80202</p>
  </div>;
}
  // class Board extends React.Component {
  //     constructor(props){
  //         super(props);
  //         this.state = {
  //             squares: Array(9).fill(null),   
  //         };
  //     }
  //   renderSquare(i) {
  //     return (
  //     <Square 
  //       value={this.state.squares[i]}
  //       onClick={() => this.handleClick(i)}
  //       />
  //       );
  //   }
  //   handleClick(i){
  //      const squares = this.state.squares.slice();
  //      if(squares[i] === null){
  //          squares[i] = 'X';
  //      }
  //      else if(squares[i] === 'X'){
  //          squares[i] = 'O';
  //      }
  //      else{
  //          squares[i] = 'X';
  //      }
  //      this.setState({squares:squares}) 
  //   }
  //   render() {
  //     const status = 'Next player: X';
  
  //     return (
  //       <div>
  //         <div className="status">{status}</div>
  //         <div className="board-row">
  //           {this.renderSquare(0)}
  //           {this.renderSquare(1)}
  //           {this.renderSquare(2)}
  //         </div>
  //         <div className="board-row">
  //           {this.renderSquare(3)}
  //           {this.renderSquare(4)}
  //           {this.renderSquare(5)}
  //         </div>
  //         <div className="board-row">
  //           {this.renderSquare(6)}
  //           {this.renderSquare(7)}
  //           {this.renderSquare(8)}
  //         </div>
  //       </div>
  //     );
  //   }
  // }
  
  class Resume extends React.Component {
    render() {
      return (
        <div className="resume">
        <h1 className="header-element">
            <HeaderLoader />
        </h1>
        <Tabs>
        <div className="about-me-table" label="About Me">
          <div className="about-me-table-row">
            <AboutMe />
            <ImageLoader />
          </div>
        </div>
        <div label="Experience">
          <Experience />
        </div>
        <div label="Education">
          <Education />
        </div>
        <div label="Contact Me">
          <ContactMe />
        </div>
      </Tabs>
        </div>

      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Resume />,
    document.getElementById('root')
  );
  