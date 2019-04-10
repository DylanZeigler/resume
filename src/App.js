import React, { Component } from 'react';
import $ from 'jquery';
import about from './components/about';
import contact from './components/contact';
import home from './components/home';
import interests from './components/interests';
import photos from './components/photos';
import resume from './components/resume';
import social from './components/social';

class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            personalData:{}
        }
    };

    getPersonalData(){
        $.ajax({
            url:'/personalData.json',
            dataType:'json',
            cache: false,
            success: function(data){
              this.setState({resumeData: data});
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
        return
    }
}

