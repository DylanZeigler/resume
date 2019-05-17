import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Interests from './components/Interests';
import Photos from './components/Photos';
import Resume from './components/Resume';
import Social from './components/Social';

class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            personalData:{
                key1:"value1"
            }
        }
    };

    getPersonalData(){
        $.ajax({
            url:'/personal_data/personalData.json',
            dataType:'json',
            cache: false,
            success: function(data){
              this.setState({personalData: data});
            }.bind(this),
            error: function(xhr, status, err){
              console.log(err);
              alert(err);
            }
          });
    }
    componentDidMount(){
        this.getPersonalData();
    }
    render(){
        return(<div className="App">
            <Home data={this.state.personalData}/>
            <About data={this.state.personalData}/>
            <Contact data={this.state.personalData}/>
            <Interests data={this.state.personalData}/>
            <Photos data={this.state.personalData}/>
            <Resume data={this.state.personalData}/>
            <Social data={this.state.personalData}/>
        </div>);
    }
}
export default App;

