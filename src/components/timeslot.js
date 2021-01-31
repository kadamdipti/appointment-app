import React  from "react";
import {Details} from './Details.js';
import { BrowserRouter, Route, Link  } from 'react-router-dom';


var ReactDOM = require('react-dom');


export default class Timeslot extends React.Component{
  constructor(props){
         super(props);
         this.state ={
         	bgcolor1: "white",
         	bgcolor2: "white",
         	bgcolor3: "white",
         	bgcolor4: "white",
         	bgcolor5: "white",
         	bgcolor6: "white",
         	bgcolor7: "white",
         	bgcolor8: "white",
         	bgcolor9: "white"        	

         };
         
      if(localStorage.getItem("div1")) 
      {
      	
      	this.state.bgcolor1 = JSON.parse(localStorage.getItem("div1"));
      	
  	}
       if(localStorage.getItem("div2")) {
      this.state.bgcolor2 = JSON.parse(localStorage.getItem("div2"));
      
  }
       if(localStorage.getItem("div3")) {
      this.state.bgcolor3 = JSON.parse(localStorage.getItem("div3"));
      
  }
       if(localStorage.getItem("div4")) {
      this.state.bgcolor4 = JSON.parse(localStorage.getItem("div4"));
      
  }
       if(localStorage.getItem("div5")) {
      this.state.bgcolor5 = JSON.parse(localStorage.getItem("div5"));
      
  }
       if(localStorage.getItem("div6")) {
      this.state.bgcolor6 = JSON.parse(localStorage.getItem("div6"));
      
  }
       if(localStorage.getItem("div7")) {
        	this.state.bgcolor7 = JSON.parse(localStorage.getItem("div7"));
      
  }
       if(localStorage.getItem("div8")) {
      this.state.bgcolor8 = JSON.parse(localStorage.getItem("div8"));
      
  }
        if(localStorage.getItem("div9")) {
      this.state.bgcolor9 = JSON.parse(localStorage.getItem("div9"));     

      }
    }     

    render(){
       
    return (
      <BrowserRouter> 
      <div>      
      <center>
      <h2> Timeslot </h2>
      <Link to={{ pathname: '/details', state: { foo: 'one', name : 'div1'} }}><div style={{width:'60px', height:'60px', border:'2px solid black',marginTop:'100px', marginRight:'23px',display:'inline-block',backgroundColor: this.state.bgcolor1 }}><b>9am - 10am</b></div></Link>      
      <Link to={{ pathname: '/details', state: { foo: 'Two', name : 'div2'} }}> <div  style={{width:'60px', height:'60px', border:'2px solid black',marginRight:'23px', display:'inline-block',backgroundColor: this.state.bgcolor2}} >10am - 11am</div></Link> 
      <Link to={{ pathname: '/details', state: { foo: 'Three',name :'div3' } }}> <div  style={{width:'60px', height:'60px', border:'2px solid black',marginRight:'23px', display:'inline-block',backgroundColor: this.state.bgcolor3}} >11am -12am</div></Link> 
      <br/>
       <Link to={{ pathname: '/details', state: { foo: 'Four', name : 'div4'} }}><div style={{width:'60px', height:'60px', border:'2px solid black',marginTop:'30px', marginRight:'23px', display:'inline-block' ,backgroundColor: this.state.bgcolor4}} >12am - 1pm</div></Link> 
      <Link to={{ pathname: '/details', state: { foo: 'Five', name: 'div5'} }}><div style={{width:'60px', height:'60px', border:'2px solid black',marginRight:'23px', display:'inline-block',backgroundColor: this.state.bgcolor5}} >2pm - 3pm</div></Link> 
      <Link to={{ pathname: '/details', state: { foo: 'Six', name: 'div6'} }}><div style={{width:'60px', height:'60px', border:'2px solid black',marginRight:'23px', display:'inline-block',backgroundColor: this.state.bgcolor6}} >2pm - 3pm</div></Link> 
      <br/>
     <Link to={{ pathname: '/details', state: { foo: 'Seven', name: 'div7'} }}><div  style={{width:'60px', height:'60px', border:'2px solid black',marginTop:'30px', marginRight:'23px', display:'inline-block',backgroundColor: this.state.bgcolor7}} >3pm - 4pm</div></Link> 
      <Link to={{ pathname: '/details', state: { foo: 'Eight', name: 'div8'} }}><div style={{width:'60px', height:'60px', border:'2px solid black',marginRight:'23px', display:'inline-block',backgroundColor: this.state.bgcolor8}} >4pm - 5pm</div></Link> 
      <Link to={{ pathname: '/details', state: { foo: 'Nine',name:'div9'} }}><div style={{width:'60px', height:'60px', border:'2px solid black',marginRight:'23px', display:'inline-block',backgroundColor: this.state.bgcolor9}} >5pm - 6pm</div></Link>

    
  <Route path= '/details' component={Details} />
    

    
      </center>
      
      </div>
</BrowserRouter> 
     
    );
  }
}