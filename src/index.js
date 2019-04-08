import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabs from './Tabs';

// images
import parkeImage from './images/parke.jpg';

// function Square(props) {
//       return (
//         <button 
//             className="square" 
//             onClick = {props.onClick}
//         >
//           {props.value}
//         </button>
//       );
//   }

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
  return <div>

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
  